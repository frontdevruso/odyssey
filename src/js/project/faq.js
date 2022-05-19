const faq = () => {
    document.querySelectorAll('.faq__list__content ul li').forEach(function(btn) {
        btn.querySelector('button').addEventListener('click', function() {
            if (btn.classList.contains('active')) {
                btn.classList.remove('active');                
            } else {
                document.querySelectorAll('.faq__list__content ul li').forEach(function(everyMessage) { everyMessage.classList.remove('active') });
                btn.classList.add('active');
            }
        });
    });
}

export { faq };