const profileHints = () => {
    if (document.querySelector('.profile')) {
        const hintSection = document.querySelector('.hints');
        const createProfile = document.querySelector('.create-profile');
    
        const modalAvatar = document.getElementById('modalAvatar');
        const modalReturnAvatar = document.getElementById('modalReturnAvatar');
        const pageFocus = document.querySelector('.page-focus');
    
        const prizesAchivments = document.querySelectorAll('.prizes-achievement');

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
                pageFocus.classList.add('page-focus--left');
                hintSection.classList.remove('hints--hidden');
                createProfile.classList.add('focus-priority');
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
                pageFocus.classList.add('page-focus--left');
                hintSection.classList.remove('hints--hidden');
                createProfile.classList.add('focus-priority');
            }, 1000);
        });

        const thirdHintSwitch = () => {
            document.querySelectorAll('.hints__message').forEach(function(message, index) {
                if (index <= 1) {
                    message.classList.remove('is-active');
                    message.classList.add('d-none');
                }
                if (index === 2) { message.classList.add('is-active') }
            });
    
        }

        $('.hints__message--3 .message__next').on('click', function(event) {    
            pageFocus.classList.remove('page-focus--left');
            pageFocus.classList.add('page-focus--rightCenter');
            createProfile.classList.remove('focus-priority');

            prizesAchivments.forEach(function(item) {
                item.classList.add('focus-priority');
            });
        });

        $('.hints__message--4 .message__next').on('click', function(event) {    
            pageFocus.classList.remove('page-focus--rightCenter');
            pageFocus.classList.add('page-focus--center');
        });
    

        $('.hints__message--5 .message__next').on('click', function(event) {    
            pageFocus.classList.remove('page-focus--rightCenter');
            pageFocus.classList.add('hidden');
            prizesAchivments.forEach(function(item) {
                item.classList.remove('focus-priority');
            });
    
            $('.page__border').removeClass('page__border--hidden');
            $("#pageContainerProfile").removeClass('page__container--hidden');
            $("#pageContainerProfile").removeClass('.page__container--hidden');
            $("#pageContainerProfile").animate({ scrollBottom: $(document).height() }, 1000);
            $('.profile__tabs-item--first .profile__tabs-item-info-control').addClass('pulse-anim');
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
            if (createProfileBtn) {
                createProfileBtn.addEventListener('click', function() {
                    createProfileBtn.classList.remove('new-profile-btn--animation');
                    createProfile.classList.remove('focus-priority');
        
                    pageFocus.classList.remove('page-focus--left');
                    hintSection.classList.add('hints--hidden');
                    modalOpen(modalAvatar);
                });
            }
        }

        if(document.querySelector('.profile__prizes-slider')) {
            console.log('FSDAF')

            let swiperPrizes = new Swiper(".profile__prizes-slider", {
                slidesPerView: "auto",
                spaceBetween: 19,
                freeMode: true,

                navigation: {
                    nextEl: ".profile__prizes-slider-arrow--next",
                    prevEl: ".profile__prizes-slider-arrow--prev",
                  },
            });
        }
    }
}

export { profileHints };