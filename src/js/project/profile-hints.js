const profileHints = () => {
    const hintSection = document.querySelector('.hints');
    const createProfile = document.querySelector('.create-profile');
    const hintMessages = document.querySelectorAll('.hints__message');

    const modalAvatar = document.getElementById('modalAvatar');
    const pageFocus = document.querySelector('.page-focus');

    const prizesAchivments = document.querySelectorAll('.prizes-achievement');

    const modalOpen = () => {
        const content = modalAvatar.querySelector('.modal__content');
        modalAvatar.classList.add('modal--open');
        setTimeout(function() {
            content.classList.add('modal__content--open');
        }, 1000);
    }

    const modalClose = () => {
        const content = modalAvatar.querySelector('.modal__content');
        content.classList.remove('modal__content--open');
        setTimeout(function() {
            modalAvatar.classList.add('modal--close');
        }, 400);
        setTimeout(function() {
            modalAvatar.classList.remove('modal--open');
        }, 1000);
    }

    modalAvatar.querySelector('.modal-close').addEventListener('click', function() {
        modalClose();
        setTimeout(function() {
            pageFocus.classList.add('page-focus--leftCenter');
            prizesAchivments.forEach(function(item) {
                item.classList.add('focus-priority');
            });
            hintSection.classList.remove('hints--hidden');
        }, 1000);
    });

    if (hintSection) {
        hintMessages.forEach(function(btn, index) {
            const hintBtn = document.querySelector('[data-message]');
            hintBtn.addEventListener('click', function() {
                let nextClass = hintBtn.getAttribute('data-message');
                btn.classList.remove('is-active');
                const nextMessage = document.querySelector(`.${nextClass}`);
                setTimeout(function() {
                    hintMessages[index - 1].style.display = "none";
                    nextMessage.classList.add('is-active');
                }, 600);
            })
        });
    }

    if (createProfile) {
        const createProfileBtn = document.querySelector('.new-profile-btn');
        createProfileBtn.addEventListener('click', function() {
            createProfileBtn.classList.remove('new-profile-btn--animation');
            createProfile.classList.remove('focus-priority');

            pageFocus.classList.remove('page-focus--left');
            hintSection.classList.add('hints--hidden');
            modalOpen();
        });
    }
}

export { profileHints };