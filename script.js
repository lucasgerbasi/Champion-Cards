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

const container = document.querySelector('.container');
const cards = document.querySelectorAll('.ChampCard');

// Function to trigger the animation by adding the 'active' class with a delay
const triggerAnimation = () => {
  cards.forEach(card => {
    card.classList.remove('active'); // Remove 'active' class from all cards
  });

  // Add a slight delay before starting the animation
  setTimeout(() => {
    cards.forEach((card, index) => {
      // Calculate the delay based on the index of the card
      const delay = index * 200; // Adjust the delay time as needed (milliseconds)
      setTimeout(() => {
        card.classList.add('active');
      }, delay);
    });
  }, 10); // Adjust the delay time as needed (milliseconds)
};

// Add an event listener to trigger the animation when the page finishes loading
window.addEventListener('load', triggerAnimation);

const backgroundImageUrls = [
  'images/img1.jpg',
  'images/img2.jpg',
  'images/img3.jpg',
  'images/img4.jpg',
  'images/img5.jpg',
  'images/img6.jpg',
  'images/img7.jpg',

  // Add more image URLs as needed
];

// Get all the pic elements
const picElements = document.querySelectorAll('.container .ChampCard .pic');

// Loop through each pic element and assign a background image
picElements.forEach((picElement, index) => {
  picElement.style.backgroundImage = `url(${backgroundImageUrls[index]})`;
});

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
