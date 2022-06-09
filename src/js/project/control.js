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
            });

            if(document.querySelector('.hints__message--2 .message__next')) {
                document.querySelector('.hints__message--2 .message__next').addEventListener('click', function() {
                    pageFocus.classList.remove('page-focus--center');
                    pageFocus.classList.add('hidden');
                    let elementClick = this.href;
                    let is_safari = navigator.userAgent.toLowerCase().indexOf('safari/') > -1;
    
                    let destination = elementClick.offsetTop;
    
                    if (is_safari) {
                        window.scrollTo({top: destination, behavior: 'smooth'}); // 1100 - скорость
                    } else {
                        document.querySelector('html').scrollTo({top: destination, behavior: 'smooth'});
                    }
                    return false;
                });
            }

            document.querySelector('.hints__message--3 .message__next').addEventListener('click', function() {
                document.getElementById('pageContainerControl').classList.remove('page__container--control-hd');

                hintSection.classList.add('hints--hidden');
                hintSection.classList.add('hints--d-none');

                setTimeout(function() {
                    hintSection.classList.remove('hints--hidden');
                    hintSection.classList.remove('hints--d-none');
                }, 0);
            });
        }
        
        if(controlProgress) {
            function activatePlanets(planetCount) {
                document.querySelectorAll('.control__progress ul li').forEach(function(item, index) {
                    if (Number(planetCount) >= (index + 1)) { item.classList.add('active'); }
                });
            }

            function barWidth(level) {
                document.querySelector('.control__progress-bar-active').style.width = `${17 * level}%`;
            }

            barWidth(controlProgress.getAttribute('data-level'));
            activatePlanets(controlProgress.getAttribute('data-level'));
        }

        document.querySelectorAll('.control__raiting-table-score').forEach(function(score) {
            score.innerHTML = score.innerHTML.replace(/(\d)(?=(\d{3})+(\D|$))/g, '$1 ');
        });

        if (document.querySelector('.control__raiting-table ul .active')) {
            console.log('I FIND HIM!');
            document.querySelector('.main-user').classList.add('main-user--hidden');
        }

        document.addEventListener('DOMContentLoaded', function() {
            const allPlayers = document.querySelectorAll('.control__raiting-table ul li');
            if (allPlayers.length >= 12) {
                document.querySelector('.control__raiting-table').classList.add('control__raiting-table--long');
            }
        });

        document.addEventListener('DOMContentLoaded', function() {
            const allPlayers = document.querySelectorAll('.control__raiting-table ul li');
            const allPlanets = document.querySelectorAll('.control__raiting-table-item--planet');

            if (allPlayers.length >= 7 || allPlanets.length >= 3) {
                document.querySelector('.control__raiting-table-bg--large').classList.remove('control__raiting-table-bg--hidden');
                document.querySelector('.control__raiting-table-bg--regular').classList.add('control__raiting-table-bg--hidden');
            }
        });

        document.addEventListener('DOMContentLoaded', function() {
            const allPlanets = document.querySelectorAll('.control__raiting-table-item--planet');

            if (allPlanets.length >= 3) {
                document.querySelector('.control__raiting-table-bg--large').classList.remove('control__raiting-table-bg--hidden');
                document.querySelector('.control__raiting-table-bg--regular').classList.add('control__raiting-table-bg--hidden');
            }

            document.querySelector('.control__raiting-table-planet-conainer').addEventListener('DOMNodeInserted', function() {
                const allPlanets = document.querySelectorAll('.control__raiting-table-item--planet');
    
                if (allPlanets.length >= 3) {
                    document.querySelector('.control__raiting-table-bg--large').classList.remove('control__raiting-table-bg--hidden');
                    document.querySelector('.control__raiting-table-bg--regular').classList.add('control__raiting-table-bg--hidden');
                }
            });
            document.querySelector('.control__raiting-table-planet-conainer').addEventListener('DOMNodeRemoved', function() {
                const allPlanets = document.querySelectorAll('.control__raiting-table-item--planet');
                
                if (allPlanets.length <= 3) {
                    document.querySelector('.control__raiting-table-bg--large').classList.add('control__raiting-table-bg--hidden');
                    document.querySelector('.control__raiting-table-bg--regular').classList.remove('control__raiting-table-bg--hidden');
                }
            });
        });

        document.addEventListener('DOMContentLoaded', function() {
            document.querySelector('.control__raiting-table').addEventListener('DOMNodeInserted', function() {
                const allPlayers = document.querySelectorAll('.control__raiting-table ul li');
    
                if (allPlayers.length >= 7) {
                    document.querySelector('.control__raiting-table-bg--large').classList.remove('control__raiting-table-bg--hidden');
                    document.querySelector('.control__raiting-table-bg--regular').classList.add('control__raiting-table-bg--hidden');
                }
            });
            document.querySelector('.control__raiting-table').addEventListener('DOMNodeRemoved', function() {
                const allPlayers = document.querySelectorAll('.control__raiting-table ul li');
    
                if (allPlayers.length <= 7) {
                    document.querySelector('.control__raiting-table-bg--large').classList.add('control__raiting-table-bg--hidden');
                    document.querySelector('.control__raiting-table-bg--regular').classList.remove('control__raiting-table-bg--hidden');
                }
            });
        });

        document.addEventListener('DOMContentLoaded', function() {
            document.querySelector('.control__raiting-table').addEventListener('DOMNodeInserted', function() {
                const allPlayers = document.querySelectorAll('.control__raiting-table ul li');
                if (allPlayers.length >= 13) {
                    document.querySelector('.control__raiting-table').classList.add('control__raiting-table--long');
                }
            });
            document.querySelector('.control__raiting-table').addEventListener('DOMNodeRemoved', function() {
                const allPlayers = document.querySelectorAll('.control__raiting-table ul li');
                if (allPlayers.length <= 13) {
                    document.querySelector('.control__raiting-table').classList.remove('control__raiting-table--long');
                }
            });
        });

        document.addEventListener('DOMContentLoaded', function() {
            const allPlayers = document.querySelectorAll('.control__raiting-table ul li');
            if (allPlayers.length >= 13) {
                document.querySelector('.control__raiting-table').classList.add('control__raiting-table--long');
            }
        });

        document.addEventListener('DOMContentLoaded', function() {
            document.getElementById('searchInput').addEventListener('keyup', function() {
                document.querySelector('.close-btn').disabled = false;
                document.querySelector('.close-btn').addEventListener('click', function() {
                    document.querySelector('.close-btn').addEventListener('click', function() {
                        document.querySelector('.close-btn').disabled = true;
                        document.getElementById('searchInput').value = '';
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
                    btn.classList.add('applied');
                    btn.disabled = true;
                    btn.parentElement.classList.add('active');
                    btn.parentElement.classList.remove('control__launching-content-table-item--hover');
                });
            });

            function hintSetting(value, hint, letterLength) {
                hint.querySelector('.raiting-table-hint p').innerHTML = value;

                if (value.length > letterLength) {
                    hint.querySelector('.raiting-table-hint').classList.add('active');
                } else return hint.querySelector('.raiting-table-hint').classList.remove('active');
            }

            if (document.querySelectorAll('.control__raiting-table ul li .control__raiting-table-subdivision, .control__raiting-table ul li .control__raiting-table-post')) {
                document.querySelectorAll('.control__raiting-table ul li .control__raiting-table-subdivision, .control__raiting-table ul li .control__raiting-table-post, .control__raiting-table-profile').forEach(function(item) {
                    const itemData = item.querySelector('span').innerHTML;
                    hintSetting(itemData, item, 30);

                    item.querySelector('span').addEventListener('DOMSubtreeModified', function() {
                       hintSetting(this.innerHTML, item, 30);
                    }); 
                });
            }

            if (document.querySelectorAll('.control__raiting-table-item-main main, .control__raiting-table-item-header')) {
                document.querySelectorAll('.control__raiting-table-item-main main, .control__raiting-table-item-header').forEach(function(item) {
                    const itemData = item.querySelector('span').innerHTML;
                    hintSetting(itemData, item, 20);

                    item.querySelector('span').addEventListener('DOMSubtreeModified', function() {
                        hintSetting(this.innerHTML, item, 20);
                    });
                });
            }
        });
    }
};

export { control };