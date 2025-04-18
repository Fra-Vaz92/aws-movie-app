(function() {
    addIcons();
    function addIcons() {
        if (document.readyState === "loading") return document.addEventListener("DOMContentLoaded", addIcons);
        const svg = document.body.appendChild(document.createElementNS("http://www.w3.org/2000/svg", "svg"));
        svg.innerHTML = `<g id="icon-1" class="tsd-no-select"><rect fill="var(--color-icon-background)" stroke="var(--color-ts-module)" stroke-width="1.5" x="1" y="1" width="22" height="22" rx="6"></rect><text fill="var(--color-icon-text)" x="50%" y="50%" dominant-baseline="central" text-anchor="middle">M</text></g><g id="icon-2" class="tsd-no-select"><rect fill="var(--color-icon-background)" stroke="var(--color-ts-module)" stroke-width="1.5" x="1" y="1" width="22" height="22" rx="6"></rect><text fill="var(--color-icon-text)" x="50%" y="50%" dominant-baseline="central" text-anchor="middle">M</text></g><g id="icon-4" class="tsd-no-select"><rect fill="var(--color-icon-background)" stroke="var(--color-ts-namespace)" stroke-width="1.5" x="1" y="1" width="22" height="22" rx="6"></rect><text fill="var(--color-icon-text)" x="50%" y="50%" dominant-baseline="central" text-anchor="middle">N</text></g><g id="icon-8" class="tsd-no-select"><rect fill="var(--color-icon-background)" stroke="var(--color-ts-enum)" stroke-width="1.5" x="1" y="1" width="22" height="22" rx="6"></rect><text fill="var(--color-icon-text)" x="50%" y="50%" dominant-baseline="central" text-anchor="middle">E</text></g><g id="icon-16" class="tsd-no-select"><rect fill="var(--color-icon-background)" stroke="var(--color-ts-property)" stroke-width="1.5" x="1" y="1" width="22" height="22" rx="12"></rect><text fill="var(--color-icon-text)" x="50%" y="50%" dominant-baseline="central" text-anchor="middle">P</text></g><g id="icon-32" class="tsd-no-select"><rect fill="var(--color-icon-background)" stroke="var(--color-ts-variable)" stroke-width="1.5" x="1" y="1" width="22" height="22" rx="6"></rect><text fill="var(--color-icon-text)" x="50%" y="50%" dominant-baseline="central" text-anchor="middle">V</text></g><g id="icon-64" class="tsd-no-select"><rect fill="var(--color-icon-background)" stroke="var(--color-ts-function)" stroke-width="1.5" x="1" y="1" width="22" height="22" rx="6"></rect><text fill="var(--color-icon-text)" x="50%" y="50%" dominant-baseline="central" text-anchor="middle">F</text></g><g id="icon-128" class="tsd-no-select"><rect fill="var(--color-icon-background)" stroke="var(--color-ts-class)" stroke-width="1.5" x="1" y="1" width="22" height="22" rx="6"></rect><text fill="var(--color-icon-text)" x="50%" y="50%" dominant-baseline="central" text-anchor="middle">C</text></g><g id="icon-256" class="tsd-no-select"><rect fill="var(--color-icon-background)" stroke="var(--color-ts-interface)" stroke-width="1.5" x="1" y="1" width="22" height="22" rx="6"></rect><text fill="var(--color-icon-text)" x="50%" y="50%" dominant-baseline="central" text-anchor="middle">I</text></g><g id="icon-512" class="tsd-no-select"><rect fill="var(--color-icon-background)" stroke="var(--color-ts-constructor)" stroke-width="1.5" x="1" y="1" width="22" height="22" rx="12"></rect><text fill="var(--color-icon-text)" x="50%" y="50%" dominant-baseline="central" text-anchor="middle">C</text></g><g id="icon-1024" class="tsd-no-select"><rect fill="var(--color-icon-background)" stroke="var(--color-ts-property)" stroke-width="1.5" x="1" y="1" width="22" height="22" rx="12"></rect><text fill="var(--color-icon-text)" x="50%" y="50%" dominant-baseline="central" text-anchor="middle">P</text></g><g id="icon-2048" class="tsd-no-select"><rect fill="var(--color-icon-background)" stroke="var(--color-ts-method)" stroke-width="1.5" x="1" y="1" width="22" height="22" rx="12"></rect><text fill="var(--color-icon-text)" x="50%" y="50%" dominant-baseline="central" text-anchor="middle">M</text></g><g id="icon-4096" class="tsd-no-select"><rect fill="var(--color-icon-background)" stroke="var(--color-ts-function)" stroke-width="1.5" x="1" y="1" width="22" height="22" rx="6"></rect><text fill="var(--color-icon-text)" x="50%" y="50%" dominant-baseline="central" text-anchor="middle">F</text></g><g id="icon-8192" class="tsd-no-select"><rect fill="var(--color-icon-background)" stroke="var(--color-ts-property)" stroke-width="1.5" x="1" y="1" width="22" height="22" rx="12"></rect><text fill="var(--color-icon-text)" x="50%" y="50%" dominant-baseline="central" text-anchor="middle">P</text></g><g id="icon-16384" class="tsd-no-select"><rect fill="var(--color-icon-background)" stroke="var(--color-ts-constructor)" stroke-width="1.5" x="1" y="1" width="22" height="22" rx="12"></rect><text fill="var(--color-icon-text)" x="50%" y="50%" dominant-baseline="central" text-anchor="middle">C</text></g><g id="icon-32768" class="tsd-no-select"><rect fill="var(--color-icon-background)" stroke="var(--color-ts-property)" stroke-width="1.5" x="1" y="1" width="22" height="22" rx="12"></rect><text fill="var(--color-icon-text)" x="50%" y="50%" dominant-baseline="central" text-anchor="middle">P</text></g><g id="icon-65536" class="tsd-no-select"><rect fill="var(--color-icon-background)" stroke="var(--color-ts-type-alias)" stroke-width="1.5" x="1" y="1" width="22" height="22" rx="6"></rect><text fill="var(--color-icon-text)" x="50%" y="50%" dominant-baseline="central" text-anchor="middle">T</text></g><g id="icon-131072" class="tsd-no-select"><rect fill="var(--color-icon-background)" stroke="var(--color-ts-type-alias)" stroke-width="1.5" x="1" y="1" width="22" height="22" rx="6"></rect><text fill="var(--color-icon-text)" x="50%" y="50%" dominant-baseline="central" text-anchor="middle">T</text></g><g id="icon-262144" class="tsd-no-select"><rect fill="var(--color-icon-background)" stroke="var(--color-ts-accessor)" stroke-width="1.5" x="1" y="1" width="22" height="22" rx="12"></rect><text fill="var(--color-icon-text)" x="50%" y="50%" dominant-baseline="central" text-anchor="middle">A</text></g><g id="icon-524288" class="tsd-no-select"><rect fill="var(--color-icon-background)" stroke="var(--color-ts-accessor)" stroke-width="1.5" x="1" y="1" width="22" height="22" rx="12"></rect><text fill="var(--color-icon-text)" x="50%" y="50%" dominant-baseline="central" text-anchor="middle">A</text></g><g id="icon-1048576" class="tsd-no-select"><rect fill="var(--color-icon-background)" stroke="var(--color-ts-accessor)" stroke-width="1.5" x="1" y="1" width="22" height="22" rx="12"></rect><text fill="var(--color-icon-text)" x="50%" y="50%" dominant-baseline="central" text-anchor="middle">A</text></g><g id="icon-2097152" class="tsd-no-select"><rect fill="var(--color-icon-background)" stroke="var(--color-ts-type-alias)" stroke-width="1.5" x="1" y="1" width="22" height="22" rx="6"></rect><text fill="var(--color-icon-text)" x="50%" y="50%" dominant-baseline="central" text-anchor="middle">T</text></g><g id="icon-4194304" class="tsd-no-select"><rect fill="var(--color-icon-background)" stroke="var(--color-ts-reference)" stroke-width="1.5" x="1" y="1" width="22" height="22" rx="12"></rect><text fill="var(--color-icon-text)" x="50%" y="50%" dominant-baseline="central" text-anchor="middle">R</text></g><g id="icon-8388608" class="tsd-no-select"><rect fill="var(--color-icon-background)" stroke="var(--color-document)" stroke-width="1.5" x="1" y="1" width="22" height="22" rx="6"></rect><g stroke="var(--color-icon-text)" fill="none" stroke-width="1.5"><polygon points="6,5 6,19 18,19, 18,10 13,5"></polygon><line x1="9" y1="9" x2="13" y2="9"></line><line x1="9" y1="12" x2="15" y2="12"></line><line x1="9" y1="15" x2="15" y2="15"></line></g></g><g id="icon-folder" class="tsd-no-select"><rect fill="var(--color-icon-background)" stroke="var(--color-document)" stroke-width="1.5" x="1" y="1" width="22" height="22" rx="6"></rect><g stroke="var(--color-icon-text)" fill="none" stroke-width="1.5"><polygon points="5,5 10,5 12,8 19,8 19,18 5,18"></polygon></g></g><g id="icon-chevronDown" class="tsd-no-select"><path d="M4.93896 8.531L12 15.591L19.061 8.531L16.939 6.409L12 11.349L7.06098 6.409L4.93896 8.531Z" fill="var(--color-icon-text)"></path></g><g id="icon-chevronSmall" class="tsd-no-select"><path d="M1.5 5.50969L8 11.6609L14.5 5.50969L12.5466 3.66086L8 7.96494L3.45341 3.66086L1.5 5.50969Z" fill="var(--color-icon-text)"></path></g><g id="icon-checkbox" class="tsd-no-select"><rect class="tsd-checkbox-background" width="30" height="30" x="1" y="1" rx="6" fill="none"></rect><path class="tsd-checkbox-checkmark" d="M8.35422 16.8214L13.2143 21.75L24.6458 10.25" stroke="none" stroke-width="3.5" stroke-linejoin="round" fill="none"></path></g><g id="icon-menu" class="tsd-no-select"><rect x="1" y="3" width="14" height="2" fill="var(--color-icon-text)"></rect><rect x="1" y="7" width="14" height="2" fill="var(--color-icon-text)"></rect><rect x="1" y="11" width="14" height="2" fill="var(--color-icon-text)"></rect></g><g id="icon-search" class="tsd-no-select"><path d="M15.7824 13.833L12.6666 10.7177C12.5259 10.5771 12.3353 10.499 12.1353 10.499H11.6259C12.4884 9.39596 13.001 8.00859 13.001 6.49937C13.001 2.90909 10.0914 0 6.50048 0C2.90959 0 0 2.90909 0 6.49937C0 10.0896 2.90959 12.9987 6.50048 12.9987C8.00996 12.9987 9.39756 12.4863 10.5008 11.6239V12.1332C10.5008 12.3332 10.5789 12.5238 10.7195 12.6644L13.8354 15.7797C14.1292 16.0734 14.6042 16.0734 14.8948 15.7797L15.7793 14.8954C16.0731 14.6017 16.0731 14.1267 15.7824 13.833ZM6.50048 10.499C4.29094 10.499 2.50018 8.71165 2.50018 6.49937C2.50018 4.29021 4.28781 2.49976 6.50048 2.49976C8.71001 2.49976 10.5008 4.28708 10.5008 6.49937C10.5008 8.70852 8.71314 10.499 6.50048 10.499Z" fill="var(--color-icon-text)"></path></g><g id="icon-anchor" class="tsd-no-select"><g stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M10 14a3.5 3.5 0 0 0 5 0l4 -4a3.5 3.5 0 0 0 -5 -5l-.5 .5"></path><path d="M14 10a3.5 3.5 0 0 0 -5 0l-4 4a3.5 3.5 0 0 0 5 5l.5 -.5"></path></g></g><g id="icon-alertNote" class="tsd-no-select"><path fill="var(--color-alert-note)" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm8-6.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13ZM6.5 7.75A.75.75 0 0 1 7.25 7h1a.75.75 0 0 1 .75.75v2.75h.25a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1 0-1.5h.25v-2h-.25a.75.75 0 0 1-.75-.75ZM8 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"></path></g><g id="icon-alertTip" class="tsd-no-select"><path fill="var(--color-alert-tip)" d="M8 1.5c-2.363 0-4 1.69-4 3.75 0 .984.424 1.625.984 2.304l.214.253c.223.264.47.556.673.848.284.411.537.896.621 1.49a.75.75 0 0 1-1.484.211c-.04-.282-.163-.547-.37-.847a8.456 8.456 0 0 0-.542-.68c-.084-.1-.173-.205-.268-.32C3.201 7.75 2.5 6.766 2.5 5.25 2.5 2.31 4.863 0 8 0s5.5 2.31 5.5 5.25c0 1.516-.701 2.5-1.328 3.259-.095.115-.184.22-.268.319-.207.245-.383.453-.541.681-.208.3-.33.565-.37.847a.751.751 0 0 1-1.485-.212c.084-.593.337-1.078.621-1.489.203-.292.45-.584.673-.848.075-.088.147-.173.213-.253.561-.679.985-1.32.985-2.304 0-2.06-1.637-3.75-4-3.75ZM5.75 12h4.5a.75.75 0 0 1 0 1.5h-4.5a.75.75 0 0 1 0-1.5ZM6 15.25a.75.75 0 0 1 .75-.75h2.5a.75.75 0 0 1 0 1.5h-2.5a.75.75 0 0 1-.75-.75Z"></path></g><g id="icon-alertImportant" class="tsd-no-select"><path fill="var(--color-alert-important)" d="M0 1.75C0 .784.784 0 1.75 0h12.5C15.216 0 16 .784 16 1.75v9.5A1.75 1.75 0 0 1 14.25 13H8.06l-2.573 2.573A1.458 1.458 0 0 1 3 14.543V13H1.75A1.75 1.75 0 0 1 0 11.25Zm1.75-.25a.25.25 0 0 0-.25.25v9.5c0 .138.112.25.25.25h2a.75.75 0 0 1 .75.75v2.19l2.72-2.72a.749.749 0 0 1 .53-.22h6.5a.25.25 0 0 0 .25-.25v-9.5a.25.25 0 0 0-.25-.25Zm7 2.25v2.5a.75.75 0 0 1-1.5 0v-2.5a.75.75 0 0 1 1.5 0ZM9 9a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"></path></g><g id="icon-alertWarning" class="tsd-no-select"><path fill="var(--color-alert-warning)" d="M6.457 1.047c.659-1.234 2.427-1.234 3.086 0l6.082 11.378A1.75 1.75 0 0 1 14.082 15H1.918a1.75 1.75 0 0 1-1.543-2.575Zm1.763.707a.25.25 0 0 0-.44 0L1.698 13.132a.25.25 0 0 0 .22.368h12.164a.25.25 0 0 0 .22-.368Zm.53 3.996v2.5a.75.75 0 0 1-1.5 0v-2.5a.75.75 0 0 1 1.5 0ZM9 11a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"></path></g><g id="icon-alertCaution" class="tsd-no-select"><path fill="var(--color-alert-caution)" d="M4.47.22A.749.749 0 0 1 5 0h6c.199 0 .389.079.53.22l4.25 4.25c.141.14.22.331.22.53v6a.749.749 0 0 1-.22.53l-4.25 4.25A.749.749 0 0 1 11 16H5a.749.749 0 0 1-.53-.22L.22 11.53A.749.749 0 0 1 0 11V5c0-.199.079-.389.22-.53Zm.84 1.28L1.5 5.31v5.38l3.81 3.81h5.38l3.81-3.81V5.31L10.69 1.5ZM8 4a.75.75 0 0 1 .75.75v3.5a.75.75 0 0 1-1.5 0v-3.5A.75.75 0 0 1 8 4Zm0 8a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"></path></g>`;
        svg.style.display = "none";
        if (location.protocol === "file:") updateUseElements();
    }

    function updateUseElements() {
        document.querySelectorAll("use").forEach(el => {
            if (el.getAttribute("href").includes("#icon-")) {
                el.setAttribute("href", el.getAttribute("href").replace(/.*#/, "#"));
            }
        });
    }
})()