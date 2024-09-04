import { useState } from "react";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import "./styles.css";

interface FormData {
  status: string;
  name: string;
  image_url: string;
  size: string;
  race: string;
  gender: string;
  age: string;
  color: string;
  deficiencia: string;
  vacinado: string;
  castrado: string;
  address: string;
  about: string;
  kind: string;
}

export const CadastroPets = () => {
  const [formData, setFormData] = useState<FormData>({
    status: "",
    name: "",
    image_url: "",
    size: "",
    race: "",
    gender: "",
    age: "",
    color: "",
    deficiencia: "",
    vacinado: "",
    castrado: "",
    address: "",
    about: "",
    kind: "",
  });

  const [statusSelected, setStatusSelected] = useState<boolean>(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (name === "status") {
      setStatusSelected(value !== "");
    }

    if (e.target.tagName === "SELECT") {
      if (value === "") {
        e.target.classList.add("placeholder-hidden");
      } else {
        e.target.classList.remove("placeholder-hidden");
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3000/pets", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Pet cadastrado com sucesso!");
        setFormData({
          status: "",
          name: "",
          image_url: "",
          size: "",
          race: "",
          gender: "",
          age: "",
          color: "",
          deficiencia: "",
          vacinado: "",
          castrado: "",
          address: "",
          about: "",
          kind: "",
        });
        setStatusSelected(false); // Resetar status selecionado
      } else {
        const errorData = await response.json();
        console.error("Erro no servidor:", errorData);
        alert(
          "Ocorreu um erro ao cadastrar o pet. Detalhes: " + errorData.message
        );
      }
    } catch (error) {
      console.error("Erro ao cadastrar o pet:", error);
      alert("Ocorreu um erro ao cadastrar o pet. Tente novamente.");
    }
  };

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

            <form id="pet-registration-form" onSubmit={handleSubmit}>
              <fieldset>
                <legend>Informações do Pet</legend>

                <div className="forms-groups">
                  <div className="form-group">
                    <label htmlFor="status" className="required">
                      Status do Pet:
                    </label>
                    <select
                      id="status"
                      name="status"
                      value={formData.status}
                      onChange={handleChange}
                      className={
                        formData.status === "" ? "placeholder-hidden" : ""
                      }
                      required
                    >
                      <option value="" disabled>
                        Selecione o status do pet
                      </option>
                      <option value="ADOPTION">Adoção</option>
                      <option value="LOST">Perdido</option>
                      <option value="LOOKING_FOR_OWNER">
                        Procurando tutor
                      </option>
                      <option value="FOUND" hidden>
                        Encontrado
                      </option>
                    </select>
                    {!statusSelected && (
                      <p className="info-message">
                        Selecione um status para continuar
                      </p>
                    )}
                  </div>

                  {statusSelected && (
                    <>
                      <div className="form-group">
                        <label htmlFor="kind" className="required">
                          Tipo de Pet:
                        </label>
                        <select
                          id="kind"
                          name="kind"
                          value={formData.kind}
                          onChange={handleChange}
                          className={
                            formData.kind === "" ? "placeholder-hidden" : ""
                          }
                          required
                        >
                          <option value="" disabled>
                            Selecione o tipo de pet
                          </option>
                          <option value="DOG">Cachorro</option>
                          <option value="CAT">Gato</option>
                          <option value="OTHER">Outro</option>
                        </select>
                      </div>

                      <div className="form-group">
                        <label htmlFor="name" className="required">
                          Nome:
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Informe o nome do pet"
                          required
                        />
                      </div>

                      <div className="form-group">
                        <label htmlFor="image_url" className="required">
                          URL da Imagem:
                        </label>
                        <input
                          type="url"
                          id="image_url"
                          name="image_url"
                          value={formData.image_url}
                          onChange={handleChange}
                          placeholder="Cole a URL da imagem do pet"
                          required
                        />
                      </div>

                      <div className="form-group">
                        <label htmlFor="size" className="required">
                          Porte:
                        </label>
                        <select
                          id="size"
                          name="size"
                          value={formData.size}
                          onChange={handleChange}
                          className={
                            formData.size === "" ? "placeholder-hidden" : ""
                          }
                          required
                        >
                          <option value="" disabled>
                            Selecione o porte
                          </option>
                          <option value="SMALL">Pequeno</option>
                          <option value="MEDIUM">Médio</option>
                          <option value="BIG">Grande</option>
                        </select>
                      </div>

                      <div className="form-group">
                        <label htmlFor="race">Raça:</label>
                        <select
                          id="race"
                          name="race"
                          value={formData.race}
                          onChange={handleChange}
                          className={
                            formData.race === "" ? "placeholder-hidden" : ""
                          }
                        >
                          <option value="" disabled>
                            Selecione a raça
                          </option>
                          {/* Adicione as opções de raça aqui */}
                        </select>
                      </div>

                      <div className="form-group">
                        <label htmlFor="gender" className="required">
                          Sexo:
                        </label>
                        <select
                          id="gender"
                          name="gender"
                          value={formData.gender}
                          onChange={handleChange}
                          className={
                            formData.gender === "" ? "placeholder-hidden" : ""
                          }
                          required
                        >
                          <option value="" disabled>
                            Selecione o sexo
                          </option>
                          <option value="MALE">Macho</option>
                          <option value="FEMALE">Fêmea</option>
                        </select>
                      </div>

                      <div className="form-group">
                        <label htmlFor="age">Idade:</label>
                        <input
                          type="number"
                          id="age"
                          name="age"
                          min="1"
                          value={formData.age}
                          onChange={handleChange}
                          placeholder="Idade em anos. Ex: 3"
                        />
                      </div>

                      <div className="form-group">
                        <label htmlFor="color" className="required">
                          Cor:
                        </label>
                        <input
                          type="text"
                          id="color"
                          name="color"
                          value={formData.color}
                          onChange={handleChange}
                          placeholder="Informe a cor do pet"
                          required
                        />
                      </div>

                      <div className="form-group">
                        <label htmlFor="deficiencia" className="required">
                          Deficiência:
                        </label>
                        <select
                          id="deficiencia"
                          name="deficiencia"
                          value={formData.deficiencia}
                          onChange={handleChange}
                          className={
                            formData.deficiencia === ""
                              ? "placeholder-hidden"
                              : ""
                          }
                          required
                        >
                          <option value="" disabled>
                            Informe se o pet possui alguma deficiência
                          </option>
                          <option value="true">Visão</option>
                          <option value="false">Audição</option>
                          <option value="true">Locomoção</option>
                          <option value="false">Não possui</option>
                          <option value="false">Outras</option>
                        </select>
                      </div>

                      <div className="form-group">
                        <label htmlFor="vacinado" className="required">
                          Vacinado:
                        </label>
                        <select
                          id="vacinado"
                          name="vacinado"
                          value={formData.vacinado}
                          onChange={handleChange}
                          className={
                            formData.vacinado === "" ? "placeholder-hidden" : ""
                          }
                          required
                        >
                          <option value="" disabled>
                            Informe se o pet é vacinado
                          </option>
                          <option value="true">Sim</option>
                          <option value="false">Não</option>
                          <option value="false">Parcialmente</option>
                          <option value="false">Desconhecido</option>
                          <option value="false">Não se aplica</option>
                        </select>
                      </div>

                      <div className="form-group">
                        <label htmlFor="castrado" className="required">
                          Castrado:
                        </label>
                        <select
                          id="castrado"
                          name="castrado"
                          value={formData.castrado}
                          onChange={handleChange}
                          className={
                            formData.castrado === "" ? "placeholder-hidden" : ""
                          }
                          required
                        >
                          <option value="" disabled>
                            Informe se o pet é castrado
                          </option>
                          <option value="true">Sim</option>
                          <option value="false">Não</option>
                          <option value="false">Em processo</option>
                          <option value="false">Desconhecido</option>
                          <option value="false">Não se aplica</option>
                        </select>
                      </div>

                      <div className="form-group full-width">
                        <label htmlFor="address">Endereço:</label>
                        <input
                          type="text"
                          id="address"
                          name="address"
                          value={formData.address}
                          onChange={handleChange}
                          placeholder="Informe o endereço onde o pet foi visto"
                        />
                      </div>

                      <div className="form-group full-width">
                        <label htmlFor="about">Sobre o Pet:</label>
                        <textarea
                          id="about"
                          name="about"
                          value={formData.about}
                          onChange={handleChange}
                          placeholder="Descreva informações adicionais sobre o pet"
                        />
                      </div>
                    </>
                  )}
                </div>

                <div className="forms-button">
                  <button type="submit" className="btn-submit">
                    Cadastrar
                  </button>
                </div>
              </fieldset>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};
