// const slider = require('./common/slider');

// const $ = require('jquery'); // если будет нужен

// slider(); // инициализируем слайдер

// console.log("hello, world");

$(document).ready(function(){
    $('.slider').slick({
      autoplay:true
    });
  });


  $(function() {
    var url=document.location.href;
    $('.nav__list a').each(function(e) {
      if (this.href == url) $(this).addClass('active');
    });
    });

//mask

$('.phone-mask').inputmask('+7 (999) 999 99 99');

//form

var ajaxForm = function (form) {
  var url = form.attr('action'),
      data = form.serialize();
  return $.ajax({
      type: 'POST',
      url: url,
      data: data,
      dataType: 'JSON'
  });
}   
var submitForm = function (e) {
e.preventDefault();
var form = $(e.target);
var request = ajaxForm(form);
request.done(function(msg) {
var popup = msg.status ? '#success' : '#error';
$status = $(popup)

// $.fancybox.open( 
//   $status
// , {
//     type: 'inline',
//     maxWidth: 250,
//     fitToView: false,
//     padding: 0,
//     afterClose() {
//       form.trigger('reset');
//     }
//   });
  $.fancybox.open($status, {
    type: 'inline',
    maxWidth: 250,
    fitToView: false,
    padding: 0,
    afterClose: function afterClose() {
      form.trigger('reset');
    }
  });
});

// request.fail(function(jqXHR, textStatus) {
//   $.fancybox.open( 
//     $('#error').html("На сервере произошла ошибка: " + textStatus)
//   , {
//       type: 'inline',
//       maxWidth: 250,
//       fitToView: false,
//       padding: 0,
//       afterClose() {
//         form.trigger('reset');
//       }
//     });
// });
request.fail(function (jqXHR, textStatus) {
  $.fancybox.open($('#error').html("На сервере произошла ошибка: " + textStatus), {
    type: 'inline',
    maxWidth: 250,
    fitToView: false,
    padding: 0,
    afterClose: function afterClose() {
      form.trigger('reset');
    }
  });
});
}

$('#form__elem').on('submit', submitForm)


//Hamburger menu
var hamburger = (function() {

  var button = document.querySelector('#hamburger__menu-link');
  var menu = document.querySelector('#dark-menu');
  var body = document.querySelector('body');
  var itemsList = document.getElementById("nav__list_hamburger").children;
  itemsList = Array.prototype.slice.call(itemsList);

  var _toggleMenu = function(e) {
      button.classList.toggle('is-active');
      menu.classList.toggle('is-active');
      body.classList.toggle('locked');
  };

  var closeMenu = function closeMenu() {
      button.classList.remove('is-active');
      menu.classList.remove('is-active');
      body.classList.remove('locked');
  };

  var addListeners = function() {
      button.addEventListener('click', _toggleMenu);

      for(i=0 ; i<itemsList.length ; i++){
              itemsList[i].addEventListener('click',closeMenu);
          }
  };

  document.addEventListener('keydown', function(e) {
      if (e.keyCode == 27) closeMenu();
  });

  return {
      init: addListeners
  };
})({
  button: '#hamburger__menu-link',
  menu: '#dark-menu'
});

hamburger.init();