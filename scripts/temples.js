const nav = document.querySelector('.navigation')
const button = document.querySelector('#menu');

button.addEventListener('click', () => {
	nav.classList.toggle('show');
	button.classList.toggle('show');
});
