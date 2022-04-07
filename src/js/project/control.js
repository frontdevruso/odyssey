const control = () => {
    const hintSection = document.querySelector('.hints');

    if (document.querySelector('.control')) {
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
    
        $(".hints__message--2 .message__next").click(function () {
            $('.page-focus').removeClass('page-focus--center');
            $('.page-focus').addClass('hidden');
            let elementClick = $(this).attr("href");
            let destination = $(elementClick).offset().top;
            if ($.browser.safari) {
                $('body').animate({ scrollTop: destination }, 1100); //1100 - скорость
            } else {
                $('html').animate({ scrollTop: destination }, 1100);
            }
            return false; 
        });
    
        $(".hints__message--3 .message__next").click(function () {
            $('.page__border').removeClass('page__border--hidden');
            $('.hints').addClass('hints--hidden');
            $('.hints').addClass('hints--d-none');
    
            setTimeout(function() {
                $('.hints').removeClass('hints--hidden');
                $('.hints').removeClass('hints--d-none');
            }, 200);
        });
    
        $(".hints__message--4 .message__next").click(function () {
            const controlBar = new SimpleBar(document.getElementById('pageContainerControl'));
            controlBar.getScrollElement().scrollTop = 10
        });
    }
}

export { control };