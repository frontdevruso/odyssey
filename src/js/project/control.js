const control = () => {
    const hintSection = document.querySelector('.hints');
    const controlProgress = document.querySelector('.control__progress');

    if (document.querySelector('.control')) {
        const pageFocus = document.querySelector('.page-focus');
        const hints = document.querySelector('.hints');

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

            document.querySelector('.hints__message--2 .message__next').addEventListener('click', function() {
                pageFocus.classList.remove('page-focus--center');
                pageFocus.classList.add('hidden');
                let elementClick = this.href;
                let is_safari = navigator.userAgent.toLowerCase().indexOf('safari/') > -1;

                let destination = elementClick.offsetTop;

                if (is_safari) {
                    window.scrollTo({top: destination, behavior: 'smooth'}); // 1100 - скорость
                } else {
                    document.querySelector('html').scrollTo({top: destination, behavior: 'smooth'})
                }
                return false; 
            })

            document.querySelector('.hints__message--3 .message__next').addEventListener('click', function() {
                document.getElementById('#pageContainerControl').classList.remove('page__container--control-hd');
                hints.classList.add('hints--hidden');
                hints.classList.add('hints--d-none');

                setTimeout(function() {
                    hints.classList.remove('hints--hidden');
                    hints.classList.remove('hints--d-none');
                }, 200);
            });
        }
            
        if(controlProgress) {
            function activatePlanets(planetCount) {
                document.querySelectorAll('.control__progress ul li').forEach(function(item, index) {
                    if (Number(planetCount) >= (index + 1)) { item.classList.add('active') }
                });
            }

            function barWidth(level) {
                document.querySelector('.control__progress-bar-active').style.width = `${17 * level}%`;
            }

            barWidth(controlProgress.getAttribute('data-level'));
            activatePlanets(controlProgress.getAttribute('data-level'));
        }

        document.addEventListener('DOMContentLoaded', function() {
            document.getElementById('searchInput').addEventListener('keyup', function() {
                document.querySelector('.close-btn').disabled = false;
                document.querySelector('.close-btn').addEventListener('click', function() {
                    document.querySelector('.close-btn').addEventListener('click', function() {
                        document.querySelector('.close-btn').disabled = true;
                        document.getElementById('searchInput').value = "";
                    });
                });
            });

            document.querySelector('.control__raiting-planets-inputs input').addEventListener('focus', function() {
                document.querySelector('.control__raiting-planets-inputs').classList.add('--focus');
            });
            document.querySelector('.control__raiting-planets-inputs input').addEventListener('blur', function() {
                document.querySelector('.control__raiting-planets-inputs').classList.remove('--focus');
            });

            document.querySelectorAll('.control__launching-content-table-item button').forEach(function(btn) {
                btn.addEventListener('click', function() {
                    btn.classList.add('applied')
                    btn.disabled = true;
                    btn.parentElement.classList.add('active');
                    btn.parentElement.classList.remove('control__launching-content-table-item--hover');
                })
            });

            function hintSetting(value, hint, letterLength) {
                hint.querySelector('.raiting-table-hint p').innerHTML = value;

                if (value.length > letterLength) {
                    hint.querySelector('.raiting-table-hint').classList.add('active');
                } else return hint.querySelector('.raiting-table-hint').classList.remove('active');
            }

            if (document.querySelectorAll('.control__raiting-table ul li .control__raiting-table-subdivision, .control__raiting-table ul li .control__raiting-table-post')) {
                document.querySelectorAll('.control__raiting-table ul li .control__raiting-table-subdivision, .control__raiting-table ul li .control__raiting-table-post').forEach(function(item) {
                    const itemData = item.querySelector('span').innerHTML;
                    hintSetting(itemData, item, 30);

                    item.querySelector('span').addEventListener('DOMSubtreeModified', function() {
                        hintSetting(this.innerHTML, item, 30);
                    });
                });
            }

            if (document.querySelectorAll('.control__raiting-table-item-main main')) {
                document.querySelectorAll('.control__raiting-table-item-main main').forEach(function(item) {
                    const itemData = item.querySelector('span').innerHTML;
                    hintSetting(itemData, item, 20);

                    item.querySelector('span').addEventListener('DOMSubtreeModified', function() {
                        hintSetting(this.innerHTML, item, 20);
                    });
                });
            }
        });


    }
}

export { control };