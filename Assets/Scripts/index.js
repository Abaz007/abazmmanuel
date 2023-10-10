const navList =  document.querySelector(".nav-list")
const hamburger = document.querySelector('.hamburger');

// Define a function to toggle the 'active' class
function toggleActiveClass() {
  hamburger.classList.toggle('active');
  navList.classList.toggle('active')
}

// Add a click event listener to the hamburger element
hamburger.addEventListener('click', toggleActiveClass);