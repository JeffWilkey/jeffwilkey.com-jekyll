let navLinks = document.getElementsByClassName('navbar-links')[0];

function toggleBurger(x) {
  x.classList.toggle("change");
  navLinks.classList.toggle("visible");
}