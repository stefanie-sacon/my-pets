import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { ptBR } from "date-fns/locale";
import "./styles.css";
import { Pet, PetStatus } from "../../models/Pet";
import { formatDistanceToNowStrict } from "date-fns/formatDistanceToNowStrict";

export const Pets = () => {
  const [pets] = useState<Pet[]>([
    {
      id: "8032c151-6a84-461c-a5f7-8ea5b41e12ae",
      status: PetStatus.ADOPTION,
      ngo_id: null,
      image_url:
        "https://img.odcdn.com.br/wp-content/uploads/2023/04/Vira-lata-caramelo.jpg",
      name: "Caramelo",
      age: 0,
      size: "MEDIUM",
      gender: "MALE",
      kind: "DOG",
      race: null,
      color: null,
      disability: "NOT_APPLICABLE",
      vaccinated: "UNKNOWN",
      neutered: "UNKNOWN",
      address: "ONG Con Animal",
      about: null,
      created_at: "2024-09-04T23:56:49.181Z",
    },
    {
      id: "1c01a274-850c-445b-9353-34df8140953c",
      status: PetStatus.ADOPTION,
      ngo_id: null,
      image_url:
        "https://www.vilavelha.es.gov.br/adocaodeanimais/fotos/WhatsApp%20Image%202024-08-30%20at%2011.22.36.jpeg",
      name: "Lupi",
      age: 4,
      size: "MEDIUM",
      gender: "MALE",
      kind: "DOG",
      race: "LHASA_APSO",
      color: "Castanho",
      disability: "NOT_APPLICABLE",
      vaccinated: "YES",
      neutered: "YES",
      address: "ONG Laika",
      about: "Lindo e perfeito",
      created_at: "2024-09-05T00:10:37.142Z",
    },
    {
      id: "1c01a274-850c-445b-9353-34df8140953c",
      status: PetStatus.ADOPTION,
      ngo_id: null,
      image_url:
        "https://www.acidadeon.com/araraquara/wp-content/uploads/sites/4/2024/01/Sabado-tem-Campanha-de-Adocao-de-Animais-Especial-Filhotes.jpg",
      name: "Pitoco",
      age: 4,
      size: "MEDIUM",
      gender: "MALE",
      kind: "DOG",
      race: "LHASA_APSO",
      color: "Castanho",
      disability: "NOT_APPLICABLE",
      vaccinated: "YES",
      neutered: "YES",
      address: "Projeto Focinho Carente",
      about: "Lindo e perfeito",
      created_at: "2024-09-05T00:10:37.142Z",
    },
    {
      id: "1c01a274-850c-445b-9353-34df8140953c",
      status: PetStatus.ADOPTION,
      ngo_id: null,
      image_url:
        "https://www.policiacivil.go.gov.br/wp-content/uploads/2023/04/whatsapp-image-2023-04-15-at-10.56.40-1.jpeg",
      name: "Lola",
      age: 4,
      size: "MEDIUM",
      gender: "MALE",
      kind: "DOG",
      race: "LHASA_APSO",
      color: "Castanho",
      disability: "NOT_APPLICABLE",
      vaccinated: "YES",
      neutered: "YES",
      address: "ONG Con Animal",
      about: "Lindo e perfeito",
      created_at: "2024-09-05T00:10:37.142Z",
    },
    {
      id: "1c01a274-850c-445b-9353-34df8140953c",
      status: PetStatus.ADOPTION,
      ngo_id: null,
      image_url:
        "https://imagens.usp.br/wp-content/uploads/Festival-Jaya_Feira-Ado%C3%A7%C3%A3o_231-18_Foto-Cec%C3%ADlia-Bastos-220.jpg",
      name: "Lucky",
      age: 4,
      size: "MEDIUM",
      gender: "MALE",
      kind: "DOG",
      race: "LHASA_APSO",
      color: "Castanho",
      disability: "NOT_APPLICABLE",
      vaccinated: "YES",
      neutered: "YES",
      address: "ONG Ama",
      about: "Lindo e perfeito",
      created_at: "2024-09-05T00:10:37.142Z",
    },
    {
      id: "1c01a274-850c-445b-9353-34df8140953c",
      status: PetStatus.ADOPTION,
      ngo_id: null,
      image_url:
        "https://www.reporterdiario.com.br/wp-content/uploads/2024/03/Design-sem-nome.png",
      name: "Simba",
      age: 4,
      size: "MEDIUM",
      gender: "MALE",
      kind: "DOG",
      race: "LHASA_APSO",
      color: "Castanho",
      disability: "NOT_APPLICABLE",
      vaccinated: "YES",
      neutered: "YES",
      address: "ONG Laika",
      about: "Lindo e perfeito",
      created_at: "2024-09-05T00:10:37.142Z",
    },
    {
      id: "1c01a274-850c-445b-9353-34df8140953c",
      status: PetStatus.ADOPTION,
      ngo_id: null,
      image_url:
        "https://www.petelegante.com.br/media/dicas/ado%C3%A7%C3%A3o-de-cachorro-filhote.jpg",
      name: "Zeus",
      age: 4,
      size: "MEDIUM",
      gender: "MALE",
      kind: "DOG",
      race: "LHASA_APSO",
      color: "Castanho",
      disability: "NOT_APPLICABLE",
      vaccinated: "YES",
      neutered: "YES",
      address: "Projeto Focinho Carente",
      about: "Lindo e perfeito",
      created_at: "2024-09-05T00:10:37.142Z",
    },
    {
      id: "1c01a274-850c-445b-9353-34df8140953c",
      status: PetStatus.ADOPTION,
      ngo_id: null,
      image_url: "https://ccz.sjc.sp.gov.br/imagens/animais/2502_1.jpg",
      name: "Juca",
      age: 4,
      size: "MEDIUM",
      gender: "MALE",
      kind: "DOG",
      race: "LHASA_APSO",
      color: "Castanho",
      disability: "NOT_APPLICABLE",
      vaccinated: "YES",
      neutered: "YES",
      address: "ONG Ama",
      about: "Lindo e perfeito",
      created_at: "2024-09-05T00:10:37.142Z",
    },
  ]);
  const navigate = useNavigate();

  const handleCadastroClick = () => {
    navigate("/cadastropets");
  };

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
                <button id="btn-anunciar" onClick={handleCadastroClick}>
                  Cadastrar pet
                </button>
              </div>
            </div>
            <div className="adocao-pets-boxes">
              {pets.map((pet) => (
                <div key={pet.id} className="pet-card">
                  <img src={pet.image_url} alt={pet.name ?? "Pet"} />
                  <div className="pet-card-content">
                    <div className="pet-card-content-title">
                      <h3>{pet.name || "Sem nome"}</h3>
                    </div>
                    <div className="pet-card-content-text">
                      <p>{pet.address}</p>

                      <p>
                        {formatDistanceToNowStrict(new Date(pet.created_at), {
                          addSuffix: true,
                          locale: ptBR,
                        })
                          .replace("há ", "")
                          .replace("em ", "") + " atrás"}
                      </p>
                      {/* Adicione outros detalhes do pet conforme necessário */}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};
