/*!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!УЧАСТОК ПРЕЛОАДЕРА!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!*/
document.body.onload = function() {

        setTimeout(function() {
            var preloader = document.getElementById('page-preloader');
            if (!preloader.classList.contains('done')) {
                preloader.classList.add('done');
            }
        }, 500);

    }
    /*!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!ПРЕЛОАДЕР ЗАКОНЧЕН!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!*/


/*!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!УЧАСТОК СЛАЙДЕРА!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!*/

$('.sl').slick({
    dots: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    adaptiveHeight: true,
});

/*!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!СЛАЙДЕР ЗАКОНЧЕН!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!*/




/*!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!СКРИТЫ ДЛЯ БУРГЕРА!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!*/

$(document).ready(function() {
    $('.header__burger').click(function(event) {
        $('.header__burger, .header__menu').toggleClass('active');
        /*отрубаем скрол контекста сайта при отнрытом мобильном меню*/
        $('.body').toggleClass('lock');
    });
    /*начало пробы*/
    $('.header__link').click(function(event) {
        $('.header__burger.active, .header__menu.active').removeClass('active');
    });
    /*конец пробы*/
});

/*!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!БУРГЕР ЗАКОНЧЕН!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!*/


/*!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!СКРИТЫ ДЛЯ МАСОК!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!*/

$(document).ready(function() {
    $("#phone").mask("+7 (999) 999 99 99");
});


/*!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!МАСКИ ЗАКОНЧЕНЫ!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!*/



/*!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!СКРИТЫ ДЛЯ СПОЙЛЕРА!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!*/
/*$(document).ready(function() {
    $('.countHead').click(function(event) {
        /*делаем проверку есть ли такой класс(one, доделываем функционал)*/
/*  if ($('.vKrugu').hasClass('one')) {
      /*если есть то убираем эктив у всех классов, кроме нажатого*/
/*       $('.countHead').not($(this)).removeClass('active');
       /*и скрываем все блоки с текстом, кроме активного*/
/*      $('.spisokKruga').not($(this).next()).slideUp(300);
        }
        $(this).toggleClass('active').next().slideToggle(300);
    });
});*/
/*!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!СПОЙЛЕР ЗАКОНЧЕН!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!*/


/*!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!СКРИТЫ ДЛЯ АКТИВНОГО ХЕДЕРА!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!*/

/*ОПРЕДЕЛЯЕМ СКРОЛЛ*/
window.addEventListener('scroll', () => {
    /*задаём переменную и поместим в неё знфчение window.scrollY которое  получает наш addEventListener когда мы скроллим*/

    /*вот в этой строчке, каким то хуем не срабатывает window.scrollY*/
    let scrollDistance = window.scrollY;

    if (window.innerWidth > 1024) {
        /*проходим по всем секциям .some_link, у них специально выставлен один класс */
        document.querySelectorAll('.some_link').forEach((el, i) => {
            /*когда мы проскролливаем наш сайт до опредеённого момента мы должны помнять класс */
            /*el это определённая секция, offsetTop определяем её отступ сверху, вычитаем высоту хедера, потом обращаемся к методу clientHeight, и всё это должно быть меньше либо равно нашей scrollDistance */
            if (el.offsetTop - document.querySelector('.container').clientHeight <= scrollDistance) {
                document.querySelectorAll('.header__menu a').forEach((el) => {
                    /*проверяем, если есть такой класс(эктив), то мы удаляем его*/
                    if (el.classList.contains('active')) {
                        el.classList.remove('active');
                    }
                });
                /*при этомб, находим  querySelectorAll('.header__menu li') (ли потому что ссылка у нас она а лишек 5), далее нахоим ссылку  querySelector('a') и устанавливаем класс эктив*/
                document.querySelectorAll('.header__menu li')[i].querySelector('a').classList.add('active');
            }
        });
    }
});


/*!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!СКРИТЫ ДЛЯ АКТИВНОГО ХЕДЕРА ЗАКОНЧЕНЫ!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!*/