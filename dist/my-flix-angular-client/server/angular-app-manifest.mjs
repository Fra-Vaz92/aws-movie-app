
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/welcome"
  },
  {
    "renderMode": 2,
    "route": "/movies"
  },
  {
    "renderMode": 2,
    "route": "/profile"
  },
  {
    "renderMode": 2,
    "route": "/image-resize"
  },
  {
    "renderMode": 2,
    "redirectTo": "/welcome",
    "route": "/"
  }
],
  assets: {
    'index.csr.html': {size: 70836, hash: '3f7c91b2eb072f2d2968ba389a487e61a1da7d03869cda438491f2ea0fe4c9a7', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17211, hash: 'd95a2dafdd5280e690838bbc5b38508b7cfacd2334466d10fa3ba05f80a84a58', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'movies/index.html': {size: 73903, hash: '5edf28b07f95543c177d9dbe2c937a0be436722439d7ab23d738f6d076bf6ee8', text: () => import('./assets-chunks/movies_index_html.mjs').then(m => m.default)},
    'welcome/index.html': {size: 73272, hash: 'c8d3589830a885229ddf707a1cea7b6d3154f83e53cebf80666456c5a509580d', text: () => import('./assets-chunks/welcome_index_html.mjs').then(m => m.default)},
    'profile/index.html': {size: 86864, hash: '166eb63a35c61307bfc543aa7f0005b63f7bb9df3f305d6b783d308519e28ed7', text: () => import('./assets-chunks/profile_index_html.mjs').then(m => m.default)},
    'image-resize/index.html': {size: 74455, hash: '082029effc3ea3b2730d694b5e8b833e32ff813fc75708079b03f2d08f898926', text: () => import('./assets-chunks/image-resize_index_html.mjs').then(m => m.default)},
    'styles-GDHIXXDX.css': {size: 95424, hash: 'rJUbJbDiSAg', text: () => import('./assets-chunks/styles-GDHIXXDX_css.mjs').then(m => m.default)}
  },
};
