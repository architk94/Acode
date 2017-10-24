
//$(document).ready(function(){
  //  $(".circle").click(function(){
    //    $(this).hide();
      //  $(".under").fadeIn(400);
        //$("#box").fadeOut();




$(window).scroll(function(){

	var wScroll = $(this).scrollTop();
	


		$('.text').css({

			'transform' : 'translate(0px, '+ wScroll/2 +'px)'


		});


		$('.box').css({

			'transform': 'rotateY('+wScroll+'deg) translateY('+wScroll+'px) '
		});

		$('.circle').css({

			'transform' : 'translateY( -'+ wScroll/2 +'px) rotateY(-'+wScroll+'deg)'	

			});

		if(wScroll> $('.objects').offset().top-250){

			$('.el').each(function(i){


				setTimeout(function(){
				$('.el').eq(i).addClass('is-showing');

			},150*(i+1) );

			});
		}

	if(wScroll>$('.float').offset().top-$(window).height()){


	var offset = Math.min(0, wScroll - $('.float').offset().top+$(window).height()-400);


			$('.one').css({

				'transform' : 'translate( '+offset/4+'px , 0px)'	

			});

			$('.two').css({

				'transform' : 'translate( '+Math.abs(offset/4)+'px , 0px)'	

			});


		};


		if(wScroll>$('.ine').offset().top){
			$('.ine').css({

				'transform' : 'translateY( -'+ wScroll/2 +'px)'
				
			});

 
		};

		

		


			


		




		
});











