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

	/**
	 * Curriculum accordion
	 */
	const accordionHeader = document.querySelectorAll('.accordion-header');
	accordionHeader.forEach((header) => {
		header.addEventListener('click', function () {
			const accordionContent = header.parentElement.querySelector('.accordion-content');
			let accordionMaxHeight = accordionContent.style.maxHeight;

			// Condition handling
			if (accordionMaxHeight == '0px' || accordionMaxHeight.length == 0) {
				accordionContent.style.maxHeight = `${accordionContent.scrollHeight + 32}px`;
				header.classList.add('_is-toggled');
			} else {
				accordionContent.style.maxHeight = `0px`;
				header.classList.remove('_is-toggled');
			}
		});
	});

})
