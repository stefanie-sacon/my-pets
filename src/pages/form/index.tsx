import { useState } from "react"; // Importa o hook useState do React para gerenciar o estado do componente
import { Footer } from "../../components/Footer"; // Importa o componente Footer
import { Header } from "../../components/Header"; // Importa o componente Header
import "./styles.css"; // Importa o arquivo de estilos CSS

// Define a interface FormData que especifica a estrutura dos dados do formulário
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

// Define o componente Form
export const Form = () => {
  // Cria o estado formData e a função setFormData para atualizar o estado
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

  // Função para lidar com mudanças nos inputs do formulário
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target; // Extrai o nome e o valor do input alterado
    setFormData((prev) => ({ ...prev, [name]: value })); // Atualiza o estado com o novo valor
  };

  // Função para lidar com o envio do formulário
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Impede o comportamento padrão do formulário (recarregar a página)

    try {
      const response = await fetch("http://localhost:3000/pets", {
        method: "POST", // Define o método HTTP para o envio dos dados
        headers: {
          "Content-Type": "application/json", // Define o tipo de conteúdo como JSON
        },
        body: JSON.stringify(formData), // Converte o objeto formData em uma string JSON para o corpo da requisição
      });

      if (response.ok) {
        // Se a resposta for bem-sucedida (status HTTP 2xx)
        alert("Pet cadastrado com sucesso!"); // Exibe um alerta de sucesso
        // Limpa o formulário após o sucesso
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
        // Se a resposta não for bem-sucedida (status HTTP 4xx ou 5xx)
        const errorData = await response.json(); // Lê a resposta de erro do servidor
        console.error("Erro no servidor:", errorData); // Exibe o erro no console
        alert(
          "Ocorreu um erro ao cadastrar o pet. Detalhes: " + errorData.message
        ); // Exibe um alerta com detalhes do erro
      }
    } catch (error) {
      // Captura qualquer erro que ocorra durante a requisição
      console.error("Erro ao cadastrar o pet:", error); // Exibe o erro no console
      alert("Ocorreu um erro ao cadastrar o pet. Tente novamente."); // Exibe um alerta de erro genérico
    }
  };

  return (
    <>
      <Header /> {/* Renderiza o componente Header */}
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
                  {/* Status do Pet */}
                  <div className="form-group">
                    <label htmlFor="status">Status do Pet:</label>
                    <select
                      id="status"
                      name="status"
                      value={formData.status}
                      onChange={handleChange}
                    >
                      <option value="">Selecione o status do pet</option>
                      <option value="ADOPTION">Adoção</option>
                      <option value="LOST">Perdido</option>
                      <option value="LOOKING_FOR_OWNER">
                        Procurando tutor
                      </option>
                      <option value="FOUND">Encontrado</option>
                    </select>
                  </div>

                  {/* Tipo de Pet */}
                  <div className="form-group">
                    <label htmlFor="kind">Tipo de Pet:</label>
                    <select
                      id="kind"
                      name="kind"
                      value={formData.kind}
                      onChange={handleChange}
                    >
                      <option value="">Selecione o tipo de pet</option>
                      <option value="DOG">Cachorro</option>
                      <option value="CAT">Gato</option>
                      <option value="OTHER">Outro</option>
                    </select>
                  </div>
                </div>

                <div className="forms-groups">
                  {/* Nome do Pet */}
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
                  {/* URL da Imagem */}
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
                  {/* Porte do Pet */}
                  <div className="form-group">
                    <label htmlFor="size">Porte:</label>
                    <select
                      id="size"
                      name="size"
                      value={formData.size}
                      onChange={handleChange}
                    >
                      <option value="">Selecione o porte</option>
                      <option value="SMALL">Pequeno</option>
                      <option value="MEDIUM">Médio</option>
                      <option value="BIG">Grande</option>
                    </select>
                  </div>

                  {/* Raça do Pet */}
                  <div className="form-group">
                    <label htmlFor="race">Raça:</label>
                    <select
                      id="race"
                      name="race"
                      value={formData.race}
                      onChange={handleChange}
                    >
                      <option value="">Selecione a raça</option>
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
                  {/* Sexo do Pet */}
                  <div className="form-group">
                    <label htmlFor="gender">Sexo:</label>
                    <select
                      id="gender"
                      name="gender"
                      value={formData.gender}
                      onChange={handleChange}
                    >
                      <option value="">Selecione o sexo</option>
                      <option value="MALE">Macho</option>
                      <option value="FEMALE">Fêmea</option>
                    </select>
                  </div>

                  {/* Idade do Pet */}
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
                  {/* Cor do Pet */}
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

                  {/* Deficiência */}
                  <div className="form-group">
                    <label htmlFor="deficiencia">Deficiência:</label>
                    <select
                      id="deficiencia"
                      name="deficiencia"
                      value={formData.deficiencia}
                      onChange={handleChange}
                    >
                      <option value="">
                        Informe se o pet possui alguma deficiência
                      </option>
                      <option value="sim">Sim</option>
                      <option value="nao">Não</option>
                    </select>
                  </div>
                </div>

                <div className="forms-groups">
                  {/* Vacinado */}
                  <div className="form-group">
                    <label htmlFor="vacinado">Vacinado:</label>
                    <select
                      id="vacinado"
                      name="vacinado"
                      value={formData.vacinado}
                      onChange={handleChange}
                    >
                      <option value="">Informe se o pet é vacinado</option>
                      <option value="sim">Sim</option>
                      <option value="nao">Não</option>
                    </select>
                  </div>

                  {/* Castrado */}
                  <div className="form-group">
                    <label htmlFor="castrado">Castrado:</label>
                    <select
                      id="castrado"
                      name="castrado"
                      value={formData.castrado}
                      onChange={handleChange}
                    >
                      <option value="">Informe se o pet é castrado</option>
                      <option value="sim">Sim</option>
                      <option value="nao">Não</option>
                    </select>
                  </div>
                </div>

                {/* Endereço */}
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

                {/* Sobre o Pet */}
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

                {/* Botão de envio do formulário */}
                <button type="submit" className="submit-btn">
                  Cadastrar Pet
                </button>
              </fieldset>
            </form>
          </div>
        </section>
      </main>
      <Footer /> {/* Renderiza o componente Footer */}
    </>
  );
};
