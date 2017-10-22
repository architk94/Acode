
//$(document).ready(function(){
  //  $(".circle").click(function(){
    //    $(this).hide();
      //  $(".under").fadeIn(400);
        //$("#box").fadeOut();



$(window).scroll(function() {
  if ($(this).scrollTop() > 700 && $(this).scrollTop() < 1400) {
    $('.text').fadeIn();
    $("h3").text("There's something about this city. i don't know what.");


  } else {
    // $('.text').fadeOut();
  }
}); 

$(window).scroll(function() {
  if ($(this).scrollTop() > 1500 && $(this).scrollTop() < 2500) {
    // $('.text').fadeIn();
    $("h3").text("Well, it's not the safest city in the world");

  } else {
    // $('.text').fadeOut();
  }
}); 


$(window).scroll(function() {
  if ($(this).scrollTop() > 2500 && $(this).scrollTop() < 4000) {
    // $('.text').fadeIn();
    $("h3").text("The noises drive me mad sometimes");

  } else {
    // $('.text').fadeOut();
  }
}); 

$(window).scroll(function() {
  if ($(this).scrollTop() > 4000 && $(this).scrollTop() < 5100) {
    // $('.text').fadeIn();
    $("h3").text("And dont get me started about the traffic ");

  } else {
    // $('.text').fadeOut();
  }
}); 

$(window).scroll(function() {
  if ($(this).scrollTop() > 5800 && $(this).scrollTop() < 6000) {
    // $('.text').fadeIn();
    $("h3").text("Sometimes . I wish i were invisible");

  } else {
    // $('.text').fadeOut();
  }
}); 


$(window).scroll(function() {
  if ($(this).scrollTop() > 12000 && $(this).scrollTop() < 14500) {
    $('.text').fadeIn();
    $("h3").text("Only if, ifs and buts were candies , we would have a");

  } else {
    // $('.text').fadeOut();
  }
}); 


$(window).scroll(function() {
  if ($(this).scrollTop() > 9000 ) {
    // $('.text').fadeIn();
    $("h3").text("But i dont know, there's something about this city i really like and i wouldn't have it any other way");
    $(".text").css({

			'height' : '290px'


		});
  } else {
    // $('.text').fadeOut();
  }
}); 


$(window).scroll(function() {
  if ($(this).scrollTop() < 14500 ) {
    // $('.text').fadeIn();
    //$("h3").text("But i dont know, there's something about this city i really like and i wouldn't have it any other way");
    $(".text").css({

			'height' : '200px'


		});
  } else {
    // $('.text').fadeOut();
  }
}); 






$(window).scroll(function(){

	var wScroll = $(this).scrollTop();

	if(wScroll> $('.tracks').offset().top-900){
	


		$('.train').css({

			'transform' : 'translate(-'+ wScroll +'px , 0px)'


		});


		 console.log(wScroll);
	};


	if(wScroll> $('.thug').offset().top-1900){
	


		$('.thug').css({

			'transform' : 'translatex('+ wScroll +'px )'


		});



	};



	
	// if(wScroll > $('.highline').offset().top-300){
	//  	$(".person").hide();

	//  };

	//  if(wScroll < $('.show').offset().top-50){
	//  	$(".person").show();

	//  };





	if(wScroll> $('.high').offset().top-300){
	 	$(".person").hide();

	 };


	if(wScroll< $('.high').offset().top-350){
	 	$(".person").show();

	 };


	 if(wScroll> $('.show').offset().top-50){
	 	
		$(".person").show();

	 };


	 

	 if(wScroll> $('.building').offset().top-350){
	 	$(".person").show();
	 	$(".person").css({

			'position' : 'fixed'


		});
		$(".person").css({

			'transform' : 'scale(1.4)'


		});


	 };

	 if(wScroll< $('.building').offset().top-520){
	 	
	 	$(".person").css({

			'position' : 'fixed'


		});
		$(".person").css({

			'transform' : 'scale(1)'


		});


	 };




//stop scrolling

		$(window).scroll(function(){
    $(".person").css("top", Math.min(0, 10400 - $(this).scrollTop()));
});

		




	
	// if(wScroll< $('.first-fold').offset().top+400){
	// 	$(".person").fadeOut();

	// };



	// if(wScroll> $('.first-fold').offset().top+400){
	// 	$(".person").fadeIn();

	// };



	// if(wScroll> $('.tracks').offset().top+250){
	// 	$(".person").fadeOut();

	// };

	// 	if(wScroll< $('.tracks').offset().top-50){
	// 	$(".person").show();

	// };





	

		

		






	// 	$('.box').css({

	// 		'transform': 'rotateY('+wScroll+'deg) translateY('+wScroll+'px) '
	// 	});

	// 	$('.circle').css({

	// 		'transform' : 'translateY( -'+ wScroll/2 +'px) rotateY(-'+wScroll+'deg)'	

	// 		});

	// 	if(wScroll> $('.objects').offset().top-250){

	// 		$('.el').each(function(i){


	// 			setTimeout(function(){
	// 			$('.el').eq(i).addClass('is-showing');

	// 		},150*(i+1) );

	// 		});
	// 	}

	// if(wScroll>$('.float').offset().top-$(window).height()){


	// var offset = Math.min(0, wScroll - $('.float').offset().top+$(window).height()-400);


	// 		$('.one').css({

	// 			'transform' : 'translate( '+offset/4+'px , 0px)'	

	// 		});

	// 		$('.two').css({

	// 			'transform' : 'translate( '+Math.abs(offset/4)+'px , 0px)'	

	// 		});


	// 	};


	// 	if(wScroll>$('.ine').offset().top){
	// 		$('.ine').css({

	// 			'transform' : 'translateY( -'+ wScroll/2 +'px)'
				
	// 		});

 
	// 	};

		
if(wScroll>$(".people").offset().top-$(window).height()){


	var offset = Math.min(0, wScroll - $(".people").offset().top+$(window).height()-600);


			$(".ones").css({

				'transform' : 'translate( '+offset+'px , 0px)'	

			});

			$(".twos").css({

				'transform' : 'translate( '+Math.abs(offset)+'px , 0px)'	

			});


		};

		
});



	



/*
This pen is created by Abhishek Bagul

Tutorial : https://www.youtube.com/watch?v=7MDJtw3ZF-4

*/

jQuery(function($) {


    var currentMousePos = { x: -1, y: -1};



    $(document).mousemove(function(event) {
        currentMousePos.x = event.pageX;
        currentMousePos.y = event.pageY;

		var width = Number($(window).width());
			var height = Number($(window).height());
			var half_w = width / 2 ;
			var half_h = height;

        //let's check the position
        $('#location').html('x: ' + currentMousePos.x + " , " + ' y: ' + currentMousePos.y)
    
        //make the eyes move


        //if on the negative side
        	//determine the x_pos

        	var left_pos_l = ( ( currentMousePos.x / (width ) ) * 100 ) - 0;
        	var right_pos_r =  (( currentMousePos.x / (width)  ) * 100) + 25;
        	var top_pos_l = ( currentMousePos.y / (height) ) * 45;
        	var top_pos_r = ( currentMousePos.y / (height) ) * 50;
                	
        	$('.eye_l').css('left',left_pos_l).css('top', top_pos_l);
        	$('.eye_r').css('left',right_pos_r).css('top',top_pos_r);

        


    });



    
});




// p5 library









