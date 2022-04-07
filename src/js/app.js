import { about } from "./project/about-steps";
import { buttons } from "./project/buttons";
import { preloader } from "./project/preloader";
import { profileHints } from "./project/profile-hints";
import { control } from "./project/control";
import { faq } from "./project/faq";
import { planets } from "./project/planets";

let app = {
    init() {
        preloader();
        about();
        buttons();
        planets();
        profileHints();
        control();
        faq();
    }
};
app.init();