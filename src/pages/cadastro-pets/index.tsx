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

    const requiredFields = [
      "status",
      "image_url",
      "size",
      "kind",
      "gender",
      "disability",
      "vaccinated",
      "neutered",
      "address",
    ];

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
        setStatusSelected(false);
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
                      <option value="FOUND" disabled>
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
                            Selecione o porte do pet
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
                            Selecione a raça do pet
                          </option>
                          <option value="UNKNOWN">Desconhecido</option>
                          <option value="SRD">SRD (Sem Raça Definida)</option>
                          <option value="ABYSSINIAN">Abissínio</option>
                          <option value="AMERICAN_SHORTHAIR">
                            American Shorthair
                          </option>
                          <option value="BEAGLE">Beagle</option>
                          <option value="BENGAL">Bengal</option>
                          <option value="BOXER">Boxer</option>
                          <option value="BRITISH_SHORTHAIR">
                            British Shorthair
                          </option>
                          <option value="CHIHUAHUA">Chihuahua</option>
                          <option value="COCKER_SPANIEL">Cocker Spaniel</option>
                          <option value="DACHSHUND">Dachshund</option>
                          <option value="GOLDEN_RETRIEVER">
                            Golden Retriever
                          </option>
                          <option value="LABRADOR">Labrador</option>
                          <option value="LHASA_APSO">Lhasa Apso</option>
                          <option value="MALTESE">Maltês</option>
                          <option value="MANX">Manx</option>
                          <option value="MAINE_COON">Maine Coon</option>
                          <option value="NORMAN">Norman</option>
                          <option value="PERSIAN">Persa</option>
                          <option value="PINSCHER">Pinscher</option>
                          <option value="POODLE">Poodle</option>
                          <option value="PUG">Pug</option>
                          <option value="RAGDOLL">Ragdoll</option>
                          <option value="ROTTWEILER">Rottweiler</option>
                          <option value="SCOTTISH_FOLD">Scottish Fold</option>
                          <option value="SHIH_TZU">Shih Tzu</option>
                          <option value="SIAMESE">Siamês</option>
                          <option value="SPHYNX">Sphynx</option>
                          <option value="SPITZ_ALEMAO">Spitz Alemão</option>
                          <option value="SIBERIAN_HUSKY">
                            Husky Siberiano
                          </option>
                          <option value="TURKISH_ANGORA">Angorá Turco</option>
                          <option value="YORKSHIRE">Yorkshire</option>
                          <option value="OTHER">Outra</option>
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
                            Selecione o sexo do pet
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
                          className={
                            formData.disability === ""
                              ? "placeholder-hidden"
                              : ""
                          }
                          required
                        >
                          <option value="" disabled>
                            Informe se o pet possui alguma deficiência
                          </option>
                          <option value="NOT_APPLICABLE">Não possui</option>
                          <option value="HEARING">Audição</option>
                          <option value="LOCOMOTION">Locomoção</option>
                          <option value="VISION">Visual</option>
                          <option value="UNKNOWN">Desconhecido</option>
                          <option value="OTHERS">Outras</option>
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
                          className={
                            formData.vaccinated === ""
                              ? "placeholder-hidden"
                              : ""
                          }
                          required
                        >
                          <option value="" disabled>
                            Informe se o pet é vacinado
                          </option>
                          <option value="YES">Sim</option>
                          <option value="NO">Não</option>
                          <option value="PARTIALLY">Parcialmente</option>
                          <option value="UNKNOWN">Desconhecido</option>
                          <option value="NOT_APPLICABLE">Não se aplica</option>
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
                          className={
                            formData.neutered === "" ? "placeholder-hidden" : ""
                          }
                          required
                        >
                          <option value="" disabled>
                            Informe se o pet é castrado
                          </option>
                          <option value="YES">Sim</option>
                          <option value="NO">Não</option>
                          <option value="IN_PROCESS">Em processo</option>
                          <option value="UNKNOWN">Desconhecido</option>
                          <option value="NOT_APPLICABLE">Não se aplica</option>
                        </select>
                      </div>

                      <div className="form-group full-width">
                        <label htmlFor="address" className="required">
                          Endereço:
                        </label>
                        <input
                          type="text"
                          id="address"
                          name="address"
                          value={formData.address}
                          onChange={handleChange}
                          placeholder="Informe o endereço onde o pet foi visto"
                          required
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
