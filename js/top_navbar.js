document.addEventListener("DOMContentLoaded", () => {
  // Elements
  const topNavbar = document.querySelector('.top-navbar');
  const navbarOffset = topNavbar.offsetTop; // Get the initial position of the top navbar
  const navLinks = document.querySelectorAll(".top-navbar ul li a");
  const sections = document.querySelectorAll("main section");

  // Scroll behavior to add sticky class when passing the top navbar position
  window.addEventListener('scroll', () => {
    if (window.pageYOffset > navbarOffset) {
      topNavbar.classList.add('sticky-nav'); // Make navbar sticky when scrolling past it
    } else {
      topNavbar.classList.remove('sticky-nav'); // Remove sticky effect when scrolling back to the top
    }
  });

  // Scroll event for updating active link
  function onScroll() {
    let scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;

    sections.forEach(section => {
      if (section.offsetTop <= scrollPosition + 100 &&
          section.offsetTop + section.offsetHeight > scrollPosition + 100) {
          const id = section.getAttribute("id");
          navLinks.forEach(link => {
              link.classList.remove("active");
              if (link.getAttribute("href") === `#${id}`) {
                  link.classList.add("active");
              }
          });
      }
    });
  }

  // Adding scroll event listener for active link highlight
  document.addEventListener("scroll", onScroll);

  // Add event listeners for dropdown functionality (on click)
  const dropdownLinks = document.querySelectorAll('.top-navbar ul li');

  dropdownLinks.forEach(link => {
    link.addEventListener('click', (event) => {
      const dropdown = link.querySelector('.dropdown');
      
      // Toggle the dropdown visibility on click
      if (dropdown) {
        const isVisible = dropdown.style.display === 'block';
        dropdown.style.display = isVisible ? 'none' : 'block'; // Toggle display

        // Prevent the click event from propagating to avoid unwanted behavior
        event.stopPropagation();
      }
    });
  });

  // Add event listener to close dropdown when clicking outside
  document.addEventListener('click', (event) => {
    // If the click is outside the navbar, hide all dropdowns
    if (!event.target.closest('.top-navbar')) {
      const allDropdowns = document.querySelectorAll('.top-navbar ul li .dropdown');
      allDropdowns.forEach(dropdown => {
        dropdown.style.display = 'none';
      });
    }
  });
});
