import { fadeIn } from "../events/fadein";

const buttons = () => {
    const fadeInButtons = document.querySelectorAll('[button-fadein]');
    if (!fadeInButtons) return;

    fadeInButtons.forEach(elem => {
        elem.addEventListener('click', () => {
            let classOpen = elem.getAttribute('button-fadein');
            let openBlock = document.querySelector(`.${classOpen}`);
            fadeIn(openBlock);
        })
    })
}

export { buttons };