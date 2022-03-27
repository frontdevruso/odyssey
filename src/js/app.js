import { about } from "./project/about-steps";
import { buttons } from "./project/buttons";
import { preloader } from "./project/preloader";
import { profileHints } from "./project/profile-hints";

let app = {
    init() {
        preloader();
        about();
        buttons();
        profileHints();
    }
};
app.init();