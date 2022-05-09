const faq = () => {
    document.querySelectorAll('.faq__list__content ul li').forEach(function(btn) {
        btn.querySelector('button').addEventListener('click', function() {
            document.querySelectorAll('.faq__list__content ul li').forEach(function(everyMessage) { everyMessage.classList.remove('active') });
            btn.querySelector('button').classList.remove('active');
            btn.classList.add('active');
        })
    });
}

export { faq };