import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { ptBR } from "date-fns/locale";
import "./styles.css";
import { Pet } from "../../models/Pet";
import { formatDistanceToNowStrict } from "date-fns/formatDistanceToNowStrict";
import { getAuth, onAuthStateChanged } from "firebase/auth";

export const Pets = () => {
  const [pets, setPets] = useState<Pet[]>([]);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const navigate = useNavigate();

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setIsAuthenticated(!!user);
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    fetch("http://localhost:3000/pets") // Substitua pela URL do seu backend
      .then((response) => response.json())
      .then((data: Pet[]) => {
        // Filtrando pets com status "ADOPTION"
        const adoptionPets = data.filter((pet) => pet.status === "ADOPTION");
        setPets(adoptionPets);
      })
      .catch((error) => console.error("Erro ao buscar pets:", error));
  }, []);

  const handleCadastroClick = () => {
    if (!isAuthenticated) {
      alert("Você precisa estar logado para cadastrar um pet.");
    } else {
      navigate("/cadastropets");
    }
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
                  <img src={pet.image_url} alt={pet.name} />
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
