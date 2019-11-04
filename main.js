// Select the number of clicks
const clicks = document.querySelector('#click');
// Init number of clicks
clicks.textContent = 0;

// function to handle clicks on cat image
function catClickHandler() {
    clicks.textContent++;
}

// listen to the clicks on cat image
const cat = document.querySelector('img');
cat.addEventListener('click', catClickHandler);