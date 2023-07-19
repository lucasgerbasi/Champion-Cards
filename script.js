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

  var coll = document.getElementsByClassName("collapsible");
  var i;
  
  for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
      this.classList.toggle("active");
      var content = this.nextElementSibling;
      if (content.style.maxWidth) {
        content.style.maxWidth = null;
      } else {
        content.style.maxWidth = content.scrollWidth + "px";
      }
    });
  }

  $('ul li').on('click', function() {
	$('li').removeClass('active');
	$(this).addClass('active');
});
