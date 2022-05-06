const control = () => {
    const hintSection = document.querySelector('.hints');
    const controlProgress = document.querySelector('.control__progress');

    if (document.querySelector('.control')) {
        const controlBar = new SimpleBar(document.getElementById('pageContainerControl'));
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
                $('#pageContainerControl').removeClass('page__container--control-hd');
                $('.hints').addClass('hints--hidden');
                $('.hints').addClass('hints--d-none');
        
                setTimeout(function() {
                    $('.hints').removeClass('hints--hidden');
                    $('.hints').removeClass('hints--d-none');
                }, 200);
            });
        
            // $(".hints__message--4 .message__next").click(function () {
            //     const controlBar = new SimpleBar(document.getElementById('pageContainerControl'));
            //     controlBar.getScrollElement().scrollTop = 10
            // });
        }
            
        if(controlProgress) {
            function activatePlanets(planetCount) {
                $('.control__progress ul li').each(function(index, item) {
                    if (Number(planetCount) >= (index + 1)) {
                        item.classList.add('active');
                    }
                })
            }

            function barWidth(level) {
                $('.control__progress-bar-active').width(`${17 * level}%`)
            }

            barWidth(controlProgress.getAttribute('data-level'));
            activatePlanets(controlProgress.getAttribute('data-level'));
        }

        $(document).ready(function(){
            $('#searchInput').on('keyup', function() {
                console.log($(this).val());
                $('.close-btn').attr('disabled', false);
                $('.close-btn').on('click', function() {
                    $('#searchInput').val('');
                    $('.close-btn').attr('disabled', true);
                });
            });

            $('.control__raiting-planets-inputs input').on('focus', function() {
                $('.control__raiting-planets-inputs').addClass('--focus');
            });
            $('.control__raiting-planets-inputs input').on('blur', function() {
                $('.control__raiting-planets-inputs').removeClass('--focus');
            });

            $('.control__launching-content-table-item button').on('click', function() {
                $(this).addClass('applied');
                $(this).attr('disabled', true);
                $(this).parent().addClass('active');
                $(this).parent().removeClass('control__launching-content-table-item--hover');
            });

            if (document.querySelectorAll('.control__raiting-table ul li .control__raiting-table-subdivision, .control__raiting-table ul li .control__raiting-table-post')) {
                document.querySelectorAll('.control__raiting-table ul li .control__raiting-table-subdivision, .control__raiting-table ul li .control__raiting-table-post').forEach(function(item) {
                    const itemData = item.querySelector('span').innerHTML;
                    if (itemData.length > 30) {
                        item.innerHTML += 
                        "<div class='raiting-table-hint'>" + 
                            "<p>" + itemData + "</p>" +
                        "</div>"
                    }
                });
            }

            if (document.querySelectorAll('.control__raiting-table-item-main main')) {
                document.querySelectorAll('.control__raiting-table-item-main main').forEach(function(item) {
                    const itemData = item.querySelector('span').innerHTML;
                    if (itemData.length > 20) {
                        item.innerHTML += 
                        "<div class='raiting-table-hint'>" + 
                            "<p>" + itemData + "</p>" +
                        "</div>"
                    }
                });
            }
            

        });


    }
}

export { control };