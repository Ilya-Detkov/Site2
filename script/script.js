$(document).ready(function(){
    $('.slider').slick({
        arrows:false,
        dots:false,
        slidesToShow: 3,
        slidesToScroll: 1,
        variableWidth: true,
        autoplay: true,
        rtl: true,
        autoplaySpeed: 1000,
        speed: 1000
    });

    $('.btn-action1').on('click', function(event){
        event.preventDefault();
        $('.popup-container1').fadeIn(1000).css( 'display', 'flex' );
        $("body").addClass("fixed");
    });
    $('.btn-action2').on('click', function(event){
        event.preventDefault();
        $('.popup-container2').fadeIn(1000).css( 'display', 'flex' );
        $("body").addClass("fixed");
    });
    $('.btn-action3').on('click', function(event){
        event.preventDefault();
        $('.popup-container3').fadeIn(1000).css( 'display', 'flex' );
        $("body").addClass("fixed");
    });
    $('.btn-action4').on('click', function(event){
        event.preventDefault();
        $('.popup-container4').fadeIn(1000).css( 'display', 'flex' );
        $("body").addClass("fixed");
    });

    $('.popup-close, .popup__thanks-close').on('click', function(event){
        event.preventDefault();
        $('.popup-container1, .popup-container2, .popup-container3, .popup-container4').fadeOut(1000);
        $("body").removeClass("fixed");
    });

    $('.popup-container1, .popup-container2, .popup-container3, .popup-container4').on('click', function(event){
		if(event.target == this) {
      $(this).fadeOut(700);
			$("body").removeClass("fixed");
		}
    });



});