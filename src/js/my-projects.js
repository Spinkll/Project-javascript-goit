const loadMoreBtn = document.getElementById('two-button');
const listItems = document.querySelectorAll('#list-sites .hidden');
let currentIndex = 0;

loadMoreBtn.addEventListener('click', () => {
    let itemsToShow = 3;
    if (currentIndex + itemsToShow >= listItems.length) {
        itemsToShow = listItems.length - currentIndex;
        loadMoreBtn.classList.add('hidden');
    }

    for (let i = currentIndex; i < currentIndex + itemsToShow; i++) {
        listItems[i].classList.remove('hidden');
    }
    currentIndex += itemsToShow;
});