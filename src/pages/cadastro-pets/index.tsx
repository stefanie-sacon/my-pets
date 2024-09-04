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

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
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
                    <label htmlFor="status">Status do Pet:</label>
                    <select
                      id="status"
                      name="status"
                      value={formData.status}
                      onChange={handleChange}
                    >
                      <option value="" disabled>
                        Selecione o status do pet
                      </option>
                      <option value="ADOPTION">Adoção</option>
                      <option value="LOST">Perdido</option>
                      <option value="LOOKING_FOR_OWNER">
                        Procurando tutor
                      </option>
                      <option value="FOUND">Encontrado</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="kind">Tipo de Pet:</label>
                    <select
                      id="kind"
                      name="kind"
                      value={formData.kind}
                      onChange={handleChange}
                    >
                      <option value="" disabled>
                        Selecione o tipo de pet
                      </option>
                      <option value="DOG">Cachorro</option>
                      <option value="CAT">Gato</option>
                      <option value="OTHER">Outro</option>
                    </select>
                  </div>
                </div>

                <div className="forms-groups">
                  <div className="form-group">
                    <label htmlFor="name">Nome:</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Informe o nome do pet"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="image_url">URL da Imagem:</label>
                    <input
                      type="url"
                      id="image_url"
                      name="image_url"
                      value={formData.image_url}
                      onChange={handleChange}
                      placeholder="Cole a URL da imagem do pet"
                    />
                  </div>
                </div>

                <div className="forms-groups">
                  <div className="form-group">
                    <label htmlFor="size">Porte:</label>
                    <select
                      id="size"
                      name="size"
                      value={formData.size}
                      onChange={handleChange}
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
                    >
                      <option value="" disabled>
                        Selecione a raça
                      </option>
                      <option value="BULLDOG">Bulldog</option>
                      <option value="DACHSHUND">Dachshund</option>
                      <option value="GOLDEN_RETRIEVER">Golden Retriever</option>
                      <option value="LABRADOR">Labrador</option>
                      <option value="LHASA_APSO">Lhasa Apso</option>
                      <option value="PASTOR_ALEMAO">Pastor Alemão</option>
                      <option value="PINSCHER">Pinscher</option>
                      <option value="PIT_BULL">Pit Bull</option>
                      <option value="POODLE">Poodle</option>
                      <option value="PUG">Pug</option>
                      <option value="ROTTWEILER">Rottweiler</option>
                      <option value="SHIH_TZU">Shih-tzu</option>
                      <option value="SRD">SRD (Sem raça definida)</option>
                      <option value="YORKSHIRE">Yorkshire</option>
                      <option value="OTHER">Outro</option>
                    </select>
                  </div>
                </div>

                <div className="forms-groups">
                  <div className="form-group">
                    <label htmlFor="gender">Sexo:</label>
                    <select
                      id="gender"
                      name="gender"
                      value={formData.gender}
                      onChange={handleChange}
                    >
                      <option value="" disabled>
                        Selecione o sexo
                      </option>
                      <option value="MALE">Macho</option>
                      <option value="FEMALE">Fêmea</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="age">Idade (aproximada):</label>
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
                </div>

                <div className="forms-groups">
                  <div className="form-group">
                    <label htmlFor="color">Cor:</label>
                    <input
                      type="text"
                      id="color"
                      name="color"
                      value={formData.color}
                      onChange={handleChange}
                      placeholder="Ex: Marrom, preto e branco"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="deficiencia">Deficiência:</label>
                    <select
                      id="deficiencia"
                      name="deficiencia"
                      value={formData.deficiencia}
                      onChange={handleChange}
                    >
                      <option value="" disabled>
                        Informe se o pet possui alguma deficiência
                      </option>
                      <option value="sim">Sim</option>
                      <option value="nao">Não</option>
                    </select>
                  </div>
                </div>

                <div className="forms-groups">
                  <div className="form-group">
                    <label htmlFor="vacinado">Vacinado:</label>
                    <select
                      id="vacinado"
                      name="vacinado"
                      value={formData.vacinado}
                      onChange={handleChange}
                    >
                      <option value="" disabled>
                        Informe se o pet é vacinado
                      </option>
                      <option value="sim">Sim</option>
                      <option value="nao">Não</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="castrado">Castrado:</label>
                    <select
                      id="castrado"
                      name="castrado"
                      value={formData.castrado}
                      onChange={handleChange}
                    >
                      <option value="" disabled>
                        Informe se o pet é castrado
                      </option>
                      <option value="sim">Sim</option>
                      <option value="nao">Não</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
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

                <div className="form-group">
                  <label htmlFor="about">Sobre o Pet:</label>
                  <textarea
                    id="about"
                    name="about"
                    value={formData.about}
                    onChange={handleChange}
                    placeholder="Descreva o pet ou a situação"
                  />
                </div>

                <div className="forms-groups">
                  <button type="submit" className="submit-btn">
                    Cadastrar Pet
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
