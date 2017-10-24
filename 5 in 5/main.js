


var img2 = $('.img2');
var img1 = $('.img1');
var img3 = $('.img3');
var day1= $('.day1');

var overlay = $('.overlay');


overlay.mousemove(function(e){
    var amountMovedX = (e.pageX * 1 / 2);
    var amountMovedY = (e.pageY * 1 / 4);
	img1.css({
  '-webkit-transform' : 'translate3d(' + amountMovedX + 'px,' + amountMovedY + 'px, 0)',
  '-moz-transform'    : 'translate3d(' + amountMovedX + 'px,' + amountMovedY + 'px, 0)',
  '-ms-transform'     : 'translate3d(' + amountMovedX + 'px,' + amountMovedY + 'px, 0)',
  '-o-transform'      : 'translate3d(' + amountMovedX + 'px,' + amountMovedY + 'px, 0)',
  'transform'         : 'translate3d(' + amountMovedX + 'px,' + amountMovedY + 'px, 0)'
	});

});


overlay.mousemove(function(e){
    var amountMovedX = (e.pageX * 1 / 4);
    var amountMovedY = (e.pageY * 1 / 8);
	img2.css({
  '-webkit-transform' : 'translate3d(' + amountMovedX + 'px,' + amountMovedY + 'px, 0)',
  '-moz-transform'    : 'translate3d(' + amountMovedX + 'px,' + amountMovedY + 'px, 0)',
  '-ms-transform'     : 'translate3d(' + amountMovedX + 'px,' + amountMovedY + 'px, 0)',
  '-o-transform'      : 'translate3d(' + amountMovedX + 'px,' + amountMovedY + 'px, 0)',
  'transform'         : 'translate3d(' + amountMovedX + 'px,' + amountMovedY + 'px, 0)'
});

});

overlay.mousemove(function(e){
    var amountMovedX = (e.pageX * 1 / 16);
    var amountMovedY = (e.pageY * 1 / 16);
  img3.css({
  '-webkit-transform' : 'translate3d(' + amountMovedX + 'px,' + amountMovedY + 'px, 0)',
  '-moz-transform'    : 'translate3d(' + amountMovedX + 'px,' + amountMovedY + 'px, 0)',
  '-ms-transform'     : 'translate3d(' + amountMovedX + 'px,' + amountMovedY + 'px, 0)',
  '-o-transform'      : 'translate3d(' + amountMovedX + 'px,' + amountMovedY + 'px, 0)',
  'transform'         : 'translate3d(' + amountMovedX + 'px,' + amountMovedY + 'px, 0)'
});

});







    

