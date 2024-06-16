function obterPorteTitulo(porte) {
  const titulos = {
    ["SMALL"]: "Pequeno",
    ["MEDIUM"]: "Médio",
    ["BIG"]: "Grande",
  };
  return titulos[porte];
}

// Função para preencher os cards dos pets
async function preencherCardsPets() {
  const petsData = await (await fetch("http://localhost:3000/pets")).json();
  const petCarousel = document.getElementById("petCarousel");

  // Limpar o conteúdo atual
  petCarousel.innerHTML = "";

  // Loop pelos dados dos pets
  petsData.forEach((pet) => {
    // Criar um novo item de lista (li)
    const listItem = document.createElement("li");
    listItem.classList.add("card");

    // Concatenar o restante do HTML do card
    const cardHTML = `
      <div class="img">
        <img src="${pet.imagem}" alt="img" draggable="false" />
      </div>
      <h2>${pet.name}</h2>
      <div class="info">
        <p><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
        <path
          fill="#4b5a68"
          d="M128 0c17.7 0 32 14.3 32 32V64H288V32c0-17.7 14.3-32 32-32s32 14.3 32 32V64h48c26.5 0 48 21.5 48 48v48H0V112C0 85.5 21.5 64 48 64H96V32c0-17.7 14.3-32 32-32zM0 192H448V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V192zm64 80v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm128 0v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H208c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H336zM64 400v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H208zm112 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H336c-8.8 0-16 7.2-16 16z"
        />
      </svg> Idade: ${pet.age} anos</p>
        <p><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
        <path
          fill="#4b5a68"
          d="M226.5 92.9c14.3 42.9-.3 86.2-32.6 96.8s-70.1-15.6-84.4-58.5s.3-86.2 32.6-96.8s70.1 15.6 84.4 58.5zM100.4 198.6c18.9 32.4 14.3 70.1-10.2 84.1s-59.7-.9-78.5-33.3S-2.7 179.3 21.8 165.3s59.7 .9 78.5 33.3zM69.2 401.2C121.6 259.9 214.7 224 256 224s134.4 35.9 186.8 177.2c3.6 9.7 5.2 20.1 5.2 30.5v1.6c0 25.8-20.9 46.7-46.7 46.7c-11.5 0-22.9-1.4-34-4.2l-88-22c-15.3-3.8-31.3-3.8-46.6 0l-88 22c-11.1 2.8-22.5 4.2-34 4.2C84.9 480 64 459.1 64 433.3v-1.6c0-10.4 1.6-20.8 5.2-30.5zM421.8 282.7c-24.5-14-29.1-51.7-10.2-84.1s54-47.3 78.5-33.3s29.1 51.7 10.2 84.1s-54 47.3-78.5 33.3zM310.1 189.7c-32.3-10.6-46.9-53.9-32.6-96.8s52.1-69.1 84.4-58.5s46.9 53.9 32.6 96.8s-52.1 69.1-84.4 58.5z"
        />
      </svg> Porte: ${obterPorteTitulo(pet.size)}</p>
     </div>
    `;

    // Definir o HTML do card no item de lista
    listItem.innerHTML = cardHTML;

    // Adicionar o item de lista ao carrossel
    petCarousel.appendChild(listItem);
  });
}

// Chamar a função para preencher os cards dos pets ao carregar a página
preencherCardsPets();

