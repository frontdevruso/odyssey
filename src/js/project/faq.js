const faq = () => {
    $('.faq__list__content ul li button').on('click', function() {
        $('.faq__list__content ul li').removeClass('active');
        $(this).closest('.faq__list__content ul li').addClass('active');
    });
}

export { faq };