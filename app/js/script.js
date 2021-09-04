"use strict";
document
    .querySelector("#js-toggle-theme-btn")
    .addEventListener("click", (ev) => {
        switch (document.body.getAttribute("data-theme")) {
            case "dark":
                document.body.setAttribute("data-theme", "light");
                break;
            case "light":
                document.body.setAttribute("data-theme", "dark");
                break;
        }
        ev.currentTarget.classList.toggle("toggle-theme-btn--dark");
    });
