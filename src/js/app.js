import { about } from "./project/about-steps";
import { buttons } from "./project/buttons";
import { preloader } from "./project/preloader";
import { profileHints } from "./project/profile-hints";
import { control } from "./project/control";
import { faq } from "./project/faq";
import { planets } from "./project/planets";
import { smoothScroll } from "./project/smooth-scroll";

let app = {
    init() {
        preloader();
        about();
        buttons();
        profileHints();
        planets();
        control();
        faq();
        smoothScroll();
    }
};
app.init();

// function smoothScroll() {
//     document.querySelector('.simplebar-offset').classList.add('SmoothScroll');
  
//     new SmoothScroll({
//         target: document.querySelector('.simplebar-content-wrapper'),
//         scrollEase: 0.9,
//         maxOffset: 5000,
//     });
// }

// document.addEventListener('DOMContentLoaded', function() {
//     smoothScroll();
// });