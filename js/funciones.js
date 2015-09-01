$(document).ready(function(){
    
    
    //menu pegajoso
    var altura = $('#navegacion').offset().top;    
    $(window).on('scroll', function(){
        if($(window).scrollTop() > altura){
            $('#navegacion').addClass('fixed');
        }else{
            $('#navegacion').removeClass('fixed');
        }
    });
    //menu pegajoso   
    
    //scroll top
    $('.goTop').click(function(){
        $('body, html').animate({
            scrollTop: '0px'
        });
    });
    
//    $(window).scroll(function(){
//        if($(this).scrollTop()>0){
//            $('.goTop').slideDown(300);
//        }else{
//            $('.goTop').slideUp(300);
//        }
//    });
    //scroll top
});