$(function() {

// Скролл на блок при нажатии на навигацию
    $("[data-scroll]").on("click", function(event) {
        event.preventDefault();

        let elementId = $(this).data('scroll');
        let elementOffset = $(elementId).offset().top;

        $("html, body").animate({
            scrollTop: elementOffset
        });
    });

// Нажатие на бургер меню
    $('.burger').on('click', function(e) {
        e.preventDefault;
        $(this).toggleClass('burger_active')
    })
});