import { fadeIn, fadeOut } from '../events/fadein';
const preloader = () => {
    document.addEventListener("DOMContentLoaded", () => {
        const preloader = document.querySelector('.preloader');
        if (!preloader) return;
        const fadeInContent = document.querySelectorAll('[fade-in-preloader]');
        const animationEnd = () => {
            setTimeout(() => {
                fadeOut(preloader);
                fadeInContent.forEach(elem => {
                    fadeIn(elem);
                })
            }, 200);
        }

        const preloaderRocket = preloader.querySelector('.preloader__rocket');
        preloader.classList.add('is-animate');

        const preloaderProcent = preloader.querySelector('.preloader__procent');
        let procentStart = 0;
        setInterval(() => {
            if (procentStart < 100) {
                procentStart = procentStart + 1;
                preloaderProcent.innerHTML = `${procentStart}%`;
            }
        }, 20);


        preloaderRocket.addEventListener("webkitAnimationEnd", animationEnd);
        preloaderRocket.addEventListener("animationend", animationEnd);

    });
}


export { preloader };