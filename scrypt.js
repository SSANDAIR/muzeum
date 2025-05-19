document.addEventListener("DOMContentLoaded", () => {
    const animatedSections = document.querySelectorAll(".animate-on-scroll");
  
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const section = entry.target;
          section.querySelectorAll(".hidden").forEach((el, index) => {
            setTimeout(() => {
              el.classList.add("visible");
            }, index * 600); // Задержка по элементу
          });
          observer.unobserve(section); // Запускаем один раз
        }
      });
    }, {
      threshold: 0.3
    });
  
    animatedSections.forEach(section => {
      observer.observe(section);
    });
  });
  
  
  
  function onScrollFadeIn() {
    const elements = document.querySelectorAll('.fade-in');
    elements.forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight - 100) {
        el.classList.add('visible');
      }
    });
  }
  
  window.addEventListener('scroll', onScrollFadeIn);
  window.addEventListener('load', onScrollFadeIn);
  


  function onScrollFadeIn() {
    const elements = document.querySelectorAll('.fade-in');
    elements.forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight - 100) {
        el.classList.add('visible');
      }
    });
  }
  window.addEventListener('scroll', onScrollFadeIn);
  window.addEventListener('load', onScrollFadeIn);
  


  document.addEventListener("DOMContentLoaded", function () {
    const navbarToggler = document.querySelector(".navbar-toggler");
    const navbarCollapse = document.getElementById("navbarNav");
    const navLinks = document.querySelectorAll(".nav-link");

    navbarToggler.addEventListener("click", function () {
      navbarCollapse.classList.toggle("show");
    });

    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        if (window.innerWidth < 992 && navbarCollapse.classList.contains("show")) {
          navbarCollapse.classList.remove("show");
        }
      });
    });
  });


  AOS.init({
    duration: 900,
    once: true,
    easing: 'ease-in-out'
  });