const petsPerdidos = [
  {
    nome: "Bela",
    imagem: "assets/images/pet-4.png",
    bairro: "Loteamento Lorenzett",
    status: "Desaparecido",
  },
  {
    nome: "Sem nome",
    imagem: "assets/images/pet-1.png",
    bairro: "Bairro Natureza",
    status: "Procura-se dono",
  },
  {
    nome: "Fred",
    imagem: "assets/images/pet-6.png",
    bairro: "Bairro Santa Rita",
    status: "Desaparecido",
  },
  {
    nome: "Sem nome",
    imagem: "assets/images/pet-2.png",
    bairro: "Bairro Santa Cruz",
    status: "Procura-se dono",
  },
  {
    nome: "Luna",
    imagem: "assets/images/pet-3.png",
    bairro: "Bairro dos Estados",
    status: "Desaparecido",
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

// Seleciona os elementos do carrossel
const container = document.querySelector(".wrapper");
const carrossel = document.querySelector(".carousel");
const larguraPrimeiroCard = carrossel.querySelector(".card").offsetWidth;
const botoesSeta = document.querySelectorAll(".wrapper i");
const elementosCarrossel = [...carrossel.children]; // Converte para array

let estaSendoArrastado = false,
  autoplayHabilitado = true,
  posicaoInicialX,
  scrollEsquerdaInicial,
  idTimeout;

// Define o número de cards que cabem no carrossel por vez
let cardsPorVisivel = Math.round(carrossel.offsetWidth / larguraPrimeiroCard);

// Adiciona cópias dos últimos cards no início para simular infinito
elementosCarrossel
  .slice(-cardsPorVisivel)
  .reverse()
  .forEach((card) => {
    carrossel.insertAdjacentHTML("afterbegin", card.outerHTML);
  });

// Adiciona cópias dos primeiros cards no final para simular infinito
elementosCarrossel.slice(0, cardsPorVisivel).forEach((card) => {
  carrossel.insertAdjacentHTML("beforeend", card.outerHTML);
});

// Corrige deslocamento inicial em Firefox
carrossel.classList.add("no-transition");
carrossel.scrollLeft = carrossel.offsetWidth;
carrossel.classList.remove("no-transition");

// Adiciona listeners para os botões de seta
botoesSeta.forEach((btn) => {
  btn.addEventListener("click", () => {
    carrossel.scrollLeft +=
      btn.id === "left" ? -larguraPrimeiroCard : larguraPrimeiroCard;
  });
});

const iniciarArrastar = (e) => {
  estaSendoArrastado = true;
  carrossel.classList.add("dragging");
  // Captura a posição inicial do cursor e scroll do carrossel
  posicaoInicialX = e.pageX;
  scrollEsquerdaInicial = carrossel.scrollLeft;
};

const arrastando = (e) => {
  if (!estaSendoArrastado) return;
  // Atualiza a posição do scroll baseado no movimento do cursor
  carrossel.scrollLeft = scrollEsquerdaInicial - (e.pageX - posicaoInicialX);
};

const pararArrastar = () => {
  estaSendoArrastado = false;
  carrossel.classList.remove("dragging");
};

const scrollInfinito = () => {
  // Se o carrossel estiver no início, move para o final
  if (carrossel.scrollLeft === 0) {
    carrossel.classList.add("no-transition");
    carrossel.scrollLeft = carrossel.scrollWidth - 2 * carrossel.offsetWidth;
    carrossel.classList.remove("no-transition");
  }
  // Se o carrossel estiver no final, move para o início
  else if (
    Math.ceil(carrossel.scrollLeft) ===
    carrossel.scrollWidth - carrossel.offsetWidth
  ) {
    carrossel.classList.add("no-transition");
    carrossel.scrollLeft = carrossel.offsetWidth;
    carrossel.classList.remove("no-transition");
  }

  // Limpa timeout existente e inicia autoplay se mouse não estiver sobre o carrossel
  clearTimeout(idTimeout);
  if (!container.matches(":hover")) autoPlay();
};

const autoPlay = () => {
  if (window.innerWidth < 800 || !autoplayHabilitado) return;
  // Inicia autoplay a cada 2.5 segundos
  idTimeout = setTimeout(
    () => (carrossel.scrollLeft += larguraPrimeiroCard),
    2500
  );
};

autoPlay(); // Inicia autoplay na inicialização

// Adiciona listeners para eventos de mouse no carrossel
carrossel.addEventListener("mousedown", iniciarArrastar);
carrossel.addEventListener("mousemove", arrastando);
document.addEventListener("mouseup", pararArrastar);
carrossel.addEventListener("scroll", scrollInfinito);
container.addEventListener("mouseenter", () => clearTimeout(idTimeout));
container.addEventListener("mouseleave", autoPlay);
