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
   

      btnUp = $('.button-up'),

      modalThanks = $('.modal-thanks'),
      closeBtnThanks = $('.modal-thanks__close'),
      linkThanks = $('.modal-thanks__link');
  
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

  closeBtnThanks.on('click', function() {
    modalThanks.toggleClass('modal-thanks--visible');
  });

  linkThanks.on('click', function() {
    modalThanks.toggleClass('modal-thanks--visible');
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

  var mySwiper1 = new Swiper ('.swiper-container-1', {
    loop: true,
    spaceBetween: 10,
    pagination: {
      el: '.projects__pagination',
      type: 'bullets',
    },
    navigation: {
      nextEl: '.projects__button-next',
      prevEl: '.projects__button-prev',
    },
  });

  var mySwiper2 = new Swiper ('.swiper-container-2', {
    loop: true,
    spaceBetween: 10,
    pagination: {
      el: '.steps__pagination',
      type: 'bullets',
    },
    navigation: {
      nextEl: '.steps__button-next',
      prevEl: '.steps__button-prev',
    },
  });

  $('.steps__list').on('click',  '.steps__list-item', function() {
    const index = $(this).data('index')
    $(this).addClass('steps__list-item--active').siblings().removeClass('steps__list-item--active');
    mySwiper2[0].slideTo(index);
    mySwiper2[1].slideTo(index);
    console.log($(this));
  });

  $('#counter').html((mySwiper2[1].realIndex+1) + "/" + (mySwiper2[1].slides.length-2));

  mySwiper2[1].on('slideChange', function () {
    const active = mySwiper2[1].realIndex,
          activeItem = $($('.steps__list-item')[active]);
    activeItem.addClass('steps__list-item--active').siblings().removeClass('steps__list-item--active');
    $('#counter').html((mySwiper2[1].realIndex+1) + "/" + (mySwiper2[1].slides.length-2));
    console.log(activeItem);
  });



  var next1 = $('.projects__button-next');
  var next2 = $('.steps__button-next');
  var prev = $('.swiper-button-prev');
  var bullets1 = $('.projects__pagination');
  var bullets2 = $('.steps__pagination');
  var bullet = $('.swiper-pagination-bullet');
  

  
  bullet.css({'width': '10px', 'height': '10px', 'margin': '0 8px'});
  bullets1.css({'left': prev.width() + 21, 'bottom': '-2px'});
  bullets2.css({'left': prev.width() + 21, 'bottom': '-2px'});
  next1.css('left', prev.width() + 21 + bullets1.width() + 21);
  next2.css('left', prev.width() + 21 + bullets2.width() + 21);

  // Запуск плагина WOW
  new WOW().init();

  //Анимация SCC
  var windowHeight = $(window).height();


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
  });

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
        minlength: 18
      },
      userEmail: {
        required: true,
        email: true
      },
    },
    messages: {
      userName: {
        required: "Введите имя",
        minlength: "Имя не короче 2 букв",
        maxlength: "Имя не длиннее 15 букв"
      },
      userPhone: {
        required: "Телефон обязателен",
        minlength: "Введены не все цифры"
      },
      userEmail: {
        required: "Обязательно укажите Email",
        email: "Введите в формате: name@domain.com"
      },
    },
    submitHandler: function(form) {
      $.ajax({
        type: "POST",
        url: "send.php",
        data: $(form).serialize(),
        success: function (response) {
          $(form)[0].reset();
          modal.removeClass('modal--visible');
          modalThanks.toggleClass('modal-thanks--visible');
        },
        error: function(response) {
          console.error('Ошибка запроса ' + response);
        }        
      });
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
      userPhone: {
        required: true,
        minlength: 18
      },
      userQuestion: {
        required: true,
        minlength: 5
      }
    },
    messages: {
      userName: {
        required: "Введите имя",
        minlength: "Имя не короче 2 букв",
        maxlength: "Имя не длиннее 15 букв"
      },
      userPhone: {
        required: "Телефон обязателен",
        minlength: "Введены не все цифры"
      },
      userQuestion: {
        required: "Обязательно введите Ваш вопрос",
        minlength: "Длина не менее 5 символов"
      }
    },
    submitHandler: function(form) {
      $.ajax({
        type: "POST",
        url: "send.php",
        data: $(form).serialize(),
        success: function (response) {
          $(form)[0].reset();
          modalThanks.toggleClass('modal-thanks--visible');
        },
        error: function(response) {
          console.error('Ошибка запроса ' + response);
        }        
      });
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
        minlength: 18
      },
    },
    messages: {
      userName: {
        required: "Введите имя",
        minlength: "Имя не короче 2 букв",
        maxlength: "Имя не длиннее 15 букв"
      },
      userPhone: {
        required: "Телефон обязателен",
        minlength: "Введены не все цифры"
      }
    },
    submitHandler: function(form) {
      $.ajax({
        type: "POST",
        url: "send.php",
        data: $(form).serialize(),
        success: function (response) {
          $(form)[0].reset();
          modalThanks.toggleClass('modal-thanks--visible');
        },
        error: function(response) {
          console.error('Ошибка запроса ' + response);
        }        
      });
    }
  });

    //Валидация формы measurement__form
    $('.measurement__form').validate({
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
          minlength: 18
        },
        userEmail: {
          required: true,
          email: true
        }
      },
      messages: {
        userName: {
          required: "Введите имя",
          minlength: "Имя не короче 2 букв",
          maxlength: "Имя не длиннее 15 букв"
        },
        userPhone: {
          required: "Телефон обязателен",
          minlength: "Введены не все цифры"
        },
        userEmail: {
          required: "Обязательно укажите Email",
          email: "Введите в формате: name@domain.com"
        }
      },
      submitHandler: function(form) {
        $.ajax({
          type: "POST",
          url: "send.php",
          data: $(form).serialize(),
          success: function (response) {
            $(form)[0].reset();
            modalThanks.toggleClass('modal-thanks--visible');
          },
          error: function(response) {
            console.error('Ошибка запроса ' + response);
          }        
        });
      }
    });
  
  
  // Маска для номера телефона
  $('[type=tel]').mask('+7 (000) 000-00-00');

  //Проверка чекбокса modal__form
  $('#policy-checkbox').on('change', function () {
    if ( $('#policy-checkbox').prop('checked') ) {
        $('.modal__button').attr('disabled', false);
        $('.modal__checkbox-error').addClass('checkbox-error--unvisible');  
    } else {
        $('.modal__button').attr('disabled', true);
        $('.modal__checkbox-error').removeClass('checkbox-error--unvisible');
    }
  });

    //Проверка чекбокса footer__form
    $('#policy-checkbox-footer').on('change', function () {
      if ( $('#policy-checkbox-footer').prop('checked') ) {
          $('.footer__button').attr('disabled', false);
          $('.footer__checkbox-error').addClass('checkbox-error--unvisible');
      } else {
          $('.footer__button').attr('disabled', true);
          $('.footer__checkbox-error').removeClass('checkbox-error--unvisible');
      }
    });

    //Проверка чекбокса control__form
    $('#policy-checkbox-control').on('change', function () {
      if ( $('#policy-checkbox-control').prop('checked') ) {
          $('.control__button').attr('disabled', false);
          $('.control__checkbox-error').addClass('checkbox-error--unvisible');         
      } else {
          $('.control__button').attr('disabled', true);
          $('.control__checkbox-error').removeClass('checkbox-error--unvisible');
        }
    });

    //Проверка чекбокса measurement__form
    $('#policy-checkbox-measurement').on('change', function () {
      if ( $('#policy-checkbox-measurement').prop('checked') ) {
          $('.measurement__button').attr('disabled', false);
          $('.measurement__checkbox-error').addClass('checkbox-error--unvisible'); 
      } else {
          $('.measurement__button').attr('disabled', true);
          $('.measurement__checkbox-error').removeClass('checkbox-error--unvisible');
      }
    });

    // Скрипт запуска карты при скролинге
    var check_if_load = false;
    $(document).on('scroll', function() {
      $('.map').each(function() {
        var self = $(this),
        height = self.offset().top + self.height();
        if ($(document).scrollTop() + windowHeight >= height) {
          if (!check_if_load) {
            check_if_load = true;
            self.append('<script type="text/javascript" charset="utf-8" async src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A27ca25ab3deb515b1c2b7cc7484412f2007bd1b149904277f1502e2277d6f211&amp;width=925&amp;height=465&amp;lang=ru_RU&amp;scroll=false"></script>');
          }
        } 
      });
    });

    // Создание Яндекс карты 
   /*  ymaps.ready(function () {
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
  }); */

  // Загрузка видео с YouTobe

  var player;

  $('.video__play').on('click', function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
      height: '434',
      width: '100%',
      videoId: 'RHzzLqJWqHs',
      events: {
        'onReady': videoPlay,
      }
    });
  }
)

function videoPlay(event) {
  event.target.playVideo();
}

});



