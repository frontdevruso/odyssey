const faq = () => {
    const scrollBar = new SimpleBar(document.getElementById('pageContainerFaq'));
    $('.faq__list__content ul li button').on('click', function() {
        $(this).closest('.faq__list__content ul li').toggleClass('active');
    });
}

export { faq };