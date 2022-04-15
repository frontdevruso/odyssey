const planets = () => {
    const hintSection = document.querySelector('.hints');

    if (document.querySelector('.planets')) {
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

        $('.planets__table-item-title').lettering();
        $('.planets__table-item-title').each(function(index, item) {
            $(item).each(function(index, char) {
                $(char).children().each(function(index, letter) {
                    $(letter).css('transform', `rotate(${index * 8}deg)`)
                })
            });
        });
    }
}

export { planets };