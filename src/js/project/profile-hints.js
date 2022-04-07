const profileHints = () => {
    const hintSection = document.querySelector('.hints');
    const createProfile = document.querySelector('.create-profile');

    const modalAvatar = document.getElementById('modalAvatar');
    const modalReturnAvatar = document.getElementById('modalReturnAvatar');
    const pageFocus = document.querySelector('.page-focus');

    const prizesAchivments = document.querySelectorAll('.prizes-achievement');

    if (document.querySelector('.profile')) {
        const modalOpen = (modal) => {
            const content = modal.querySelector('.modal__content');
            modal.classList.remove('modal--close');
            modal.classList.add('modal--open');
            setTimeout(function() {
                content.classList.add('modal__content--open');
            }, 1000);
        }
    
        const modalClose = (modal) => {
            const content = modal.querySelector('.modal__content');
            content.classList.remove('modal__content--open');
            setTimeout(function() {
                modal.classList.add('modal--close');
            }, 400);
            setTimeout(function() {
                modal.classList.remove('modal--open');
            }, 1000);
        }
    
        const thirdHintSwitch = () => {
            document.querySelectorAll('.hints__message').forEach(function(message, index) {
                if (index <= 1) {
                    message.classList.remove('is-active');
                    message.classList.add('d-none');
                }
                if (index === 2) { message.classList.add('is-active') }
            });
    
        }
    
        modalAvatar.querySelector('.modal-close').addEventListener('click', function() {
            modalClose(modalAvatar);
            setTimeout(function() {
                // pageFocus.classList.add('page-focus--leftCenter');
                // prizesAchivments.forEach(function(item) {
                //     item.classList.add('focus-priority');
                // });
                // hintSection.classList.remove('hints--hidden');
    
                modalOpen(modalReturnAvatar);
            }, 1000);
        });
    
        modalReturnAvatar.querySelector('.modal__content-offer-btn').addEventListener('click', function() {
            modalClose(modalReturnAvatar);
            thirdHintSwitch();
            setTimeout(function() {
                pageFocus.classList.add('page-focus--rightCenter');
                hintSection.classList.remove('hints--hidden');
                prizesAchivments.forEach(function(item) {
                    item.classList.add('focus-priority');
                });
            }, 1000);
        });
    
        modalReturnAvatar.querySelector('.modal__content-create-btn').addEventListener('click', function() {
            modalClose(modalReturnAvatar);
            setTimeout(function() {
                modalOpen(modalAvatar);
            }, 1000);
        });
    
        modalAvatar.querySelector('.modal__content-create-btn').addEventListener('click', function() {
            modalClose(modalAvatar);
            thirdHintSwitch();
            setTimeout(function() {
                pageFocus.classList.add('page-focus--rightCenter');
                hintSection.classList.remove('hints--hidden');
                prizesAchivments.forEach(function(item) {
                    item.classList.add('focus-priority');
                });
    
            }, 1000);
        });

        $('.hints__message--3 .message__next').on('click', function(event) {    
            pageFocus.classList.remove('page-focus--rightCenter');
            pageFocus.classList.add('hidden');
            prizesAchivments.forEach(function(item) {
                item.classList.remove('focus-priority');
            });
    
            $('.page__border').removeClass('page__border--hidden');
            const scrollBar = new SimpleBar(document.getElementById('pageContainerProfile'));
            $("#pageContainerProfile").animate({ scrollBottom: $(document).height() }, 1000);
            $('.profile__tabs-item--first .profile__tabs-item-info-control').addClass('pulse-anim');
        });

        $('.hints__message--4 .message__next').on('click', function(event) {
        });
    
        if (hintSection) {
            $('.hints__message').find('.message__next').on('click', function() {
                let currentMessage = this.closest('.hints__message');
                let nextClass = this.getAttribute('data-message');
                let nextMessage = $(this).parent().siblings(`.${nextClass}`)
                currentMessage.classList.remove('is-active');
    
                setTimeout(function() {
                    currentMessage.classList.add('d-none');
                    nextMessage.addClass('is-active');
                }, 600);
            });
        }
    
        if (createProfile) {
            const createProfileBtn = document.querySelector('.new-profile-btn');
            createProfileBtn.addEventListener('click', function() {
                createProfileBtn.classList.remove('new-profile-btn--animation');
                createProfile.classList.remove('focus-priority');
    
                pageFocus.classList.remove('page-focus--left');
                hintSection.classList.add('hints--hidden');
                modalOpen(modalAvatar);
            });
        }
    }
}

export { profileHints };