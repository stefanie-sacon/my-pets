import { Link } from "react-router-dom";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import "./styles.css";

export const Pets = () => {
  return (
    <>
      <Header />
      <main>
        <section className="adocao-pets-section">
          <div className="container">
            <div className="adocao-title">
              <h2>Pet's para adoção</h2>
              <p>
                Uma seção especial de peludinhos que buscam um novo lar. <br />
                Se interessou por algum? Entre em contato com a ONG para dar
                continuidade a adoção do seu novo aumigo.
              </p>
              <div className="btn-anunciar">
                <Link to="/cadastro" id="btn-anunciar">
                  Cadastrar pet
                </Link>
              </div>
            </div>
            <div className="adocao-pets-boxes"></div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};
