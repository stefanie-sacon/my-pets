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

const petData = [
  { name: "Lupi", image: "/assets/images/pet-3.png", ong: "ONG Ama" },
  { name: "Pitoco", image: "/assets/images/pet-4.png", ong: "ONG Con Animal" },
  { name: "Pretinho", image: "/assets/images/pet-3.png", ong: "ONG Laika" },
  {
    name: "Laura",
    image: "/assets/images/pet-1.png",
    ong: "ONG Focinho Carente",
  },
  { name: "Pipoca", image: "/assets/images/pet-6.png", ong: "ONG Ama" },
  { name: "Fido", image: "/assets/images/pet-2.png", ong: "ONG Con Animal" },
  { name: "Caramelo", image: "/assets/images/pet-1.png", ong: "ONG Ama" },
  { name: "Fida", image: "/assets/images/pet-4.png", ong: "ONG Laika" },
  {
    name: "Luna",
    image: "/assets/images/pet-3.png",
    ong: "ONG Focinho Carente",
  },
  { name: "Lupa", image: "/assets/images/pet-5.png", ong: "ONG Laika" },
  { name: "Thor", image: "/assets/images/pet-6.png", ong: "ONG Ama" },
  { name: "Tufão", image: "/assets/images/pet-2.png", ong: "ONG Con Animal" },
  {
    name: "Mel",
    image: "/assets/images/pet-3.png",
    ong: "ONG Focinho Carente",
  },
  { name: "Alex", image: "/assets/images/pet-5.png", ong: "ONG Ama" },
  { name: "Lilica", image: "/assets/images/pet-4.png", ong: "ONG Laika" },
  // Adicione mais objetos de animais de estimação aqui conforme necessário
];

const petsContainer = document.querySelector(".adocao-pets-boxes");

petData.forEach((pet) => {
  const petBox = document.createElement("div");
  petBox.classList.add("adocao-pets-box");

  const petImage = document.createElement("img");
  petImage.src = pet.image;

  const petContentBox = document.createElement("div");
  petContentBox.classList.add("adocao-pets-content-box");

  const petName = document.createElement("h3");
  petName.textContent = pet.name;

  const petOng = document.createElement("p");
  petOng.textContent = pet.ong;

  petContentBox.appendChild(petName);
  petContentBox.appendChild(petOng);

  petBox.appendChild(petImage);
  petBox.appendChild(petContentBox);

  petsContainer.appendChild(petBox);
});
