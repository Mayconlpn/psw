
  document.addEventListener("DOMContentLoaded", function () {
    const menuButton = document.querySelector(".menu");
    const header = document.querySelector(".cabecalho");
    const links = document.querySelectorAll(".menu-links a");

    // Toggle da classe "abrir" ao clicar no botão
    menuButton.addEventListener("click", function () {
      header.classList.toggle("abrir");
    });

    // Fecha o menu ao clicar em qualquer link
    links.forEach(link => {
      link.addEventListener("click", function () {
        header.classList.remove("abrir");
      });
    });
  });
