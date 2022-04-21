const faq = () => {
    $('.faq__list__content ul li button').on('click', function() {
        $(this).closest('.faq__list__content ul li').toggleClass('active');
    });
}

export { faq };