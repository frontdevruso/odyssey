const smoothScroll = () => {
    document.addEventListener('DOMContentLoaded', function() {
        const anchors = [].slice.call(document.querySelectorAll('a[href*="#"]'));
        anchors.forEach(function(anchor) {
            anchor.addEventListener('click', function(event) {
                event.preventDefault();
                const targetId = event.currentTarget.getAttribute("href")==="#" ? "header" : event.currentTarget.getAttribute("href");
                scrollTo(document.querySelector('.simplebar-content-wrapper'), document.querySelector(`${targetId}`).offsetTop, 1000);
            });
        });

        function scrollTo(element, to, duration) {
            if (duration <= 0) return;
            var difference = to - element.scrollTop;
            var perTick = difference / duration * 10;
        
            setTimeout(function() {
                element.scrollTop = element.scrollTop + perTick;
                if (element.scrollTop === to) return;
                scrollTo(element, to, duration - 10);
            }, 10);
        }
    });

    if (document.querySelector('.simplebar-offset')) {
        function smoothScroll() {
            document.querySelector('.simplebar-offset').classList.add('SmoothScroll');
        
            new SmoothScroll({
                target: document.querySelector('.simplebar-content-wrapper'),
                scrollEase: 0.9,
                maxOffset: 5000,
            });
        }

        document.addEventListener('DOMContentLoaded', function() {
            smoothScroll();
        });
    }
};

export { smoothScroll };