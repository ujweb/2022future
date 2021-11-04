function init() {
	$('.message').fadeIn();
	$('.black, body').addClass('opened');
}
// init();

$('#issue button').on('click', function() {
	var label = $(this).attr('data-issue');
	$('.message-issue-' + label).fadeIn();
	$('.black, body').addClass('opened');
})
$('.message, .message-close').on('click', function() {
	$('.message').fadeOut();
	$('.black, body').removeClass('opened');
});
$('.message-container').on('click', function(e) {
	e.stopPropagation();
});

$('.hamburger').on('click', function(){
	$('body').toggleClass('opened');
	$(this).toggleClass('active');
	$(this).siblings('nav').slideToggle();
});

$('nav ul li a').on('click', function(){
	$('body').removeClass('opened');
	$('.hamburger').removeClass('active');
	$('nav').slideUp();
});

$('form button').on('click', function(e){
	e.preventDefault();
})

$(function () {
	let width = $(window).width();
	let height = $(window).height();
	let headerHeight = $('header').outerHeight();

	$('a.smooth-scroll[href*="#"]:not([href="#"])').on("click", function() {
		if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			if (target.length) {
				$('html, body').animate({
					scrollTop: (target.offset().top - headerHeight + 1)
				}, 1000);
				return false;
			}
		}
	});

	function opHeightResize(height) {
		$('main, .opening, .opening .container').css({
			'min-height': height
		})
	}
	opHeightResize(height);

	function ticketHeightResize(width) {
		if ( width >= 1024 ) {
			$('.ticket-item > .ticket-bottom').css({
				'min-height': $('.ticket-item').eq(0).children('.ticket-bottom').outerHeight()
			})
		} else {
			$('.ticket-item > .ticket-bottom').css({
				'min-height': 'auto'
			})
		}
	}
	ticketHeightResize(width);

	$('.slider-columns').slick({
		infinite: true,
		slidesToShow: 4,
		slidesToScroll: 1,
		prevArrow: '<button type="button" class="slick-prev"><i class="icon icon-arrow-left"></i></button>',
		nextArrow: '<button type="button" class="slick-next"><i class="icon icon-arrow-right"></i></button>',
		responsive: [
			{
				breakpoint: 1025,
				settings: {
					slidesToShow: 3,
				}
			},
			{
				breakpoint: 769,
				settings: {
					slidesToShow: 2,
				}
			},
			{
				breakpoint: 550,
				settings: {
					slidesToShow: 1,
					centerMode: true,
				}
			}
		]
	});

	$(window).on('resize', _.throttle(function() {
		let width = $(window).width();
		let height = $(window).height();
		opHeightResize(height);
		ticketHeightResize(width);
	}, 300));
	$(window).on('load', function () {
		let width = $(window).width();
		ticketHeightResize(width);
	});
	$(window).on('scroll', function () {
		var scroll = $(this).scrollTop(),
			openingHeight = $(".opening").outerHeight();
		if (scroll >= openingHeight / 2) {
			$("header").addClass('scroll');
		} else {
			$("header").removeClass('scroll');
		}
		if (scroll < 50) {
			$("header").removeClass('scroll');
		}
	});
});
