const planets = () => {
    const hintSection = document.querySelector('.hints');

    if (document.querySelector('.planets')) {
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
            })
        }

        document.querySelectorAll('.planets__table-item-title').forEach(function(wordText) {
            const template = wordText.getAttribute('data-planet').split('').map( (l,i) => `<span class="char${i + 1}">${l}</span>` ).join('');
            wordText.innerHTML += template;
        });
        
        document.querySelectorAll('.planets__table-item-title').forEach(function(item) {
            item.querySelectorAll('span').forEach(function(char, index) {
                char.style.transform = `rotate(${index * 8}deg)`
            })
        })
    }
}

export { planets };