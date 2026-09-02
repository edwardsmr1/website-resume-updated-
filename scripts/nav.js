document.addEventListener("DOMContentLoaded", function () {
  var navbar = document.getElementById("navbar");
  var toggle = navbar ? navbar.querySelector(".nav-toggle") : null;

  if (!navbar || !toggle) {
    return;
  }

  function closeMenu() {
    navbar.classList.remove("nav-open");
    toggle.setAttribute("aria-expanded", "false");
  }

  toggle.addEventListener("click", function () {
    var isOpen = navbar.classList.toggle("nav-open");
    toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
  });

  navbar.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
      if (window.innerWidth <= 430) {
        closeMenu();
      }
    });
  });

  window.addEventListener("resize", function () {
    if (window.innerWidth > 430) {
      closeMenu();
    }
  });
});
