/* need to find menu button for slide out nav */
const menuButton = document.querySelector('.menuIcon');
/* Need to add event listener to the slideOutNav to listen for a click on the menuIcon */
menuButton.addEventListener('click', () => {
    /* Access slide out nav in open state through classlist */
    document.body.classList.add('slideOutNavOpen');
});

/* Find close button for slide out nav */
const closeButton = document.querySelector('.closeButton');

/* Use classlist to revert to closed state upon clicking close button */
closeButton.addEventListener('click', () => {
    document.body.classList.remove('slideOutNavOpen');
});

