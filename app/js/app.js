document.addEventListener('DOMContentLoaded', function() {

	/**
	 * Mobile menu
	 */
	const burgerMenu = document.querySelector('#burgerMenu');
	const mobileMenu = document.querySelector('#mobileMenu');
	const closeMobileMenu = document.querySelector('#closeMobileMenu');

	function toggleMobileMenu() {
		mobileMenu.classList.toggle('hidden');
	}

	burgerMenu.addEventListener('click', function(event) {
		toggleMobileMenu();
	});

	closeMobileMenu.addEventListener('click', function(event) {
		toggleMobileMenu();
	});

	/**
	 * Vacancies slider
	 */
	const vacanciesSwiper = new Swiper('.s-vacancies-slider', {
		slidesPerView: 1,
		slidesPerGroup: 1,
		spaceBetween: 40,
		autoHeight: true,
		pagination: {
			el: '.s-vacancies-slider .swiper-pagination',
			clickable: true,
		},
		navigation: {
			nextEl: '.s-vacancies-slider-arrows .swiper-button-next',
			prevEl: '.s-vacancies-slider-arrows .swiper-button-prev',
		},
		breakpoints: {
			1140: {
				slidesPerView: 2,
				slidesPerGroup: 2,
				autoHeight: false,
			},
		},
	});
	

	/**
	 * Testimonials slider
	 */
	const testimonialsSwiper = new Swiper('.s-testimonials-slider', {
		slidesPerView: 1,
		slidesPerGroup: 1,
		spaceBetween: 40,
		autoHeight: true,
		pagination: {
			el: '.s-testimonials-slider .swiper-pagination',
			clickable: true,
		},
		navigation: {
			nextEl: '.s-testimonials-slider-arrows .swiper-button-next',
			prevEl: '.s-testimonials-slider-arrows .swiper-button-prev',
		},
		breakpoints: {
			960: {
				slidesPerView: 2,
				slidesPerGroup: 2,
				autoHeight: false,
			},
		},
	});
	

})
