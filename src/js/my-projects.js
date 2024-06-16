const loadMoreBtn = document.getElementById('two-button');
const listItems = document.querySelectorAll('#list-sites .hidden');
let currentIndex = 0;


function checkLoadMoreButton() {
    if (currentIndex >= listItems.length) {
        loadMoreBtn.style.display = 'none'; 
    } else {
        loadMoreBtn.style.display = 'block'; 
    }
}


checkLoadMoreButton();

loadMoreBtn.addEventListener('click', () => {
    let itemsToShow = 3;

    for (let i = currentIndex; i < currentIndex + itemsToShow && i < listItems.length; i++) {
        listItems[i].classList.remove('hidden');
    }

    currentIndex += itemsToShow;

    
    checkLoadMoreButton();
});
