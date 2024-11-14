document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll(".top-navbar ul li a");
  const sections = document.querySelectorAll("main section");

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

  function hideAllDropdowns() {
    const allDropdowns = document.querySelectorAll('.top-navbar ul li .dropdown');
    allDropdowns.forEach(dropdown => {
      dropdown.style.display = 'none';
    });
  }

  const dropdownLinks = document.querySelectorAll('.top-navbar ul li');

  dropdownLinks.forEach(link => {
    const dropdown = link.querySelector('.dropdown');

    link.addEventListener('mouseenter', () => {
      hideAllDropdowns(); 
      if (dropdown) dropdown.style.display = 'block';
    });

    link.addEventListener('mouseleave', () => {
      if (dropdown) dropdown.style.display = 'none';
    });
  });

  document.addEventListener('click', (event) => {
    if (!event.target.closest('.top-navbar')) {
      hideAllDropdowns();
    }
  });
});
