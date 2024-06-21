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

const petsPerdidos = [
  {
    nome: "Bela",
    imagem: "/assets/images/pet-4.png",
    bairro: "Loteamento Lorenzett",
    status: "Desaparecido",
  },
  {
    nome: "Sem nome",
    imagem: "/assets/images/pet-1.png",
    bairro: "Bairro Natureza",
    status: "Procura-se dono",
  },
  {
    nome: "Fred",
    imagem: "/assets/images/pet-6.png",
    bairro: "Bairro Santa Rita",
    status: "Desaparecido",
  },
  {
    nome: "Sem nome",
    imagem: "/assets/images/pet-2.png",
    bairro: "Bairro Santa Cruz",
    status: "Procura-se dono",
  },
  {
    nome: "Luna",
    imagem: "/assets/images/pet-3.png",
    bairro: "Bairro dos Estados",
    status: "Desaparecido",
  },
  {
    nome: "Fred",
    imagem: "/assets/images/pet-6.png",
    bairro: "Bairro Santa Rita",
    status: "Desaparecido",
  },
  {
    nome: "Sem nome",
    imagem: "/assets/images/pet-2.png",
    bairro: "Bairro Santa Cruz",
    status: "Procura-se dono",
  },
  {
    nome: "Luna",
    imagem: "/assets/images/pet-3.png",
    bairro: "Bairro dos Estados",
    status: "Desaparecido",
  },
  {
    nome: "Fred",
    imagem: "/assets/images/pet-6.png",
    bairro: "Bairro Santa Rita",
    status: "Desaparecido",
  },
  {
    nome: "Sem nome",
    imagem: "/assets/images/pet-2.png",
    bairro: "Bairro Santa Cruz",
    status: "Procura-se dono",
  },
  {
    nome: "Fred",
    imagem: "/assets/images/pet-6.png",
    bairro: "Bairro Santa Rita",
    status: "Desaparecido",
  },
  {
    nome: "Sem nome",
    imagem: "/assets/images/pet-2.png",
    bairro: "Bairro Santa Cruz",
    status: "Procura-se dono",
  },

  // Adicione mais objetos pet aqui
];

const petsPerdidosBoxes = document.querySelector(".pets-perdidos-boxes");

function gerarPetPerdido(pet) {
  const petBox = document.createElement("div");
  petBox.classList.add("pets-perdidos-box");

  const petImg = document.createElement("img");
  petImg.src = pet.imagem;
  petBox.appendChild(petImg);

  const petContent = document.createElement("div");
  petContent.classList.add("pets-perdidos-content");

  const petNome = document.createElement("h3");
  petNome.textContent = pet.nome;
  petContent.appendChild(petNome);

  const petHero = document.createElement("div");
  petHero.classList.add("pets-perdidos-hero");

  const petBairro = document.createElement("p");
  petBairro.textContent = pet.bairro;
  petHero.appendChild(petBairro);

  const petStatus = document.createElement("span");
  petStatus.classList.add(
    pet.status === "Desaparecido" ? "pet-desaparecido" : "pet-procurase"
  );
  petStatus.textContent = pet.status;
  petHero.appendChild(petStatus);

  petContent.appendChild(petHero);
  petBox.appendChild(petContent);

  return petBox;
}

petsPerdidos.forEach((pet) => {
  const petBox = gerarPetPerdido(pet);
  petsPerdidosBoxes.appendChild(petBox);
});
