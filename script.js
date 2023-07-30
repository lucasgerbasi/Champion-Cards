// start about me nav

const nav = document.querySelector(".nav-container");

if (nav) {
  const toggle = nav.querySelector(".nav-toggle");

  toggle.addEventListener("click", () => {
    console.log("clicked")
    if (nav.classList.contains("is-active")) {
      nav.classList.remove("is-active");
    }
    else {
      nav.classList.add("is-active");
    }
  });

  nav.addEventListener("blur", () => {
    console.log("nav blur")
    nav.classList.remove("is-active");
  });
}

// end about me nav

// start slide in animation

const cards = document.querySelectorAll('.ChampCard');

// Function to calculate animation delay based on card index
const calculateAnimationDelay = (index) => {
  // Adjust the delay time as needed (milliseconds)
  const baseDelay = 1000;
  const delayIncrement = 500;
  return `${baseDelay + index * delayIncrement}ms`;
};

// Apply animation delays to each card
cards.forEach((card, index) => {
  card.style.setProperty('--animation-delay', calculateAnimationDelay(index));
});

// end slide in animation

// start background image

const backgroundImageUrls = [
  'images/img1.jpg',
  'images/img2.jpg',
  'images/img3.jpg',
  'images/img4.jpg',
  'images/img5.jpg',
  'images/img6.jpg',
  'images/img7.jpg',
  'images/img8.jpg',
  'images/img9.jpg',
  'images/img10.jpg',
  'images/img11.jpg',
  'images/img12.jpg',
  'images/img51.jpg',
  'images/img82.jpg',
  'images/img150.jpg',


  // Add more image URLs as needed
];

// Get all the pic elements
const picElements = document.querySelectorAll('.container .ChampCard .pic');

// Loop through each pic element and assign a background image
picElements.forEach((picElement, index) => {
  picElement.style.backgroundImage = `url(${backgroundImageUrls[index]})`;
});

// end background image

// start tab functionality

const tabs = document.querySelectorAll('.tab');

// Set initial filter state to 'all'
let filterValue = 'all';



// Function to filter the cards
const filterCards = () => {
  cards.forEach(card => {
    const roleImg = card.querySelector('.icons .role');
    const roleValue = roleImg ? roleImg.getAttribute('data-role-filter') : null;
    const showCard = filterValue === 'all' || roleValue === filterValue;
    card.style.display = showCard ? 'block' : 'none';
  });
};

// Attach click event listeners to tabs
tabs.forEach(tab => {
  tab.addEventListener('click', (event) => {
    event.preventDefault(); // Prevent default navigation behavior
    filterValue = tab.getAttribute('data-filter');
    filterCards();

    // Update active state for tabs
    tabs.forEach(tab => tab.classList.remove('active'));
    tab.classList.add('active');

    triggerAnimation();
  });
});


// Display all cards on initial load
filterCards();

// end tab functionality
