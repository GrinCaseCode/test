$(document).ready(function() {

	//кнопка sandwich
	$(".btn_nav").click(function() {
		$(".sandwich").toggleClass("active");
		if ($(".menu-mobile").is(":hidden")) {
			$(".menu-mobile").slideDown(200);
		} else {
			$(".menu-mobile").slideUp(200);
		}
	});

	$(".menu-mobile a").click(function() {
		$(".menu-mobile").slideUp(200);
		$(".sandwich").removeClass("active");
	});

	//кнопка sandwich
	$(".wrap-link-more a").click(function(e) {
		e.preventDefault();
		if ($(".hidden-text-catalog").is(":hidden")) {
			$(".hidden-text-catalog").slideDown(200);
			$(".article-more").addClass("active");
			$(this).html("Скрыть");
		} else {
			$(".hidden-text-catalog").slideUp(200);
			$(this).html("Читать далее");
			$(".article-more").removeClass("active");
		}
	});

	/*высота блока по экрану*/
	function heightDetect() {
		$('.menu-mobile').css("height", $(window).height() -$(".header").height() + 40);
	};
	heightDetect();
	$(window).resize(function() {
		heightDetect();
	});

	$(".arrow-down").mPageScroll2id();

	$(".input-phone").mask("+7 (999) 999-99-99");

	var austDay = new Date($(".countdown").attr("date-time"));
	$(".countdown").countdown({until: austDay, format: 'yowdHM'});
	//слайдер

	$('.slider-productions').slick({
		arrows: true,
		dots: true,
		infinite: true,
		slidesToShow: 1,
		touchThreshold: 1000,
		prevArrow: '<div class="slick-prev slick-arrow"><i class="far fa-chevron-left"></i><div/>',
		nextArrow: '<div class="slick-next slick-arrow"><i class="far fa-chevron-right"></i><div/>',
		slidesToScroll: 1
	});

	$('.slider-clients').slick({
		arrows: true,
		dots: false,
		infinite: true,
		slidesToShow: 5,
		touchThreshold: 1000,
		prevArrow: '<div class="slick-prev slick-arrow"><i class="far fa-chevron-left"></i><div/>',
		nextArrow: '<div class="slick-next slick-arrow"><i class="far fa-chevron-right"></i><div/>',
		slidesToScroll: 1,
		responsive: [
		{
			breakpoint: 992,
			settings: {
				slidesToShow: 3,
			}
		},
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 2,
			}
		}
		]
	});



	//Попап менеджер FancyBox
	//Документация: http://fancybox.net/howto
	//<a class="fancybox"><img src="image.jpg" /></a>
	//<a class="fancybox" data-fancybox-group="group"><img src="image.jpg" /></a>
	$(".fancybox").fancybox();



	//Кнопка "Наверх"
	//Документация:
	//http://api.jquery.com/scrolltop/
	//http://api.jquery.com/animate/
	$(".btn_top").click(function () {
		$("body, html").animate({
			scrollTop: 0
		}, 800);
		return false;
	});




	var isMobile = {
		Android: function() {
			return navigator.userAgent.match(/Android/i);
		},
		BlackBerry: function() {
			return navigator.userAgent.match(/BlackBerry/i);
		},
		iOS: function() {
			return navigator.userAgent.match(/iPhone|iPad|iPod/i);
		},
		Opera: function() {
			return navigator.userAgent.match(/Opera Mini/i);
		},
		Windows: function() {
			return navigator.userAgent.match(/IEMobile/i);
		},
		any: function() {
			return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
		}
	};
	if(isMobile.any()) {
		$(".countdown-wrap").addClass("countdown-wrap_mob");
	}

	jQuery('.quantity').each(function() {
		var spinner = jQuery(this),
		input = spinner.find('input[type="number"]'),
		btnUp = spinner.find('.quantity-up'),
		btnDown = spinner.find('.quantity-down'),
		min = input.attr('min'),
		max = input.attr('max');

		btnUp.click(function() {
			var oldValue = parseFloat(input.val());
			if (oldValue >= max) {
				var newVal = oldValue;
			} else {
				var newVal = oldValue + 1;
			}
			spinner.find("input").val(newVal);
			spinner.find("input").trigger("change");
		});

		btnDown.click(function() {
			var oldValue = parseFloat(input.val());
			if (oldValue <= min) {
				var newVal = oldValue;
			} else {
				var newVal = oldValue - 1;
			}
			spinner.find("input").val(newVal);
			spinner.find("input").trigger("change");
		});

	});

	$('.card-descr-items li a').click(function(event) {
		event.preventDefault();
	});

	$('.card-descr-items li:first').addClass('active');
	$('.card-descr-items li').click(function(event) {
		$('.card-descr-items li').removeClass('active');
		$(this).addClass('active');
		$('.tab-pane').hide();

		var selectTab = $(this).find('a').attr("href");

		$(selectTab).fadeIn();
	});

});