$(document).ready(function () {
  //Всплывающее меню
  $('.burger').on('click', function () { 
    $(this).toggleClass('burger-active');
    $('.header-bottom-wrap').slideToggle(300);
   });
  if ($(window).width() <= 993) {
    jQuery(window).scroll(function() { 
      if (jQuery(window).scrollTop() > 113) {
        jQuery('.header-bottom').addClass('header-scroll');
      } else {
        jQuery('.header-bottom').removeClass('header-scroll');
      }
     });
  }
  $('.callback').on('click', function() {
    $('.popup').fadeIn(300);
    $('.overlay').fadeIn(300);
  });
  $('.overlay').on('click', function() {
    $('.popup').fadeOut(300);
    $('.overlay').fadeOut(300);
  });
  $('.close').on('click', function() {
    $('.ovelay').fadeOut(300);
    $('.callback').fadeOut(300);
  });

  //cf7
jQuery(".wpcf7").on('wpcf7:mailsent', function(event){
  //alert('GOOD');
  jQuery('#thx').fadeIn(200);
  //Скрытие поп окна автоматически, через 5,5 секнд
  setTimeout(function(){jQuery('#thx').fadeOut(200, 'swing', function(){
  //
});},2500);  //3500 = 3,5 секунды
  
  setTimeout(function(){jQuery('.popup').fadeOut(300);},2700); 
  
  setTimeout(function(){jQuery('.overlay').fadeOut(300);},2700);
});

jQuery(".wpcf7").on('wpcf7:invalid', function(event){
  alert('Заполните поля правильно и повторите попытку!');
});
jQuery(".wpcf7").on('wpcf7:mailfailed', function(event){
  alert('Ошибка при отправке! Попробуйте отправить заявку еще раз!');
});
});