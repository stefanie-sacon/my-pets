import { Link, useNavigate } from "react-router-dom";
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

export const Index = () => {
  const navigate = useNavigate();

  const handleAnunciarClick = () => {
    navigate("/cadastropets");
  };

  return (
    <>
      <Header />
      <main>
        <section className="hero-section">
          <div className="container">
            <div className="hero-content">
              <h1>
                O maior ato de <span>amor</span> é dar um lar a quem <br />
                mais <span>precisa</span>
              </h1>
              <p>
                O pet que você procura para alegrar sua família está aqui.{" "}
                <br />
                Adote um pet e mude uma vida!
              </p>

              <Link id="btn-adotar" to="/pets">
                Quero adotar
              </Link>
            </div>
          </div>
        </section>

        <section>
          <div className="container">
            <div className="question-container">
              <div className="question-content">
                <h2>Por que adotar?</h2>
              </div>
              <div className="question-boxes">
                <div className="question-box">
                  <img src="assets/img/pet-adopt.svg" />
                  <h3>Salva vidas</h3>
                  <p>
                    Ao adotar um animal de estimação, você está dando a ele uma
                    segunda chance e salvando uma vida. Muitos animais estão à
                    espera de um lar amoroso.
                  </p>
                </div>
                <div className="question-box">
                  <img src="assets/img/pet-shelter.svg" />
                  <h3>Combate o abandono</h3>
                  <p>
                    Escolher adotar um pet em um abrigo ao invés de comprá-lo,
                    você ajuda a reduzir o número de animais abandonados e
                    negligenciados.
                  </p>
                </div>
                <div className="question-box">
                  <img src="assets/img/pet-love.svg" />
                  <h3>Amor incondicional</h3>
                  <p>
                    Os animais de estimação oferecem amor incondicional. Eles se
                    tornam parte da família e trazem alegria e companheirismo
                    para o lar.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="pets-container">
          <div className="pets-content">
            <h2>Pet's à espera de um lar amoroso</h2>
          </div>
          <div className="pets-boxes">
            <div className="wrapper">
              <IconArrowLeft className="arrow-icon" />
              <ul className="carousel" id="petCarousel">
                <li className="card">
                  <div className="img">
                    <img
                      src="assets/img/pet-11.webp"
                      alt="img"
                      draggable="false"
                    />
                  </div>
                  <h2>Fred</h2>
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                    >
                      <path
                        fill="#4b5a68"
                        d="M128 0c17.7 0 32 14.3 32 32V64H288V32c0-17.7 14.3-32 32-32s32 14.3 32 32V64h48c26.5 0 48 21.5 48 48v48H0V112C0 85.5 21.5 64 48 64H96V32c0-17.7 14.3-32 32-32zM0 192H448V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V192zm64 80v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm128 0v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H208c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H336zM64 400v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H208zm112 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H336c-8.8 0-16 7.2-16 16z"
                      />
                    </svg>
                    <span> Idade: 2 anos</span>
                  </div>
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <path
                        fill="#4b5a68"
                        d="M226.5 92.9c14.3 42.9-.3 86.2-32.6 96.8s-70.1-15.6-84.4-58.5s.3-86.2 32.6-96.8s70.1 15.6 84.4 58.5zM100.4 198.6c18.9 32.4 14.3 70.1-10.2 84.1s-59.7-.9-78.5-33.3S-2.7 179.3 21.8 165.3s59.7 .9 78.5 33.3zM69.2 401.2C121.6 259.9 214.7 224 256 224s134.4 35.9 186.8 177.2c3.6 9.7 5.2 20.1 5.2 30.5v1.6c0 25.8-20.9 46.7-46.7 46.7c-11.5 0-22.9-1.4-34-4.2l-88-22c-15.3-3.8-31.3-3.8-46.6 0l-88 22c-11.1 2.8-22.5 4.2-34 4.2C84.9 480 64 459.1 64 433.3v-1.6c0-10.4 1.6-20.8 5.2-30.5zM421.8 282.7c-24.5-14-29.1-51.7-10.2-84.1s54-47.3 78.5-33.3s29.1 51.7 10.2 84.1s-54 47.3-78.5 33.3zM310.1 189.7c-32.3-10.6-46.9-53.9-32.6-96.8s52.1-69.1 84.4-58.5s46.9 53.9 32.6 96.8s-52.1 69.1-84.4 58.5z"
                      />
                    </svg>
                    <span> Porte: Pequeno</span>
                  </div>
                </li>
                <li className="card">
                  <div className="img">
                    <img
                      src="assets/img/pet-8.jpeg"
                      alt="img"
                      draggable="false"
                    />
                  </div>
                  <h2>Luna</h2>
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                    >
                      <path
                        fill="#4b5a68"
                        d="M128 0c17.7 0 32 14.3 32 32V64H288V32c0-17.7 14.3-32 32-32s32 14.3 32 32V64h48c26.5 0 48 21.5 48 48v48H0V112C0 85.5 21.5 64 48 64H96V32c0-17.7 14.3-32 32-32zM0 192H448V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V192zm64 80v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm128 0v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H208c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H336zM64 400v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H208zm112 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H336c-8.8 0-16 7.2-16 16z"
                      />
                    </svg>
                    <span> Idade: 3 meses</span>
                  </div>
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <path
                        fill="#4b5a68"
                        d="M226.5 92.9c14.3 42.9-.3 86.2-32.6 96.8s-70.1-15.6-84.4-58.5s.3-86.2 32.6-96.8s70.1 15.6 84.4 58.5zM100.4 198.6c18.9 32.4 14.3 70.1-10.2 84.1s-59.7-.9-78.5-33.3S-2.7 179.3 21.8 165.3s59.7 .9 78.5 33.3zM69.2 401.2C121.6 259.9 214.7 224 256 224s134.4 35.9 186.8 177.2c3.6 9.7 5.2 20.1 5.2 30.5v1.6c0 25.8-20.9 46.7-46.7 46.7c-11.5 0-22.9-1.4-34-4.2l-88-22c-15.3-3.8-31.3-3.8-46.6 0l-88 22c-11.1 2.8-22.5 4.2-34 4.2C84.9 480 64 459.1 64 433.3v-1.6c0-10.4 1.6-20.8 5.2-30.5zM421.8 282.7c-24.5-14-29.1-51.7-10.2-84.1s54-47.3 78.5-33.3s29.1 51.7 10.2 84.1s-54 47.3-78.5 33.3zM310.1 189.7c-32.3-10.6-46.9-53.9-32.6-96.8s52.1-69.1 84.4-58.5s46.9 53.9 32.6 96.8s-52.1 69.1-84.4 58.5z"
                      />
                    </svg>
                    <span> Porte: Médio</span>
                  </div>
                </li>
                <li className="card">
                  <div className="img">
                    <img
                      src="assets/img/pet-12.jpg"
                      alt="img"
                      draggable="false"
                    />
                  </div>
                  <h2>Max</h2>
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                    >
                      <path
                        fill="#4b5a68"
                        d="M128 0c17.7 0 32 14.3 32 32V64H288V32c0-17.7 14.3-32 32-32s32 14.3 32 32V64h48c26.5 0 48 21.5 48 48v48H0V112C0 85.5 21.5 64 48 64H96V32c0-17.7 14.3-32 32-32zM0 192H448V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V192zm64 80v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm128 0v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H208c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H336zM64 400v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H208zm112 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H336c-8.8 0-16 7.2-16 16z"
                      />
                    </svg>
                    <span> Idade: 5 anos</span>
                  </div>
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <path
                        fill="#4b5a68"
                        d="M226.5 92.9c14.3 42.9-.3 86.2-32.6 96.8s-70.1-15.6-84.4-58.5s.3-86.2 32.6-96.8s70.1 15.6 84.4 58.5zM100.4 198.6c18.9 32.4 14.3 70.1-10.2 84.1s-59.7-.9-78.5-33.3S-2.7 179.3 21.8 165.3s59.7 .9 78.5 33.3zM69.2 401.2C121.6 259.9 214.7 224 256 224s134.4 35.9 186.8 177.2c3.6 9.7 5.2 20.1 5.2 30.5v1.6c0 25.8-20.9 46.7-46.7 46.7c-11.5 0-22.9-1.4-34-4.2l-88-22c-15.3-3.8-31.3-3.8-46.6 0l-88 22c-11.1 2.8-22.5 4.2-34 4.2C84.9 480 64 459.1 64 433.3v-1.6c0-10.4 1.6-20.8 5.2-30.5zM421.8 282.7c-24.5-14-29.1-51.7-10.2-84.1s54-47.3 78.5-33.3s29.1 51.7 10.2 84.1s-54 47.3-78.5 33.3zM310.1 189.7c-32.3-10.6-46.9-53.9-32.6-96.8s52.1-69.1 84.4-58.5s46.9 53.9 32.6 96.8s-52.1 69.1-84.4 58.5z"
                      />
                    </svg>
                    <span> Porte: Grande</span>
                  </div>
                </li>
              </ul>
              <IconArrowRight className="arrow-icon" />
            </div>
          </div>
          <div className="div-btn-vertodos">
            <Link id="btn-vertodos" to="/pets">
              Ver todos
            </Link>
          </div>
        </section>

        <section className="donate-section">
          <div className="container">
            <div className="donate-container-boxes">
              <img id="donate-img" src="assets/img/donate-pet-abstract.png" />

              <div className="donate-boxes">
                <div className="donate-content-title">
                  <h2>Por que ajudar?</h2>
                  <p>
                    Assim como adotar, ajudar através de doações é uma forma
                    poderosa de fazer a diferença na vida dos animais
                    necessitados.
                  </p>
                </div>
                <div className="donate-box">
                  <img src="assets/img/h1-donate.svg" />
                  <p>
                    Sua doação pode ser a diferença para um animal abandonado
                    enfrentando fome e frio nas ruas.
                  </p>
                </div>

                <div className="donate-box">
                  <img src="assets/img/h2-donate.svg" />
                  <p>
                    Ao fazer uma doação em dinheiro ou doar itens essenciais,
                    você ajuda as ONGs a fornecer cuidados básicos e
                    emergenciais para os animais.
                  </p>
                </div>

                <div className="donate-box">
                  <img src="assets/img/h3-donate.svg" />
                  <p>
                    Cada centavo doado contribui, seja para pagar por
                    tratamentos médicos, comprar comida ou fornecer abrigo
                    temporário.
                  </p>
                </div>

                <div className="donate-box">
                  <img src="assets/img/h4-donate.svg" />
                  <p>
                    Ao doar, você se torna parte de uma comunidade dedicada a
                    fazer do mundo um lugar melhor. Sua doação inspira outros a
                    agirem em prol do bem-estar animal.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="pets-perdidos-section">
          <div className="container">
            <div className="pets-perdidos-container">
              <div className="pets-perdidos-title">
                <h2>Pet's perdidos</h2>
                <p>Seu pet desapareceu, ou encontrou um pet perdido?</p>
              </div>
              <div className="btn-anunciar">
                <button id="btn-anunciar" onClick={handleAnunciarClick}>
                  Anunciar aqui
                </button>
              </div>
              <div className="pets-perdidos-boxes">
                <div className="pets-perdidos-box">
                  <img src="assets/img/pet-1.png" />
                  <div className="pets-perdidos-content">
                    <h3>Niko</h3>
                    <div className="pets-perdidos-hero">
                      <p>Rua 29 de Julho</p>
                      <span className="pet-desaparecido">Desaparecido</span>
                    </div>
                  </div>
                </div>
                <div className="pets-perdidos-box">
                  <img src="assets/img/pet-2.png" />
                  <div className="pets-perdidos-content">
                    <h3>Sem nome</h3>
                    <div className="pets-perdidos-hero">
                      <p>Hodierna</p>
                      <span className="pet-procurase">Procura-se tutor</span>
                    </div>
                  </div>
                </div>
                <div className="pets-perdidos-box">
                  <img src="assets/img/pet-3.png" />
                  <div className="pets-perdidos-content">
                    <h3>Sem nome</h3>
                    <div className="pets-perdidos-hero">
                      <p>Centro</p>
                      <span className="pet-procurase">Procura-se tutor</span>
                    </div>
                  </div>
                </div>
                <div className="pets-perdidos-box">
                  <img src="assets/img/pet-4.png" />
                  <div className="pets-perdidos-content">
                    <h3>Fred</h3>
                    <div className="pets-perdidos-hero">
                      <p>Rua Espanha</p>
                      <span className="pet-desaparecido">Desaparecido</span>
                    </div>
                  </div>
                </div>
                <div className="pets-perdidos-box">
                  <img src="assets/img/pet-5.png" />
                  <div className="pets-perdidos-content">
                    <h3>Sem nome</h3>
                    <div className="pets-perdidos-hero">
                      <p>Centro</p>
                      <span className="pet-procurase">Procura-se tutor</span>
                    </div>
                  </div>
                </div>
                <div className="pets-perdidos-box">
                  <img src="assets/img/pet-6.png" />
                  <div className="pets-perdidos-content">
                    <h3>Toby</h3>
                    <div className="pets-perdidos-hero">
                      <p>Bairro Nações</p>
                      <span className="pet-desaparecido">Desaparecido</span>
                    </div>
                  </div>
                </div>
                <div className="pets-perdidos-box">
                  <img src="assets/img/pet-7.webp" />
                  <div className="pets-perdidos-content">
                    <h3>Lola</h3>
                    <div className="pets-perdidos-hero">
                      <p>Rua Marcelino Ramos</p>
                      <span className="pet-desaparecido">Desaparecido</span>
                    </div>
                  </div>
                </div>
                <div className="pets-perdidos-box">
                  <img src="assets/img/pet-10.jpg" />
                  <div className="pets-perdidos-content">
                    <h3>Perigo</h3>
                    <div className="pets-perdidos-hero">
                      <p>Bairro Natureza</p>
                      <span className="pet-desaparecido">Desaparecido</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="div-btn-vertodos">
              <Link id="btn-vertodos" to="/petsperdidos">
                Ver todos
              </Link>
            </div>
          </div>
        </section>

        <section className="ongs-section">
          <div className="container">
            <div className="ongs-title">
              <h2>ONGs e Parceiros</h2>
            </div>
            <div className="ongs-boxes">
              <div className="ong-box">
                <img src="assets/img/ong-ama.jpg" alt="ONG Ama" />
                <Link to="/ongs">Ver Informações</Link>
              </div>
              <div className="ong-box">
                <img src="assets/img/ong-con.jpg" alt="ONG Con Animal" />
                <Link to="/ongs">Ver Informações</Link>
              </div>
              <div className="ong-box">
                <img src="assets/img/ong-laika.jpg" alt="ONG Laika" />
                <Link to="/ongs">Ver Informações</Link>
              </div>
              <div className="ong-box">
                <img
                  src="assets/img/focinhocarente.jpg"
                  alt="Projeto Focinho Carente"
                />
                <Link to="/ongs">Ver Informações</Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};
