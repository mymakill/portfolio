$(function() {

    let nav = $('#nav');
    let burger = $('.burger')


/*Происходит отслеживание клика по дата атрибуту в блоке nav.
Определение нахождения блока относительно топ-позиции.
И прокрутка на эту позицию при нажатии.
*/ 
    $("[data-scroll]").on("click", function(event) {
        event.preventDefault();

        let elementId = $(this).data('scroll');
        let elementOffset = $(elementId).offset().top;

        $("html, body").animate({
            scrollTop: elementOffset -70
        }, 700);

        nav.removeClass('show');

        burger.removeClass('burger_active');
    });

// Нажатие на бургер меню для его анимации
    $('.burger').on('click', function(e) {
        e.preventDefault;
        $(this).toggleClass('burger_active')
    });

/*Нажатие на бургер => добавление класса show для блока nav. 
Позволяет показывать и скрывать навигаю при бургер меню*/ 
    $('#navToggle').on('click', function(e) {
        e.preventDefault();

        nav.toggleClass('show');
    });
});


$(".mark a").on("click",function(e){
    e.preventDefault();
    $(".mark").removeClass("active");
    $("html").attr("lang",$(this).data("lang"));
    $(this).parent().addClass("active");
  });