import { about } from "./project/about-steps";
import { buttons } from "./project/buttons";
import { preloader } from "./project/preloader";
import { profileHints } from "./project/profile-hints";
import { control } from "./project/control";

let app = {
    init() {
        preloader();
        about();
        buttons();
        profileHints();
        control();
    }
};
app.init();