const images = document.querySelectorAll('.disable-click');

images.forEach(img => {
    img.classList.add('disabled-img');
    img.addEventListener('click', event => event.preventDefault());
});