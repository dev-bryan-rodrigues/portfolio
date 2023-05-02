// Animação ao scroll

function initScrollAnim() {
  const sections = document.querySelectorAll(".js-scroll");
  const windowMetade = window.innerHeight * 0.6;

  function animarScroll() {
    sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top - windowMetade < 0;
      if (sectionTop) {
        section.classList.add("ativo");
      }
    });
  }
  animarScroll();

  window.addEventListener("scroll", animarScroll);
}
initScrollAnim();

// Navegação por tab

function initScrollNav() {
  const navs = document.querySelectorAll('a[href^="#"]');

  function scrollSection(event) {
    event.preventDefault();
    const href = event.target.getAttribute("href");
    const section = document.querySelector(href);
    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }

  navs.forEach((nav) => nav.addEventListener("click", scrollSection));
}
initScrollNav();

// Cor do Header

function activeTransparencyOnHeader() {
  //   const header = document.getElementsByTagName("header");
  const windowScroll = 0;
  window.addEventListener("scroll", () => (windowScroll = window.scrollX));
  console.log(windowScroll);
}
activeTransparencyOnHeader();
