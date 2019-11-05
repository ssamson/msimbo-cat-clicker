// Select the number of clicks
const cat1Clicks = document.querySelector('#cat1Click');
const cat2Clicks = document.querySelector('#cat2Click');
// Init number of clicks
// clicks.textContent = 0;
cat1Click.textContent = 0;
cat2Click.textContent = 0;

// function to handle clicks on cat image
// function catClickHandler() {
//     clicks.textContent++;
// }

// listen to the clicks on cat image
const cat1 = document.querySelector('#cat1');
const cat2 = document.querySelector('#cat2');

// cat.addEventListener('click', catClickHandler);

cat1.addEventListener('click', () => {
    cat1Clicks.textContent++;
});

cat2.addEventListener('click', () => {
    cat2Clicks.textContent++;
});