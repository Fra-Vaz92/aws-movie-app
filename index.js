const bodyParser = require('body-parser');
const express = require('express');
const morgan = require('morgan');
const path = require('path');
const mongoose = require('mongoose');
const Models = require('./models.js');
const { check, validationResult } = require('express-validator');
const fileUpload = require('express-fileupload');
const { S3Client, ListObjectsV2Command, PutObjectCommand, GetObjectCommand } = require('@aws-sdk/client-s3');
const fs = require('fs');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();

const Movies = Models.Movie;
const Users = Models.User;
const Genres = Models.Genre;
const Directors = Models.Director;

const app = express();

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/myFlixDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(fileUpload({}));

// CORS setup
const allowedOrigins = [
  'http://localhost:4200',
  'http://localhost:3000',
  'http://localhost:8080',
  'http://localhost:1234',
  'https://fra-vaz92.github.io',
  'https://app-for-movie.netlify.app/',
  'http://my-bucket-frontend-2.6.s3-website-us-east-1.amazonaws.com/',
];

app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error('Not allowed by CORS'));
      }
    },
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    credentials: true,
  })
);

// Morgan Middleware
app.use(morgan('combined'));

// Passport Middleware for authentication (assuming './auth' and './passport' are correctly set up)
let auth = require('./auth')(app);
const passport = require('passport');
require('./passport');

// AWS S3 Client Configuration
const s3Client = new S3Client({
  region: 'us-east-1', // Ensure this matches your bucket region
});
const BUCKET_NAME = process.env.BUCKET_NAME || 'my-bucket-2.5'; // Use environment variable or default
const UPLOAD_TEMP_PATH = './uploads';

// Create temporary upload directory if it doesn't exist
if (!fs.existsSync(UPLOAD_TEMP_PATH)) {
  fs.mkdirSync(UPLOAD_TEMP_PATH);
}

// --- Movie API Endpoints ---

// GET Welcome message
app.get('/', (req, res) => {
  res.send('Welcome to my Movie and Image App!');
});

// GET documentation file
app.use(express.static('public'));

// READ/GET all movies
app.get('/movies', passport.authenticate('jwt', { session: false }), async (req, res) => {
  try {
    const movies = await Movies.find();
    res.json(movies);
  } catch (err) {
    console.error(err);
    res.status(500).send('Error: ' + err);
  }
});

// READ/GET movie by Title
app.get('/movies/:Title', passport.authenticate('jwt', { session: false }), async (req, res) => {
  try {
    const movie = await Movies.findOne({ Title: req.params.Title });
    if (movie) {
      res.json(movie);
    } else {
      res.status(404).send(`Movie with the title ${req.params.Title} was not found.`);
    }
  } catch (err) {
    console.error(err);
    res.status(500).send('Error: ' + err);
  }
});

// READ/GET all genres
app.get('/genres', passport.authenticate('jwt', { session: false }), async (req, res) => {
  try {
    const genres = await Genres.find();
    res.json(genres);
  } catch (err) {
    console.error(err);
    res.status(500).send('Error: ' + err);
  }
});

// READ/GET genre by Name
app.get('/genres/:Name', passport.authenticate('jwt', { session: false }), async (req, res) => {
  try {
    const genre = await Genres.findOne({ Name: req.params.Name });
    if (genre) {
      res.json(genre);
    } else {
      res.status(404).send(`Genre with the name ${req.params.Name} was not found.`);
    }
  } catch (err) {
    console.error(err);
    res.status(500).send('Error: ' + err);
  }
});

// READ/GET director by Name
app.get('/directors/:name', passport.authenticate('jwt', { session: false }), async (req, res) => {
  try {
    const movie = await Movies.findOne({ 'Director.Name': req.params.name });
    if (movie && movie.Director) {
      res.json(movie.Director);
    } else {
      res.status(404).send(`Director with the name ${req.params.name} was not found.`);
    }
  } catch (err) {
    console.error(err);
    res.status(500).send('Error: ' + err);
  }
});

// POST/CREATE new user
app.post(
  '/users/register',
  [
    check('Username', 'Username is required').isLength({ min: 5 }),
    check('Username', 'Username contains non alphanumeric characters - not allowed.').isAlphanumeric(),
    check('Password', 'Password is required').not().isEmpty(),
    check('Email', 'Email does not appear to be valid.').isEmail(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }
    const hashedPassword = Users.hashPassword(req.body.Password);
    try {
      const userExists = await Users.findOne({ Username: req.body.Username });
      if (userExists) {
        return res.status(400).send(req.body.Username + ' already exists;');
      } else {
        const newUser = await Users.create({
          Username: req.body.Username,
          Password: hashedPassword,
          Email: req.body.Email,
          Birthday: req.body.Birthday,
        });
        res.status(201).json(newUser);
      }
    } catch (error) {
      console.error(error);
      res.status(500).send('Error: ' + error);
    }
  }
);

// READ/GET all users
app.get('/users', passport.authenticate('jwt', { session: false }), async (req, res) => {
  try {
    const users = await Users.find();
    res.json(users);
  } catch (err) {
    console.error(err);
    res.status(500).send('Error: ' + err);
  }
});

// READ/GET user by Username
app.get('/users/:Username', passport.authenticate('jwt', { session: false }), async (req, res) => {
  try {
    const user = await Users.findOne({ Username: req.params.Username });
    if (user) {
      res.json(user);
    } else {
      res.status(404).send(`User with the username ${req.params.Username} was not found.`);
    }
  } catch (err) {
    console.error(err);
    res.status(500).send('Error: ' + err);
  }
});

