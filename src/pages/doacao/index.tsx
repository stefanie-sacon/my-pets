import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import "./styles.css";

export const Doacao = () => {
  return (
    <>
      <Header />
      <main>
        <section className="doacao-page-section">
          <div className="container">
            <div className="doacao-title">
              <h2>Doação</h2>
              <p>
                As ONGs precisam da sua ajuda! <br />
                Sua doação é um gesto de amor que alimenta esperança e
                transforma vidas.
              </p>
              <p>Abaixo algumas formas que você pode ajudar:</p>
            </div>
            <div className="doacao-boxes">
              <div className="doacao-box">
                <img src="assets/img/pet-toy.png" />
                <h3>Itens Diversos</h3>
                <p>
                  Ajude doando itens para as ONGs como: coleiras, caminhas,
                  casinhas, roupinhas, brinquedos, cobertores, toalhas.
                </p>
              </div>
              <div className="doacao-box">
                <img src="assets/img/mobile-payment.png" />
                <h3>Transferência ou Pix</h3>
                <p>
                  Você pode contribuir doando qualquer valor para as ONGs via
                  Pix ou Transferência Bancária, seja solidário e faça a
                  diferença.
                </p>
              </div>
              <div className="doacao-box">
                <img src="assets/img/pet-food.png" />
                <h3>Alimentos</h3>
                <p>
                  As ONGs possuem diversos animais resgatados que precisam ser
                  alimentados. Ajude doando rações, saches, petiscos.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="doacao-ongs-section">
          <div className="container">
            <div className="doacao-ongs-boxes">
              <div className="doacao-ongs-box">
                <div className="doacao-ongs-content">
                  <h2>ONG AMA</h2>
                  <h4>Informações bancárias</h4>
                  <p>PIX: CNPJ 27.336.803/0001-78</p>
                  <p>
                    Banco: Sicoob Crediauc (756) <br />
                    Agência: 3067 <br />
                    Conta: 347302
                  </p>
                </div>
                <img src="assets/img/ong-ama.jpg" />
              </div>
              <div className="doacao-ongs-box">
                <img src="assets/img/ong-con.jpg" />

                <div className="doacao-ongs-content">
                  <h2>ONG CON ANIMAL</h2>
                  <h4>Informações bancárias</h4>
                  <p>PIX: CNPJ: 08.157.243/0001-40</p>
                  <p>
                    Banco: Sicoob Crediauc (756) <br />
                    Agência: 3067-8
                    <br />
                    Conta: 10294-6
                  </p>
                </div>
              </div>
              <div className="doacao-ongs-box">
                <div className="doacao-ongs-content">
                  <h2>ONG LAIKA</h2>
                  <h4>Informações bancárias</h4>
                  <p>PIX: CNPJ 39.532.883/0001-16</p>
                  <p>
                    Banco: Sicoob Transcredi (756) <br />
                    Agência: 3288
                    <br />
                    Conta: 32762-0
                  </p>
                </div>
                <img src="assets/img/ong-laika.jpg" />
              </div>
              <div className="doacao-ongs-box">
                <img src="assets/img/focinhocarente.jpg" />

                <div className="doacao-ongs-content">
                  <h2>FOCINHO CARENTE</h2>
                  <h4>Informações bancárias</h4>
                  <p>PIX: CPF 084.409.349-12</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};
