document.addEventListener("DOMContentLoaded", function () {
  let currentPage = window.location.pathname.split("/").pop();
  const navLinks = document.querySelectorAll(".nav-link");

  navLinks.forEach(link => {
    const href = link.getAttribute("href");
    if (href === currentPage) {
      link.classList.add("active");
    }
  });
});


document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("formulario-contacto");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      alert("¡Gracias por contactarnos! Te responderemos pronto.");
      form.reset();
    });
  }
});
