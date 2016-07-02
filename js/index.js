$(document).ready(function(){
	$('.about-sticky').affix({
    offset: {
       top: 540,
       bottom: $('.about-height').outerHeight(true)
	   }
	});
	$('.portfolio-sticky').affix({
    offset: {
       top: $('.portfolio-height').outerHeight(true)
	   }
	});
	
	$(".navbar a, footer a[href='#myPage']").on('click',function(event) {
		event.preventDefault();
		var hash = this.hash;
		$('html,body').animate({
			scrollTop: $(hash).offset().top	
		}, 900,function(){
			window.location.hash = hash;
		});
	});
	$(window).scroll(function() {
		$(".slideanim").each(function() {
			var pos = $(this).offset().top;
			var winTop =$(window).scrollTop();
			if (pos < winTop + 600) {
				$(this).addClass("slide");
			}
		});
	});
	})