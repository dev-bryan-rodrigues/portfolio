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

// Botão clicar e copiar

function initCopyEmail() {
  const btnCopy = document.getElementById("copyEmailButton");
  const textoCopiado = document.querySelector("#copyEmailButton");

  btnCopy.addEventListener("click", () => {
    // Seleciona o conteúdo do elemento a ser copiado
    const selecionado = document.createRange();
    selecionado.selectNode(textoCopiado);

    // Adiciona o conteúdo selecionado à área de transferência
    const areaDeTransferencia = window.getSelection();
    areaDeTransferencia.removeAllRanges();
    areaDeTransferencia.addRange(selecionado);

    // Copia o conteúdo selecionado para a área de transferência
    document.execCommand("copy");

    // Deseleciona o conteúdo
    areaDeTransferencia.removeAllRanges();

    // Altera o texto do botão para indicar que o conteúdo foi copiado
    btnCopy.textContent = "Email copiado!";
  });
}
initCopyEmail();
