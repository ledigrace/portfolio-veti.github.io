$(document).ready(function(){


	$("#portfolio-contant-active").mixItUp();


	$("#testimonial-slider").owlCarousel({
	    paginationSpeed : 500,
	    singleItem:true,
	    autoPlay: 3000,
	});




	$("#clients-logo").owlCarousel({
		autoPlay: 3000,
		items : 5,
		itemsDesktop : [1199,5],
		itemsDesktopSmall : [979,5],
	});

	$("#works-logo").owlCarousel({
		autoPlay: 3000,
		items : 5,
		itemsDesktop : [1199,5],
		itemsDesktopSmall : [979,5],
	});


	// google map
		var map;
		function initMap() {
		  map = new google.maps.Map(document.getElementById('map'), {
		    center: {lat: -34.397, lng: 150.644},
		    zoom: 8
		  });
		}


	// Counter

	$('.counter').counterUp({
        delay: 10,
        time: 1000
    });


});

//change navbar background

$(window).on('scroll', function(){
	if($(window).scrollTop()){
		$('header').addClass('black');
	}else{
		$('header').removeClass('black');
	}
})

// scroll to top
let calcScrollValue = () => {
	let scrollProgress = document.getElementById("progress");
	let progressValue = document.getElementById("progress-value");
	let pos = document.documentElement.scrollTop;
	let calcHeight =
			document.documentElement.scrollHeight - document.documentElement.clientHeight;
	let scrollValue = Math.round((pos * 100) / calcHeight);
	if (pos > 100) {
		scrollProgress.style.display = "grid";
	} else {
		scrollProgress.style.display = "none";
	}
	scrollProgress.addEventListener("click", () => {
		document.documentElement.scrollTop = 0;
	});
	scrollProgress.style.background = `conic-gradient (#c30000 ${scrollValue}%, #d7d7d7 ${scrollValue}%)`;
};
window.onscroll = calcScrollValue;
window.onload = calcScrollValue;
