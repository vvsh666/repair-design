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
    modal.toggleClass('modal--visible')
  });

  closeBtn.on('click', function() {
    modal.toggleClass('modal--visible')
  });

  $(document).on('keydown', function() {
    modal.removeClass('modal--visible')
  });

  $(document).on('click', function(event) {
    if ($(event.target).is('.modal--visible')) {
      modal.toggleClass('modal--visible')
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

  next.css('left', prev.width() + 20 + bullets.width() + 20);
  bullets.css('left', prev.width() + 20)



});

