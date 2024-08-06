"use strict";
/* ==== Jquery Functions ==== */
(function($) { 
    	
	/*==== Counter ====*/
    $('.counter-item').appear(function() {
    	$('.counter-number').countTo();
    });
	
	/*==== Users ====*/
	$(".featuredusers").owlCarousel({
		loop: false,
		rewind: true,
		margin: 30,
		nav: false,
		responsiveClass: true,
		responsive: {
			0: {
				items: 1,
				nav: true
			},
			700: {
				items: 2,
				nav: true
			},
			900: {
				items: 3,
				nav: true
			},
			1170: {
				items: 4,
				nav: true
			}
		}
	});   		
	
	
	/* ================ testimonials ================ */
   
    $(".testimonials_list").owlCarousel({
            loop: true,
            rewind: true,
            margin: 30,
            nav: false,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1,
                    nav: true
                },
                700: {
                    items: 1,
                    nav: false
                },
                900: {
                    items: 1,
                    nav: false
                },
                1170: {
                    items: 2,
                    nav: true
                }
            }
        });
	
	
	/* ================ testimonials ================ */
	$(".storyimages").owlCarousel({
		loop: false,
		rewind: true,
		margin: 30,
		nav: false,
		responsiveClass: true,
		responsive: {
			0: {
				items: 1,
				nav: true
			},
			700: {
				items: 1,
				nav: true
			},
			900: {
				items: 1,
				nav: true
			},
			1170: {
				items: 1,
				nav: true
			}
		}
	});


	/* ==== Revolution Slider ==== */
	if($('.tp-banner').length > 0){
		$('.tp-banner').show().revolution({
			delay:6000,
			startheight:600,
			startwidth: 1170,
			hideThumbs: 1000,
			navigationType: 'none',
			touchenabled: 'on',
			onHoverStop: 'on',
			navOffsetHorizontal: 0,
			navOffsetVertical: 0,
			dottedOverlay: 'none',
			fullWidth: 'on'
		});
	}



})(jQuery);