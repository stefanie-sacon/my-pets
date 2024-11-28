import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { formatDistanceToNowStrict } from "date-fns";
import { ptBR } from "date-fns/locale";
import { getPetStatusText } from "../../utils/string";
import { Pet, PetStatus } from "../../models/Pet";

export const PetsPerdidos = () => {
  const [pets] = useState<Pet[]>([
    {
      id: "7d307592-b344-48e2-819e-cf3b4f4521fd",
      status: PetStatus.LOST,
      ngo_id: null,
      image_url: "https://ccz.sjc.sp.gov.br/imagens/animais/2749_1.jpg",
      name: "Fred",
      age: 4,
      size: "MEDIUM",
      gender: "MALE",
      kind: "DOG",
      race: "LHASA_APSO",
      color: "Castanho",
      disability: "NOT_APPLICABLE",
      vaccinated: "YES",
      neutered: "YES",
      address: "Travessa Guilherme, 55",
      about: null,
      created_at: "2024-11-28T00:14:19.238Z",
    },
    {
      id: "a75dba07-2c6f-43f4-a22d-59131fcd6f35",
      status: PetStatus.LOOKING_FOR_OWNER,
      ngo_id: null,
      image_url:
        "https://campinas.com.br/wp-content/uploads/2024/09/unnamed-35-e1725918843417.jpg",
      name: "Sem nome",
      age: 0,
      size: "MEDIUM",
      gender: "MALE",
      kind: "DOG",
      race: "SRD",
      color: null,
      disability: "NOT_APPLICABLE",
      vaccinated: "UNKNOWN",
      neutered: "UNKNOWN",
      address: "Rua Marcelino Ramos",
      about: null,
      created_at: "2024-11-23T00:15:59.431Z",
    },
    {
      id: "04752fe8-5f29-4224-8981-a3ec71a29698",
      status: PetStatus.LOST,
      ngo_id: null,
      image_url:
        "https://optimumpet.com.br/media/uploads/2023/11/racas-de-cachorro-pequeno-chihuahua-01-1024x682.webp",
      name: "Tobby",
      age: 0,
      size: "SMALL",
      gender: "MALE",
      kind: "DOG",
      race: "UNKNOWN",
      color: null,
      disability: "UNKNOWN",
      vaccinated: "UNKNOWN",
      neutered: "UNKNOWN",
      address: "Rua Espanha, 23",
      about: null,
      created_at: "2024-10-05T00:21:03.171Z",
    },
    {
      id: "a75dba07-2c6f-43f4-a22d-59131fcd6f35",
      status: PetStatus.LOST,
      ngo_id: null,
      image_url: "https://www.vale.com/documents/d/guest/_u1a3696-jpg",
      name: "Mel",
      age: 0,
      size: "MEDIUM",
      gender: "MALE",
      kind: "DOG",
      race: "SRD",
      color: null,
      disability: "NOT_APPLICABLE",
      vaccinated: "UNKNOWN",
      neutered: "UNKNOWN",
      address: "Rua 29 de Julho",
      about: null,
      created_at: "2024-08-05T00:15:59.431Z",
    },
    {
      id: "a75dba07-2c6f-43f4-a22d-59131fcd6f35",
      status: PetStatus.LOOKING_FOR_OWNER,
      ngo_id: null,
      image_url:
        "https://saladeimprensa.vale.com/documents/d/guest/_u1a9788-jpg",
      name: "Sem nome",
      age: 0,
      size: "MEDIUM",
      gender: "MALE",
      kind: "DOG",
      race: "SRD",
      color: null,
      disability: "NOT_APPLICABLE",
      vaccinated: "UNKNOWN",
      neutered: "UNKNOWN",
      address: "Bairro Santa Rita",
      about: null,
      created_at: "2024-06-05T00:15:59.431Z",
    },
    {
      id: "a75dba07-2c6f-43f4-a22d-59131fcd6f35",
      status: PetStatus.LOOKING_FOR_OWNER,
      ngo_id: null,
      image_url:
        "https://s2-g1.glbimg.com/dXjuFl4QYkkfy9yySOyfUAHF-50=/0x0:800x450/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2023/3/H/Ztg9DnSreAl1P1Xjxm5Q/feira-pet.jpg",
      name: "Sem nome",
      age: 0,
      size: "MEDIUM",
      gender: "MALE",
      kind: "DOG",
      race: "SRD",
      color: null,
      disability: "NOT_APPLICABLE",
      vaccinated: "UNKNOWN",
      neutered: "UNKNOWN",
      address: "Bairro Natureza",
      about: null,
      created_at: "2024-05-05T00:15:59.431Z",
    },
    {
      id: "a75dba07-2c6f-43f4-a22d-59131fcd6f35",
      status: PetStatus.LOST,
      ngo_id: null,
      image_url:
        "https://static.wixstatic.com/media/e2e4ef_5b261f8d855045fba5f61882c8e9e8e3~mv2.jpg/v1/fill/w_648,h_636,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Loiro-gato-para-adocao_PatinhasCarentes_.jpg",
      name: "Xerife",
      age: 0,
      size: "MEDIUM",
      gender: "MALE",
      kind: "DOG",
      race: "SRD",
      color: null,
      disability: "NOT_APPLICABLE",
      vaccinated: "UNKNOWN",
      neutered: "UNKNOWN",
      address: "Mercado Caitá",
      about: null,
      created_at: "2024-04-22T00:15:59.431Z",
    },
    {
      id: "a75dba07-2c6f-43f4-a22d-59131fcd6f35",
      status: PetStatus.LOOKING_FOR_OWNER,
      ngo_id: null,
      image_url:
        "https://static.wixstatic.com/media/e2e4ef_138d020469d24bf59c2520525eb320e2~mv2.jpeg/v1/fill/w_648,h_636,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Loiro-gato-para-adocao_PatinhasCarentes_.jpeg",
      name: "Sem nome",
      age: 0,
      size: "MEDIUM",
      gender: "MALE",
      kind: "DOG",
      race: "SRD",
      color: null,
      disability: "NOT_APPLICABLE",
      vaccinated: "UNKNOWN",
      neutered: "UNKNOWN",
      address: "Centro",
      about: null,
      created_at: "2024-02-28T00:13:59.431Z",
    },
    {
      id: "a75dba07-2c6f-43f4-a22d-59131fcd6f35",
      status: PetStatus.LOST,
      ngo_id: null,
      image_url:
        "https://fly.metroimg.com/upload/q_85,w_700/https://uploads.metroimg.com/wp-content/uploads/2024/03/29114436/4-curiosidades-sobre-vira-latas-tipo-de-cao-que-protegeu-bebe-fujao.jpg",
      name: "Lupi",
      age: 0,
      size: "MEDIUM",
      gender: "MALE",
      kind: "DOG",
      race: "SRD",
      color: null,
      disability: "NOT_APPLICABLE",
      vaccinated: "UNKNOWN",
      neutered: "UNKNOWN",
      address: "Rodoviária de Concórdia",
      about: null,
      created_at: "2024-01-22T00:12:59.431Z",
    },
  ]);
  const navigate = useNavigate();

  const handleAnunciarClick = () => {
    navigate("/cadastropets");
  };

  return (
    <>
      <Header />
      <main>
        <section className="pets-perdidos-section">
          <div className="container">
            <div className="pets-perdidos-container">
              <div className="pets-perdidos-title">
                <h2>Pets Perdidos</h2>
                <p>
                  Procure seu pet ou registre pets desaparecidos e ajude a
                  trazê-los de volta para casa. <br />
                  Juntos, podemos fazer a diferença!
                </p>
              </div>
              <div className="btn-anunciar">
                <button id="btn-anunciar" onClick={handleAnunciarClick}>
                  Anunciar aqui
                </button>
              </div>
              <div className="pets-perdidos-boxes">
                {pets.map((pet) => (
                  <div key={pet.id} className="pet-card">
                    <img
                      src={pet.image_url}
                      alt={pet.name || "Imagem do pet"}
                    />

                    <div className="pet-card-content">
                      <div className="pet-card-content-title">
                        <h3>{pet.name || "Sem nome"}</h3>
                        <p>{getPetStatusText(pet.status)}</p>
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
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};
