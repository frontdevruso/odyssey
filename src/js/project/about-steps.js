const about = () => {
    const about = document.querySelector('.about');
    if (!about) return;

    const message = about.querySelectorAll('.about__message')

    message.forEach(elem => {
        const next = elem.querySelector('.message__next');
        next.addEventListener('click', () => {
            let nextClass = next.getAttribute('data-message');
            elem.classList.remove('is-active');
            elem.classList.add('is-no-active');
            console.log(elem);
            const nextMessage = document.querySelector(`.${nextClass}`);
            nextMessage.classList.add('is-active');
            if(elem.classList.contains('message-5')) {
                document.querySelector('.bottom-btn').classList.remove('hidden')
            }
        })
    })
}

export { about };