$(document).ready(function() {

$(".single_image").fancybox();

$("a[rel=group]").fancybox({
  'transitionIn' : 'none',
  'transitionOut' : 'none',
  'titlePosition' : 'over',
  'titleFormat' : function(title, currentArray, currentIndex, currentOpts) {
   return '<span id="fancybox-title-over">Image ' + (currentIndex + 1) + ' / ' + currentArray.length + (title.length ? ' &nbsp; ' + title : '') + '</span>';
   }
});



  $("#owl-demo").owlCarousel({
   
        autoPlay: 3000, //Set AutoPlay to 3 seconds
        navigation : true,
        items : 6,
        itemsDesktop : [1199,3],
        itemsDesktopSmall : [979,3],
        navigationText: true
   
    });
 



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
  $('a[name=modal-zvonok]').click(function(e) {
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
    $('#otzyv-content').html($(this).find('.otzyv-content').html());
    $(id).fadeIn(500); 
  
  });
  
  $('.window2 .close').click(function (e) {
    e.preventDefault();
    $('#mask, .window2').hide();
  }); 
  $('.zvonok .close').click(function (e) {
    e.preventDefault();
    $('#mask, .zvonok').hide();
  }); 

  $('#mask').click(function () {
      $(this).hide();
      $('.window2').hide();
      $('.zvonok').hide();

  }); 

  $("#page8_form_submit").click(function () {
      var empty = true;
    $('.page8_form  input[name="tel"]').each(function(o){
        if ($(this).val() == ""){empty = false;}
    });

    if (empty == false){
      alert("Заполните, пожалуйста, Ваш телефон");
    }else{
      //alert('sssssss');
      $.ajax({
        type: 'POST',
        url: '/sendmessage.php',
        data: $('.page8_form').serialize(),
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

  $("#page10_form_submit").click(function () {
      var empty = true;
    $('.page10_form  input[name="tel"]').each(function(o){
        if ($(this).val() == ""){empty = false;}
    });

    if (empty == false){
      alert("Заполните, пожалуйста, Ваш телефон");
    }else{
      //alert('sssssss');
      $.ajax({
        type: 'POST',
        url: '/sendmessage.php',
        data: $('.page10_form').serialize(),
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
      $('.zvonok').hide();
      $('a[href=#thanks]').trigger('click');
    }
    
    return false;
  });
 
 $("#zayavka_form_submit").click(function () {

    var empty = true;
    $('.zayavka_form  input[name="tel"]').each(function(o){
        if ($(this).val() == ""){empty = false;}
    });

    if (empty == false){
      alert("Заполните, пожалуйста, Ваш телефон");
    }else{
      //alert('sssssss');
      $.ajax({
        type: 'POST',
        url: '/sendmessage.php',
        data: $('.zayavka_form').serialize(),
        success: function(data) {
        }
      });
      //$('body,html').animate({scrollTop:0},500); 
      $('.zvonok').hide();
      $('a[href=#thanks]').trigger('click');
    }
    
    return false;
  });
  





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