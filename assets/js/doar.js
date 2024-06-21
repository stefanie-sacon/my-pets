// Adiciona um listener para quando o DOM estiver carregado completamente
document.addEventListener("DOMContentLoaded", function () {
  // Seleciona os elementos necessários
  const toggleCheckbox = document.getElementById("toggleChecker");
  const toggleLabel = document.getElementById("togglerLable");
  const navegacao = document.querySelector("nav");
  const listaNavegacao = document.querySelector("nav ul");

  // Adiciona um listener para o checkbox de alternar menu
  toggleCheckbox.addEventListener("change", function () {
    if (toggleCheckbox.checked) {
      // Exibe a lista de navegação
      listaNavegacao.classList.add("show");
    } else {
      // Oculta a lista de navegação
      listaNavegacao.classList.remove("show");
    }
  });
});
