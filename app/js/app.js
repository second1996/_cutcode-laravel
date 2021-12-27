document.addEventListener('DOMContentLoaded', function() {
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
})