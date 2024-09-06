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
  disability: string;
  vaccinated: string;
  neutered: string;
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
    disability: "",
    vaccinated: "",
    neutered: "",
    address: "",
    about: "",
    kind: "",
  });

  const [races, setRaces] = useState<string[]>([]);

  const dogBreeds = [
    "Beagle",
    "Boxer",
    "Chihuahua",
    "Cocker Spaniel",
    "Golden Retriever",
    "Labrador",
    "Lhasa Apso",
    "Maltês",
    "Pinscher",
    "Poodle",
    "Pug",
    "Rottweiler",
    "Shih Tzu",
    "Husky Siberiano",
    "Yorkshire",
    "Outra",
  ];

  const catBreeds = [
    "Abissínio",
    "American Shorthair",
    "Bengal",
    "British Shorthair",
    "Maine Coon",
    "Persa",
    "Ragdoll",
    "Siamês",
    "Sphynx",
    "Scottish Fold",
    "Angorá Turco",
    "Outra",
  ];

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (name === "kind") {
      if (value === "DOG") {
        setRaces(dogBreeds);
      } else if (value === "CAT") {
        setRaces(catBreeds);
      } else {
        setRaces([]);
      }
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

    const requiredFields = ["status", "kind"];

    let hasErrors = false;

    requiredFields.forEach((field) => {
      const inputElement = document.getElementById(field) as
        | HTMLInputElement
        | HTMLSelectElement;

      if (!inputElement || formData[field as keyof FormData] === "") {
        if (inputElement) {
          inputElement.classList.add("input-error");
        }
        hasErrors = true;
      } else {
        inputElement.classList.remove("input-error");
      }
    });

    if (hasErrors) {
      alert("Por favor, preencha todos os campos obrigatórios.");
      return;
    }

    try {
      const sanitizedFormData = Object.keys(formData).reduce((acc, key) => {
        acc[key] =
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          (formData as any)[key] === "" ? null : (formData as any)[key];
        return acc;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      }, {} as any);

      const response = await fetch("http://localhost:3000/pets", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(sanitizedFormData),
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
          disability: "",
          vaccinated: "",
          neutered: "",
          address: "",
          about: "",
          kind: "",
        });
        setRaces([]);
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

  const isInitialFormComplete = formData.status !== "" && formData.kind !== "";

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
                      <option value="FOUND" disabled>
                        Encontrado
                      </option>
                    </select>
                  </div>

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
                    </select>
                  </div>

                  {!isInitialFormComplete && (
                    <div className="info-message">
                      <p>
                        Selecione o status e o tipo do pet para continuar
                        preenchendo o formulário.
                      </p>
                    </div>
                  )}

                  {isInitialFormComplete && (
                    <>
                      <div className="form-group">
                        <label htmlFor="name">Nome:</label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Deixe em branco caso não tenha nome ou não saiba"
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
                          required
                          placeholder="https://exemplo.com/imagem.jpg"
                        />
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
                            Selecione a raça do pet
                          </option>
                          <option value="UNKNOWN">Desconhecido</option>
                          <option value="SRD">SRD (Sem Raça Definida)</option>
                          {races.map((breed) => (
                            <option key={breed} value={breed}>
                              {breed}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div className="form-group">
                        <label htmlFor="size" className="required">
                          Tamanho do Pet:
                        </label>
                        <select
                          id="size"
                          name="size"
                          value={formData.size}
                          onChange={handleChange}
                          required
                          className={
                            formData.size === "" ? "placeholder-hidden" : ""
                          }
                        >
                          <option value="" disabled>
                            Selecione o tamanho do pet
                          </option>
                          <option value="SMALL">Pequeno</option>
                          <option value="MEDIUM">Médio</option>
                          <option value="LARGE">Grande</option>
                        </select>
                      </div>

                      <div className="form-group">
                        <label htmlFor="gender" className="required">
                          Gênero:
                        </label>
                        <select
                          id="gender"
                          name="gender"
                          value={formData.gender}
                          onChange={handleChange}
                          required
                          className={
                            formData.gender === "" ? "placeholder-hidden" : ""
                          }
                        >
                          <option value="" disabled>
                            Selecione o gênero do pet
                          </option>
                          <option value="MALE">Macho</option>
                          <option value="FEMALE">Fêmea</option>
                          <option value="UNKNOWN">Desconhecido</option>
                        </select>
                      </div>

                      <div className="form-group">
                        <label htmlFor="age">Idade:</label>
                        <input
                          type="text"
                          id="age"
                          name="age"
                          value={formData.age}
                          onChange={handleChange}
                          placeholder="Idade em anos. Ex: 3"
                        />
                      </div>

                      <div className="form-group">
                        <label htmlFor="color">Cor:</label>
                        <input
                          type="text"
                          id="color"
                          name="color"
                          value={formData.color}
                          onChange={handleChange}
                          placeholder="Informe a cor do pet"
                        />
                      </div>

                      <div className="form-group">
                        <label htmlFor="disability" className="required">
                          Deficiência:
                        </label>
                        <select
                          id="disability"
                          name="disability"
                          value={formData.disability}
                          onChange={handleChange}
                          required
                          className={
                            formData.disability === ""
                              ? "placeholder-hidden"
                              : ""
                          }
                        >
                          <option value="" disabled>
                            Informe se o pet possui alguma deficiência
                          </option>
                          <option value="NONE">Nenhuma</option>
                          <option value="BLIND">Cego</option>
                          <option value="DEAF">Surdo</option>
                          <option value="OTHER">Outra</option>
                        </select>
                      </div>

                      <div className="form-group">
                        <label htmlFor="vaccinated" className="required">
                          Vacinado:
                        </label>
                        <select
                          id="vaccinated"
                          name="vaccinated"
                          value={formData.vaccinated}
                          onChange={handleChange}
                          required
                          className={
                            formData.vaccinated === ""
                              ? "placeholder-hidden"
                              : ""
                          }
                        >
                          <option value="" disabled>
                            Informe se o pet é vacinado
                          </option>
                          <option value="YES">Sim</option>
                          <option value="NO">Não</option>
                          <option value="UNKNOWN">Desconhecido</option>
                        </select>
                      </div>

                      <div className="form-group">
                        <label htmlFor="neutered" className="required">
                          Castrado:
                        </label>
                        <select
                          id="neutered"
                          name="neutered"
                          value={formData.neutered}
                          onChange={handleChange}
                          required
                          className={
                            formData.neutered === "" ? "placeholder-hidden" : ""
                          }
                        >
                          <option value="" disabled>
                            Informe se o pet é castrado
                          </option>
                          <option value="YES">Sim</option>
                          <option value="NO">Não</option>
                          <option value="UNKNOWN">Desconhecido</option>
                        </select>
                      </div>

                      {/* Ajustando o endereço e observações para cada um ocupar uma linha horizontal */}
                      <div className="form-group full-width">
                        <label htmlFor="address" className="required">
                          Localização:
                        </label>
                        <input
                          type="text"
                          id="address"
                          name="address"
                          value={formData.address}
                          onChange={handleChange}
                          required
                          placeholder="Informe endereço ou ponto de referência"
                        />
                      </div>

                      <div className="form-group full-width">
                        <label htmlFor="about">Observações:</label>
                        <textarea
                          id="about"
                          name="about"
                          value={formData.about}
                          onChange={handleChange}
                          placeholder="Descreva informações ou características sobre o pet"
                        />
                      </div>
                    </>
                  )}
                </div>
              </fieldset>

              <div className="button-container">
                <button type="submit" className="btn-submit">
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
