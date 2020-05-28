//Get the button:

// Select the HTML elements
// that we need to interact with
const body = document.body;
const btn = document.getElementById('btn-menu');
const navhm=document.getElementById('nav-hm');
const gotoTop = document.getElementById('gotopbtn');

// Create our event handlers

// Click Event
// - Toggle a "show" class on / off on the body
//   element
btn.addEventListener('click', _ => { 
    body.classList.toggle('show'); 
    navhm.classList.toggle('open');
});

// Mousedown Event
// - Remove the focus ring for mouse users,
// ...but keep it for keyboard users
btn.addEventListener('mousedown', (e) => { 
    e.preventDefault(); 
});


// Show / Hide Menu
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    gotoTop.style.visibility = 'visible';
  } else {
    gotoTop.style.visibility ='hidden';
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

//Smooth Scroll
var scroll = new SmoothScroll('a[href*="#"]',  {
    offset: 20,
    speed:500,
    speedAsDuration: true,
    durationMax:500
});

