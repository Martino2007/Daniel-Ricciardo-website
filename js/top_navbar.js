document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll(".top-navbar ul li a");
  const sections = document.querySelectorAll("main section");

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

  document.addEventListener("scroll", onScroll);

  // Function to hide all dropdowns
  function hideAllDropdowns() {
    const allDropdowns = document.querySelectorAll('.top-navbar ul li .dropdown');
    allDropdowns.forEach(dropdown => {
      dropdown.style.display = 'none';
    });
  }

  // Dropdown functionality on hover with nested dropdowns
  const dropdownLinks = document.querySelectorAll('.top-navbar ul li');

  dropdownLinks.forEach(link => {
    const dropdown = link.querySelector('.dropdown');

    // Show dropdown on hover
    link.addEventListener('mouseenter', () => {
      hideAllDropdowns(); // Hide any open dropdowns
      if (dropdown) dropdown.style.display = 'block'; // Show the current dropdown
    });

    // Hide dropdown on hover out
    link.addEventListener('mouseleave', () => {
      if (dropdown) dropdown.style.display = 'none';
    });
  });

  // Close all dropdowns when clicking outside
  document.addEventListener('click', (event) => {
    if (!event.target.closest('.top-navbar')) {
      hideAllDropdowns();
    }
  });
});
