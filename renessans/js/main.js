
$(document).ready(function(){

     $("#verticalTab").easyResponsiveTabs({
        type: 'vertical', //Типы: default, vertical, accordion
        width: 'auto', //auto или любое значение ширины
        fit: true,   // 100% пространства занимает в контейнере
        activate: function () {
        } // Функция обратного вызова, используется, когда происходит переключение вкладок
    });

    $(".chorizontalTab").easyResponsiveTabs({
        type: 'default', //Типы: default, vertical, accordion
        width: 'auto', //auto или любое значение ширины
        fit: true,   // 100% пространства занимает в контейнере
        activate: function () {
        } // Функция обратного вызова, используется, когда происходит переключение вкладок
    });

// слайдер шапка

    $('.bxslider').bxSlider({
        adaptiveHeight: true,
        infiniteLoop: false,
        hideControlOnEnd: false,
        controls : false,
        // onSliderLoad: function(){$('.bxslider li').css('width', '877px');}
     });



// слайдер интаграм
      

      $('.insta-slider-carusel').slick({
          dots: false,
          infinite: true,
          speed: 300,
          slidesToShow: 4,
          centerMode: true,
          variableWidth: true,
          prevArrow : '.insta-slider-controls-left-prev',
          nextArrow : '.insta-slider-controls-left-next'
        });

// слайдер мастера

      $('.masters-slider-carusel').slick({
      dots: false,
      infinite: true,
      speed: 300,
      slidesToShow: 4,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: false
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
    });


      





// адаптивное меню скыть показать

    $(function() {
    $('.icon').click(function() {
        $(this).toggleClass('icon-rotate');
    
    if($('.items').is(':visible')) {
      $('.items').removeClass('showitems'); 
    }
    else {
      $('.items').addClass('showitems'); 
    }   
    }); 
});


// кнопки скрыть показать цены

    $('.header-mobile-menu').click(function(){
        if($('.wrapper-show-mobile-menu').is(':visible')) {
            $('.wrapper-show-mobile-menu').css({'height':'0px'})
        }
        else {
            $('.wrapper-show-mobile-menu').css({'height':'auto','display':'block'})
        }
    });
    $('.wrapper-show-mobile-menu-bt-close').click(function(){
        $('.wrapper-show-mobile-menu').css({'height':'0px','display':'none'})
    });

    $('.services-item-button-two.money-one').click(function(){
        $(this).text('Посмотреть цены');
        $(this).toggleClass('services-item-button-rotate-ug');

        if($(this).hasClass('services-item-button-rotate-ug')) {
            $(this).text('Скрыть цены');
        }
        $('.services-money-one.money-one').fadeToggle();
    });

    $('.services-item-button-two.money-two').click(function(){
        $(this).text('Посмотреть цены');
        $(this).toggleClass('services-item-button-rotate-ug');
        if($(this).hasClass('services-item-button-rotate-ug')) {
            $(this).text('Скрыть цены');
        }
        $('.services-money-one.money-two').fadeToggle();
    });

    $('.services-item-button-two.money-three').click(function(){
        $(this).text('Посмотреть цены');
        $(this).toggleClass('services-item-button-rotate-ug');
        if($(this).hasClass('services-item-button-rotate-ug')) {
            $(this).text('Скрыть цены');
        }
        $('.services-money-one.money-three').fadeToggle();
    });

    $('.services-item-button-two.money-four').click(function(){
        $(this).text('Посмотреть цены');
        $(this).toggleClass('services-item-button-rotate-ug');
        if($(this).hasClass('services-item-button-rotate-ug')) {
            $(this).text('Скрыть цены');
        }
        $('.services-money-one.money-four').fadeToggle();
    });



// карта

    var myMap;
    var myPlacemark = [];
    var zoom = 16;
    var controls = [];
    ymaps.ready(init);

    function init() {
        myMap = new ymaps.Map("map", {
            center: [56.834603772739264, 60.58518550000001], 
            zoom: zoom,
            controls: controls
        });

        myPlacemark = new ymaps.Placemark([56.834603772739264,60.58518550000001], {
            hintContent: 'Шейнкмана, 24'
        }, {
            preset: 'islands#icon'
        });

        myMap.geoObjects.add(myPlacemark);
    }



// адаптивное окно мастера

    $('.masters-holder-item-name').click(function() {
        $('.popup__overlay').css('display', 'block')
        return false;
    })
    $('.popup__overlay').click(function(event) {
        e = event || window.event
        if (e.target == this) {
            $('.popup__overlay').css('display', 'none')
        }
    })
    $('.popup__close').click(function() {
        $('.popup__overlay').css('display', 'none')
        return false;
        
    })

// адаптивное окно записи к мастеру

$('.button-five').click(function() {
        $('.popup__overlay_zap').css('display', 'block')
        return false;
    })
    $('.popup__overlay_zap').click(function(event) {
        e = event || window.event
        if (e.target == this) {
            $('.popup__overlay_zap').css('display', 'none')
        }
    })
    $('.popup__close_zap').click(function() {
        $('.popup__overlay_zap').css('display', 'none')
        return false;
        
    })

    // адаптивное окно основное

$('.button-one, .button-two, .button-three').click(function() {
        $('.popup__overlay_osnova').css('display', 'block')
        return false;
    })
    $('.popup__overlay_osnova').click(function(event) {
        e = event || window.event
        if (e.target == this) {
            $('.popup__overlay_osnova').css('display', 'none')
        }
    })
    $('.popup__close_osnova').click(function() {
        $('.popup__overlay_osnova').css('display', 'none')
        return false;
        
    })


    // прокрутка при клике на меню

    $(".wrapper-show-mobile-menu, .header-menu-holder-top").on("click","a", function (event) {
        //отменяем стандартную обработку нажатия по ссылке
        event.preventDefault();

        //забираем идентификатор бока с атрибута href
        var id  = $(this).attr('href'),

        //узнаем высоту от начала страницы до блока на который ссылается якорь
            top = $(id).offset().top;
        
        //анимируем переход на расстояние - top за 1500 мс
        $('body,html').animate({scrollTop: top}, 800);
    });






    


    
});