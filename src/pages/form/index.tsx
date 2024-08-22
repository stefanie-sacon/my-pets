import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import "./styles.css";

export const Form = () => {
  return (
    <>
      <Header />
      <main>
        <section className="form-section">
          <div className="container">
            <div className="form-title">
              <h2>
                Cadastro de Pet's <br />
                Adoção e Mural de Pet's Perdidos
              </h2>
            </div>

            <form id="pet-registration-form">
              <fieldset>
                <legend>Informações do Pet</legend>

                <div className="form-group">
                  <label htmlFor="status">Status do Pet:</label>
                  <select
                    id="status"
                    name="status"
                    placeholder="Selecione o status do pet"
                  >
                    <option value="adocao">Adoção</option>
                    <option value="perdido">Perdido</option>
                    <option value="procurando-tutor">Procurando tutor</option>
                    <option value="encontrado">Encontrado</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="name">Nome:</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Informe o nome do pet"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="image_url">URL da Imagem:</label>
                  <input
                    type="url"
                    id="image_url"
                    name="image_url"
                    placeholder="Cole a URL da imagem do pet"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="size">Porte:</label>
                  <select id="size" name="size" placeholder="Selecione o porte">
                    <option value="pequeno">Pequeno</option>
                    <option value="medio">Médio</option>
                    <option value="grande">Grande</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="gender">Sexo:</label>
                  <select
                    id="gender"
                    name="gender"
                    placeholder="Selecione o sexo"
                  >
                    <option value="macho">Fêmea</option>
                    <option value="femea">Macho</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="race">Raça:</label>
                  <select id="race" name="race" placeholder="Selecione a raça">
                    <option value="bulldog">Bulldog</option>
                    <option value="dachshund">Dachshund</option>
                    <option value="golden-retriever">Golden Retriever</option>
                    <option value="labrador">Labrador</option>
                    <option value="lhasa-apso">Lhasa Apso</option>
                    <option value="pastor-alemao">Pastor Alemão</option>
                    <option value="pinscher">Pinscher</option>
                    <option value="pitbull">Pit Bull</option>
                    <option value="poodle">Poodle</option>
                    <option value="pug">Pug</option>
                    <option value="rottweiler">Rottweiler</option>
                    <option value="shih-tzu">Shih-tzu</option>
                    <option value="srd">SRD (Sem raça definida)</option>
                    <option value="yorkshire">Yorkshire</option>
                    <option value="outro">Outro</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="age">Idade (aproximada):</label>
                  <input
                    type="number"
                    id="age"
                    name="age"
                    min="1"
                    placeholder="Idade em anos. Ex: 3"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="color">Cor:</label>
                  <input
                    type="text"
                    id="color"
                    name="color"
                    placeholder="Ex: Marrom, preto e branco"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="address">Endereço:</label>
                  <textarea
                    id="address"
                    name="address"
                    placeholder="Onde o pet foi encontrado ou visto pela última vez"
                  ></textarea>
                </div>
                <div className="form-group">
                  <label htmlFor="about">Sobre:</label>
                  <textarea
                    id="about"
                    name="about"
                    placeholder="Observações sobre o pet"
                  ></textarea>
                </div>
              </fieldset>
              <div className="button-form">
                <button id="btn-cadastrar" type="submit">
                  Cadastrar Pet
                </button>
              </div>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};
