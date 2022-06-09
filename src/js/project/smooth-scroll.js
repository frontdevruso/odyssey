const smoothScroll = () => {
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