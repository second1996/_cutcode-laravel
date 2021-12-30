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
		slidesPerView: 2,
		slidesPerGroup: 2,
		spaceBetween: 40,
		pagination: {
			el: '.s-vacancies-slider .swiper-pagination',
			clickable: true,
		},
		navigation: {
			nextEl: '.s-vacancies-slider-arrows .swiper-button-next',
			prevEl: '.s-vacancies-slider-arrows .swiper-button-prev',
		},
	});
	

})
