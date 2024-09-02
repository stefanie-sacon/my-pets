import { Link } from "react-router-dom";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";

export const PetsPerdidos = () => {
  return (
    <>
      <Header />
      <main>
        <section className="pets-perdidos-section">
          <div className="container">
            <div className="pets-perdidos-container">
              <div className="pets-perdidos-title">
                <h2>Pet's perdidos</h2>
                <p>
                  Procure seu pet ou registre pets desaparecidos e ajude a
                  trazê-los de volta para casa. <br />
                  Juntos, podemos fazer a diferença!
                </p>
              </div>
              <div className="btn-anunciar">
                <Link to="/cadastropets" id="btn-anunciar">
                  Anunciar aqui
                </Link>
              </div>
              <div className="pets-perdidos-boxes"></div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};
