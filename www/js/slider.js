title_div = $('#title');
slides_wrapper = $('#slides_wrapper');

// Animation listeners
document.getElementById('slides_wrapper').addEventListener( 'webkitAnimationEnd', function( event ) {
	slides_wrapper.removeClass('first-slide-nogo');
}, false );
document.getElementById('slides_wrapper').addEventListener( 'animationend', function( event ) {
	slides_wrapper.removeClass('first-slide-nogo');
}, false );


// Go to next slide
function nextSlide() {
	var current = $('.current').attr('id');

	if ($('#' + current).hasClass('lastslide')) { // We're at the last slide: be kind, rewind!
		slides_wrapper.attr('class', 'slide-1');
		$('.current').removeClass('current');
		$('.firstslide').addClass('current');
		title_div.html( $('.current').attr('ref')	);
		return;
	}
	var next = $('#' + current).next();
	$('#' + current).removeClass('current');
	next.addClass('current');
	slides_wrapper.attr('class', next.attr('id'));
	title_div.html( $('.current').attr('ref')	);
}

// Go back to previous slide
function prevSlide() {
	var current = $('.current').attr('id');
  
	if (current == "slide-1") {
		slides_wrapper.attr('class', $('.lastslide').attr('id')								);
		$('.current').removeClass('current');
		$('.lastslide').addClass('current');
		title_div.html( $('.current').attr('ref')	);
		return;

		//$('#slides_wrapper').addClass('first-slide-nogo');
		//return; // This is the first slide, there is no going back.
	}
    
	var prev = $('#' + current).prev();
	$('#' + current).removeClass('current');
	prev.addClass('current');
	slides_wrapper.attr('class', prev.attr('id'));
	title_div.html( $('.current').attr('ref')	);
}



// Support for keyboard arrows
document.onkeydown = function(e) {
	if (e.keyCode == 37) { 
		prevSlide();
	}
	if (e.keyCode == 39) { 
		nextSlide();
	}
}