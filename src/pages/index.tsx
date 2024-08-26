import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Link } from "react-router-dom";

export const Index = () => {
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
              <ul className="carousel" id="petCarousel"></ul>
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
                <Link to="/cadastro" id="btn-anunciar">
                  Anunciar aqui
                </Link>
              </div>
              <div className="pets-perdidos-boxes"></div>
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
