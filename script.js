$(document).ready(function(){

    $('#menu').click(function(){
      $(this).toggleClass('fa-times');
      $('header').toggleClass('toggle');
    });
  
    $(window).on('scroll load',function(){
  
      $('#menu').removeClass('fa-times');
      $('header').removeClass('toggle');
  
      if($(window).scrollTop() > 0){
        $('.top').show();
      }else{
        $('.top').hide();
      }
  
    });
  
    // smooth scrolling 
  
    $('a[href*="#"]').on('click',function(e){
  
      e.preventDefault();
  
      $('html, body').animate({
  
        scrollTop : $($(this).attr('href')).offset().top,
  
      },
        500, 
        'linear'
      );
  
    });
  
  });

  var typed = new Typed('.animate', {
    strings:[
        "Surya Shankar.",
        "a Developer.",
        "a Designer."
    ],
    typeSpeed:80,
    backSpeed:80,
    backDelay: 10000,
    loop:true,
    
})

var typed = new Typed('.anima', {
  strings:[
      "Strong Web development Skill with a Bachelor's degree focused in Electronics and Communication from Silicon Institute of Technology (SIT), Bhubaneswar."
  ],
  typeSpeed:50,
  backSpeed:50,
})