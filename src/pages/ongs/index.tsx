import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import "./styles.css";

export const Ongs = () => {
  return (
    <>
      <Header />
      <main>
        <section className="ongs-page-section">
          <div className="container">
            <div className="ongs-page-container">
              <div className="ongs-page-title">
                <h2>ONGs e Parceiros</h2>
                <p>
                  Conheça nossas ONGs e Parceiros dedicados à proteção e
                  bem-estar dos animais.
                </p>
                <div className="btn-anunciar">
                  <a id="btn-anunciar">Fazer parte</a>
                </div>
              </div>
              <div className="ongs-page-boxes">
                <div className="ongs-page-box">
                  <img src="/assets/img/ong-ama.jpg" />
                  <div className="ongs-page-box-content">
                    <h3>ONG Ama</h3>
                    <p>Associação Palmira Gobbi Amigos dos Animais</p>

                    <a
                      href="https://www.instagram.com/ongamaconcordia?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                      className="ongs-page-instagram"
                    >
                      <img src="/assets/img/instagram.svg" />
                      <p>ongamaconcordia</p>
                    </a>
                  </div>
                </div>

                <div className="ongs-page-box">
                  <img src="/assets/img/ong-con.jpg" />
                  <div className="ongs-page-box-content">
                    <h3>ONG Con Animal</h3>
                    <p>Sociedade Concordiense de Ajuda e Proteção Animal</p>

                    <a
                      href="https://www.instagram.com/ongconanimal?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                      className="ongs-page-instagram"
                    >
                      <img src="/assets/img/instagram.svg" />
                      <p>ongconanimal</p>
                    </a>
                  </div>
                </div>

                <div className="ongs-page-box">
                  <img src="/assets/img/ong-laika.jpg" />
                  <div className="ongs-page-box-content">
                    <h3>ONG Laika</h3>
                    <p>Laika Proteção Animal</p>

                    <a
                      href="https://www.instagram.com/onglaikaconcordia?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                      className="ongs-page-instagram"
                    >
                      <img src="/assets/img/instagram.svg" />
                      <p>onglaikaconcordia</p>
                    </a>
                  </div>
                </div>

                <div className="ongs-page-box">
                  <img src="/assets/img/focinhocarente.jpg" />
                  <div className="ongs-page-box-content">
                    <h3>Projeto Focinho Carente</h3>
                    <p>Focinho Carente Proteção e Bem-Estar Animal</p>

                    <a
                      href="https://www.instagram.com/focinhocarente.cdia?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                      className="ongs-page-instagram"
                    >
                      <img src="/assets/img/instagram.svg" />
                      <p>focinhocarente.cdia</p>
                    </a>
                  </div>
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
