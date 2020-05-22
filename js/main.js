/* document.addEventListener("DOMContentLoaded", function(event) { 
  const modal = document.querySelector('.modal');
  const modalBtn = document.querySelectorAll('[data-toggle=modal]');
  const closeBtn = document.querySelector('.modal__close');
  const switchModal = () => {
    modal.classList.toggle('modal--visible');
  }
  modalBtn.forEach(element => {
    element.addEventListener('click', switchModal);
  });

  document.addEventListener('keydown', function(event) {
    if (event.code == 'Escape') {
      if (modal.classList.contains('modal--visible')) {
        switchModal();
      }
    }
  });

  document.addEventListener('click', function(event) {
    console.log(event);
    if (event.target.className == 'modal modal--visible') {
      switchModal();
    }
  });

  closeBtn.addEventListener('click', switchModal);

}); */

$(document).ready(function(){
  var modal = $('.modal'),
      modalBtn = $('[data-toggle=modal]'),
      closeBtn = $('.modal__close'),
      btnUp = $('.button-up');

  
  modalBtn.on('click', function() {
    modal.toggleClass('modal--visible');
  });

  closeBtn.on('click', function() {
    modal.toggleClass('modal--visible');
  });

  $(document).on('keydown', function(event) {
    if (event.code == 'Escape' && modal.hasClass('modal--visible')) {
    modal.removeClass('modal--visible');
    }
  });

  $(document).on('click', function(event) {
    if ($(event.target).is('.modal--visible')) {
      modal.toggleClass('modal--visible');
    }
  });

  $(window).scroll(function() {
    if ($(this).scrollTop() > 50) {
      btnUp.fadeIn();
    } else {
      btnUp.fadeOut();
    }
  });

  btnUp.click(function() {
    $('body, html').animate({
      scrollTop: 0
    }, 500);
    return false;
  });

  var mySwiper = new Swiper ('.swiper-container', {
    loop: true,
    spaceBetween: 10,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  var next = $('.swiper-button-next');
  var prev = $('.swiper-button-prev');
  var bullets = $('.swiper-pagination');
  var bullet = $('.swiper-pagination-bullet');

  
  bullet.css({'width': '10px', 'height': '10px', 'margin': '0 8px'});
  bullets.css({'left': prev.width() + 21, 'bottom': '-2px'});
  next.css('left', prev.width() + 21 + bullets.width() + 21);

  // Запуск плагина WOW
  // new WOW().init();

  //Анимация SCC
/*   var windowHeight = $(window).height();


	$(document).on('scroll', function() {
		$('.drift').each(function() {
			var self = $(this),
			height = self.offset().top + self.height();
			if ($(document).scrollTop() + windowHeight >= height) {
				self.addClass('animated');
			} else {
        self.removeClass('animated');
      }
		});
  });
  
  $(document).on('scroll', function() {
		$('.line-height-up-down').each(function() {
			var self = $(this),
			height = self.offset().top + self.height();
			if ($(document).scrollTop() + windowHeight >= height) {
				self.addClass('animated');
			} else {
        self.removeClass('animated');
      }
		});
  }); */

  //Валидация формы modal__form
  $('.modal__form').validate({
    errorClass: "invalid",
    errorElement: "div",
    rules: {
      userName: {
        required: true,
        minlength: 2,
        maxlength: 15
      },
      userPhone: {
        required: true,
        minlenght: 18
      },
      userEmail: {
        required: true,
        email: true
      }
    },
    messages: {
      userName: {
        required: "Пожалуйста, введите Ваше имя",
        minlength: "Имя не короче двух букв",
        maxlength: "Имя не длиннее 15 букв"
      },
      userPhone: {
        required: "Телефон обязателен",
        minlenght: "Введены не все цифры"
      },
      userEmail: {
        required: "Обязательно укажите Email",
        email: "Введите в формате: name@domain.com"
      }
    }
  });

  //Валидация формы footer__form
  $('.footer__form').validate({
    errorClass: "invalid",
    errorElement: "div",
    rules: {
      userName: {
        required: true,
        minlength: 2,
        maxlength: 15
      },
      userPhone: "required",
      userQuestion: {
        required: true,
        minlength: 5
      }
    },
    messages: {
      userName: {
        required: "Пожалуйста, введите Ваше имя",
        minlength: "Имя не короче двух букв",
        maxlength: "Имя не длиннее 15 букв"
      },
      userPhone: "Телефон обязателен",
      userQuestion: {
        required: "Обязательно введите Ваш вопрос",
        minlength: "Длина не менее 5 символов"
      }
    }
  });

  //Валидация формы control__form
  $('.control__form').validate({
    errorClass: "invalid",
    errorElement: "div",
    rules: {
      userName: {
        required: true,
        minlength: 2,
        maxlength: 15
      },
      userPhone: {
        required: true,
        minlenght: 18
      },
    },
    messages: {
      userName: {
        required: "Пожалуйста, введите Ваше имя",
        minlength: "Имя не короче двух букв",
        maxlength: "Имя не длиннее 15 букв"
      },
      userPhone: {
        required: "Телефон обязателен",
        minlenght: "Введены не все цифры"
      }
    }
  });
  
  // Маска для номера телефона
  $('[type=tel]').mask('+7 (000) 000-00-00');

  //Проверка чекбокса modal__form
  $('#policy-checkbox').on('change', function () {
    if ( $('#policy-checkbox').prop('checked') ) {
        $('.modal__button').attr('disabled', false);
    } else {
        $('.modal__button').attr('disabled', true);
    }
  });

    //Проверка чекбокса footer__form
    $('#policy-checkbox-footer').on('change', function () {
      if ( $('#policy-checkbox-footer').prop('checked') ) {
          $('.footer__button').attr('disabled', false);
      } else {
          $('.footer__button').attr('disabled', true);
      }
    });

    //Проверка чекбокса control__form
    $('#policy-checkbox-control').on('change', function () {
      if ( $('#policy-checkbox-control').prop('checked') ) {
          $('.control__button').attr('disabled', false);
      } else {
          $('.control__button').attr('disabled', true);
      }
    });

    // Создание Яндекс карты 
    ymaps.ready(function () {
      var myMap = new ymaps.Map('map', {
              center: [47.244729, 39.723187],
              zoom: 15
          }, {
              searchControlProvider: 'yandex#search'
          }),
  
          // Создаём макет содержимого.
          MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
              '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
          ),
  
          myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
              hintContent: 'Собственный значок метки',
              balloonContent: 'Это красивая метка'
          }, {
              // Опции.
              // Необходимо указать данный тип макета.
              iconLayout: 'default#image',
              // Своё изображение иконки метки.
              iconImageHref: 'img/map-marker.svg',
              // Размеры метки.
              iconImageSize: [84, 54],
              // Смещение левого верхнего угла иконки относительно
              // её "ножки" (точки привязки).
              iconImageOffset: [-5, -38]
          });

          myMap.behaviors.disable('scrollZoom'); 
  
      myMap.geoObjects
          .add(myPlacemark);
  });

});

