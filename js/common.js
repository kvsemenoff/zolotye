$(document).ready(function() {


  $('a[name=modal-thanks]').click(function(e) {
    e.preventDefault();
    var id = $(this).attr('href');
    var maskHeight = $(document).height();
    var maskWidth = $(window).width();
    $('#mask').css({'width':maskWidth,'height':maskHeight});
    $('#mask').fadeTo("slow",0.8); 
    var winH = $(window).height();
    var winW = $(window).width();
    posTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
    $(id).css('top',  posTop+150);
    $(id).css('left', winW/2-$(id).width()/2);
    $(id).fadeIn(500); 
  
  });
  $('a[name=modal-otzyv]').click(function(e) {
    e.preventDefault();
    var id = $(this).attr('href');
    var maskHeight = $(document).height();
    var maskWidth = $(window).width();
    $('#mask').css({'width':maskWidth,'height':maskHeight});
    $('#mask').fadeTo("slow",0.8); 
    var winH = $(window).height();
    var winW = $(window).width();
    posTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
    $(id).css('top',  posTop+50);
    $(id).css('left', winW/2-$(id).width()/2);
    $('#otzyv-content').html($(this).find('.otzyv-content').html());
    $(id).fadeIn(500); 
  
  });
  $('.callback').click(function(e) {
    $('#otzyv-content').html($(this).parent().find('.otzyv-content').html());
 
  });
  $('.window2 .close').click(function (e) {
    e.preventDefault();
    $('#mask, .window2').hide();
  }); 
  $('.ocenka .close').click(function (e) {
    e.preventDefault();
    $('#mask, .ocenka').hide();
  }); 

  $('#mask').click(function () {
      $(this).hide();
      $('.window2').hide();
      $('.ocenka').hide();

  }); 

  $("#headerform_submit").click(function () {
      var empty = true;
    $('.headerform  input[name="tel"]').each(function(o){
        if ($(this).val() == ""){empty = false;}
    });

    if (empty == false){
      alert("Заполните, пожалуйста, Ваш телефон");
    }else{
      //alert('sssssss');
      $.ajax({
        type: 'POST',
        url: '/sendmessage.php',
        data: $('.headerform').serialize(),
        success: function(data) {
        }
      });
      //$('body,html').animate({scrollTop:0},500); 
      $('.window3 .close3').trigger('click');
      $('a[href=#thanks]').trigger('click');
    }
    var empty = true;
    return false;
  });

  $("#page5-form_submit").click(function () {
      var empty = true;
    $('.page5-form  input[name="tel"]').each(function(o){
        if ($(this).val() == ""){empty = false;}
    });

    if (empty == false){
      alert("Заполните, пожалуйста, Ваш телефон");
    }else{
      //alert('sssssss');
      $.ajax({
        type: 'POST',
        url: '/sendmessage.php',
        data: $('.page5-form').serialize(),
        success: function(data) {
        }
      });
      //$('body,html').animate({scrollTop:0},500); 
      $('.window3 .close3').trigger('click');
      $('a[href=#thanks]').trigger('click');
    }
    var empty = true;
    return false;
  });

  
  $("#any-questions_form").click(function () {
    var empty = true;
    $('.any-questions  input[name="email"]').each(function(o){
        if ($(this).val() == ""){empty = false;}
    });

    if (empty == false){
      alert("Заполните, пожалуйста, Ваш email");
    }else{
      //alert('sssssss');
      $.ajax({
        type: 'POST',
        url: '/sendmessage.php',
        data: $('.any-questions').serialize(),
        success: function(data) {
        }
      });
      //$('body,html').animate({scrollTop:0},500); 
      $('.window3 .close3').trigger('click');
      $('a[href=#thanks-consult]').trigger('click');
    }
    
    return false;
  });

  $("#page3_form_submit").click(function () {

    var empty = true;
    $('.page3_form  input[name="tel"]').each(function(o){
        if ($(this).val() == ""){empty = false;}
    });

    if (empty == false){
      alert("Заполните, пожалуйста, Ваш телефон");
    }else{
      //alert('sssssss');
      $.ajax({
        type: 'POST',
        url: '/sendmessage.php',
        data: $('.page3_form').serialize(),
        success: function(data) {
        }
      });
      //$('body,html').animate({scrollTop:0},500); 
      $('.window3 .close3').trigger('click');
      $('a[href=#thank-spage3_form]').trigger('click');
    }
    
    return false;
  });
  
  $(".button-3").click(function () {
    $('a[href=#ocenka]').trigger('click');
    return false;
  });
  
  $("#ocenka_form_submit").click(function () {

    var empty = true;
    $('.ocenka_form  input[name="tel"]').each(function(o){
        if ($(this).val() == ""){empty = false;}
    });

    if (empty == false){
      alert("Заполните, пожалуйста, Ваш телефон");
    }else{
      //alert('sssssss');
      $.ajax({
        type: 'POST',
        url: '/sendmessage.php',
        data: $('.ocenka_form').serialize(),
        success: function(data) {
        }
      });
      //$('body,html').animate({scrollTop:0},500); 
      $('.ocenka').hide();
      $('a[href=#thank-spage3_form]').trigger('click');
    }
    
    return false;
  });
  
  $(".callback").click(function () {
    $('a[href=#zvonok]').trigger('click');
    return false;
  });
  
 

  $("#zvonok_form_submit").click(function () {

    var empty = true;
    $('.zvonok_form  input[name="tel"]').each(function(o){
        if ($(this).val() == ""){empty = false;}
    });

    if (empty == false){
      alert("Заполните, пожалуйста, Ваш телефон");
    }else{
      //alert('sssssss');
      $.ajax({
        type: 'POST',
        url: '/sendmessage.php',
        data: $('.zvonok_form').serialize(),
        success: function(data) {
        }
      });
      //$('body,html').animate({scrollTop:0},500); 
      $('.ocenka').hide();
      $('a[href=#thank-spage3_form]').trigger('click');
    }
    
    return false;
  });
 
  $(".phone").mask("+7 (999) 999-9999?");



});

$(document).ready(function(){
    $('a[href^="#"]').click(function(){ 
      var $element = $('a[name=' + $(this).attr('href').substr(1) + ']');
      if($element.length == 1) { 
         $('html, body').animate({ scrollTop: $element.offset().top }, 500); 
      }     
      return false;
    });
});