// PUT/UPDATE user by Username
app.put('/users/:Username', passport.authenticate('jwt', { session: false }), async (req, res) => {
  if (req.user.Username !== req.params.Username) {
    return res.status(400).send('Permission denied');
  }
  try {
    const updatedUser = await Users.findOneAndUpdate(
      { Username: req.params.Username },
      {
        $set: {
          Username: req.body.Username,
          Password: req.body.Password,
          Email: req.body.Email,
          Birthday: req.body.Birthday,
        },
      },
      { new: true }
    );
    res.json(updatedUser);
  } catch (err) {
    console.error(err);
    res.status(500).send('Error: ' + err);
  }
});

// POST/ADD movie to user's favorites
app.post('/users/:Username/favorites/:movieID', passport.authenticate('jwt', { session: false }), async (req, res) => {
  if (req.user.Username !== req.params.Username) {
    return res.status(403).send('Permission denied');
  }
  try {
    const movieExists = await Movies.findById(req.params.movieID);
    if (!movieExists) {
      return res.status(404).send('Movie not found');
    }
    const updatedUser = await Users.findOneAndUpdate(
      { Username: req.params.Username },
      { $addToSet: { FavoriteMovies: req.params.movieID } },
      { new: true }
    );
    res.json(updatedUser);
  } catch (err) {
    console.error(err);
    res.status(500).send('Error: ' + err);
  }
});

// DELETE/REMOVE movie from user's favorites
app.delete('/users/:Username/favorites/:movieID', passport.authenticate('jwt', { session: false }), async (req, res) => {
  if (req.user.Username !== req.params.Username) {
    return res.status(403).send('Permission denied');
  }
  try {
    const updatedUser = await Users.findOneAndUpdate(
      { Username: req.params.Username },
      { $pull: { FavoriteMovies: req.params.movieID } },
      { new: true }
    );
    res.json(updatedUser);
  } catch (err) {
    console.error(err);
    res.status(500).send('Error: ' + err);
  }
});

// DELETE/REMOVE user by Username
app.delete('/users/:Username', passport.authenticate('jwt', { session: false }), async (req, res) => {
  try {
    const deletedUser = await Users.findOneAndDelete({ Username: req.params.Username });
    if (!deletedUser) {
      return res.status(400).send(req.params.Username + ' was not found.');
    } else {
      res.status(200).send(req.params.Username + ' was deleted.');
    }
  } catch (err) {
    console.error(err);
    res.status(500).send('Error: ' + err);
  }
});

// --- Image Resize API Endpoints ---

// 1. List only resized thumbnails
app.get('/objects', async (req, res) => {
  try {
    const listObjectsParams = {
      Bucket: BUCKET_NAME,
      Prefix: 'resized-images/',
    };
    const listObjectsCmd = new ListObjectsV2Command(listObjectsParams);
    const listObjectsResponse = await s3Client.send(listObjectsCmd);

    const files = (listObjectsResponse.Contents || []).map((obj) => ({
      Key: obj.Key.replace('resized-images/', ''),
      Url: `https://${BUCKET_NAME}.s3.amazonaws.com/${obj.Key}`,
    }));

    res.json(files);
  } catch (error) {
    console.error('GET /objects error:', error);
    res.status(500).json({ error: 'Error listing objects', details: error.message });
  }
});

// 2. Upload file to original-images/ prefix
app.post('/objects', async (req, res) => {
  try {
    if (!req.files || Object.keys(req.files).length === 0) {
      return res.status(400).json({ error: 'No files were uploaded.' });
    }

    const file = req.files.file;
    const fileName = file.name;
    const tempPath = `${UPLOAD_TEMP_PATH}/${fileName}`;

    await new Promise((resolve, reject) => {
      file.mv(tempPath, (err) => {
        if (err) {
          console.error('File move error:', err);
          reject(err);
        } else {
          resolve();
        }
      });
    });

    const fileContent = fs.readFileSync(tempPath);
    const uploadParams = {
      Bucket: BUCKET_NAME,
      Key: `original-images/${fileName}`,
      Body: fileContent,
    };
    const uploadCmd = new PutObjectCommand(uploadParams);
    await s3Client.send(uploadCmd);
    fs.unlinkSync(tempPath);
    res.json({ message: 'File uploaded successfully!' });
  } catch (error) {
    console.error('Error in /objects POST:', error);
    res.status(500).json({ error: 'File upload failed.', details: error.message });
  }
});

// 3. Get original image
app.get('/objects/:key', async (req, res) => {
  try {
    const getObjectParams = {
      Bucket: BUCKET_NAME,
      Key: `original-images/${req.params.key}`,
    };
    const getObjectCmd = new GetObjectCommand(getObjectParams);
    const getObjectResponse = await s3Client.send(getObjectCmd);

    res.setHeader('Content-Disposition', `inline; filename="${req.params.key}"`);
    getObjectResponse.Body.pipe(res);
  } catch (error) {
    console.error('Error retrieving object:', error);
    res.status(500).send('Error retrieving object');
  }
});

// Health check route
app.get('/health', (req, res) => {
  res.status(200).send('Server is healthy!');
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('Error:', err.stack);
  res.status(500).send('Something went wrong!');
});

// Start the server
const port = process.env.PORT || 8080;
app.listen(port, '0.0.0.0', () => {
  console.log(`Listening on Port ${port}`);
});