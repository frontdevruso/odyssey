const profileHints = () => {
    if (document.querySelector('.profile')) {
        const hintSection = document.querySelector('.hints');
        const createProfile = document.querySelector('.create-profile');
    
        const modalAvatar = document.getElementById('modalAvatar');
        const modalReturnAvatar = document.getElementById('modalReturnAvatar');
        const pageFocus = document.querySelector('.page-focus');

        const prizesAchivments = document.querySelectorAll('.prizes-achievement');
        
        const smoothLinks = document.querySelectorAll('a[href^="#"]');
        smoothLinks.forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                console.log(this.getAttribute('href'));
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth',
                });
            });
        });

        const modalOpen = (modal) => {
            const content = modal.querySelector('.modal__content');
            modal.classList.remove('modal--close');
            modal.classList.add('modal--open');
            setTimeout(function() {
                content.classList.add('modal__content--open');
            }, 1000);
        };

        const modalClose = (modal) => {
            const content = modal.querySelector('.modal__content');
            content.classList.remove('modal__content--open');
            setTimeout(function() {
                modal.classList.add('modal--close');
            }, 400);
            setTimeout(function() {
                modal.classList.remove('modal--open');
            }, 1000);
        };
    
        if (modalAvatar.querySelector('.modal-close')) {
            modalAvatar.querySelector('.modal-close').addEventListener('click', function() {
                modalClose(modalAvatar);
                setTimeout(function() {
                    modalOpen(modalReturnAvatar);
                }, 1000);
            });
        }
    
        modalReturnAvatar.querySelector('.modal__content-offer-btn').addEventListener('click', function() {
            modalClose(modalReturnAvatar);
            thirdHintSwitch();
            setTimeout(function() {
                if (pageFocus) pageFocus.classList.add('page-focus--left');
                if (hintSection) hintSection.classList.remove('hints--hidden');
                if (pageFocus) createProfile.classList.add('focus-priority');
            }, 1000);
        });
        
        if (modalReturnAvatar.querySelector('.modal__content-create-btn')) {
            modalReturnAvatar.querySelector('.modal__content-create-btn').addEventListener('click', function() {
                modalClose(modalReturnAvatar);
                setTimeout(function() {
                    modalOpen(modalAvatar);
                }, 1000);
            });
        }
    
        if (modalAvatar.querySelector('.modal__content-create-btn')) {
            modalAvatar.querySelector('.modal__content-create-btn').addEventListener('click', function() {
                modalClose(modalAvatar);
                thirdHintSwitch();
                setTimeout(function() {
                    if (pageFocus) pageFocus.classList.add('page-focus--left');
                    if (hintSection) hintSection.classList.remove('hints--hidden');
                    if (pageFocus) createProfile.classList.add('focus-priority');
                }, 1000);
            });
        }

        const thirdHintSwitch = () => {
            document.querySelectorAll('.hints__message').forEach(function(message, index) {
                if (index <= 1) {
                    message.classList.remove('is-active');
                    message.classList.add('d-none');
                }
                if (index === 2) { message.classList.add('is-active'); }
            });
    
        };

        if (document.querySelector('.hints__message--3 .message__next')) {
            document.querySelector('.hints__message--3 .message__next').addEventListener('click', function() {
                pageFocus.classList.remove('page-focus--left');
                pageFocus.classList.add('page-focus--rightCenter');
                createProfile.classList.remove('focus-priority');
        
                prizesAchivments.forEach(function(item) {
                    item.classList.add('focus-priority');
                });
            });
        }

        if (document.querySelector('.hints__message--4 .message__next')) {
            document.querySelector('.hints__message--4 .message__next').addEventListener('click', function() {
                pageFocus.classList.remove('page-focus--rightCenter');
                pageFocus.classList.add('page-focus--center');
            });
        }
    

        if (document.querySelector('.hints__message--5 .message__next')) {
            document.querySelector('.hints__message--5 .message__next').addEventListener('click', function() {
                pageFocus.classList.remove('page-focus--rightCenter');
                pageFocus.classList.add('hidden');
                prizesAchivments.forEach(function(item) {
                    item.classList.remove('focus-priority');
                });
        
                document.querySelector('.page__border').classList.remove('page__border--hidden');
                document.querySelector('#pageContainerProfile').classList.remove('page__container--hidden');
                document.querySelector('.profile__tabs-item--first .profile__tabs-item-info-control').classList.add('pulse-anim');
            });
        }
    
        if (hintSection) {
            document.querySelectorAll('.message__next').forEach(message => {
                message.addEventListener('click', function() {
                    let currentMessage = this.closest('.hints__message');
                    let nextMessage = message.parentElement.nextElementSibling;
                    currentMessage.classList.remove('is-active');

                    setTimeout(function() {
                        currentMessage.classList.add('d-none');
                        nextMessage.classList.add('is-active');
                    }, 600);
                });
            });
        }
    
        if (createProfile) {
            const createProfileBtn = document.querySelector('.new-profile-btn');
            if (createProfileBtn) {
                createProfileBtn.addEventListener('click', function() {
                    console.log(createProfile);
                    createProfileBtn.classList.remove('new-profile-btn--animation');
                    createProfile.classList.remove('focus-priority');
        
                    if (pageFocus) pageFocus.classList.remove('page-focus--left');
                    if (hintSection) hintSection.classList.add('hints--hidden');
                    modalOpen(modalAvatar);
                });
            }
        }

        if(document.querySelector('.profile__prizes-slider')) {
            console.log('FSDAF');

            let swiperPrizes = new Swiper('.profile__prizes-slider', {
                slidesPerView: 'auto',
                spaceBetween: 19,
                freeMode: true,

                navigation: {
                    nextEl: '.profile__prizes-slider-arrow--next',
                    prevEl: '.profile__prizes-slider-arrow--prev',
                  },
            });
        }
    }
};

export { profileHints };