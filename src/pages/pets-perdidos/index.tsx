import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { formatDistanceToNowStrict } from "date-fns";
import { ptBR } from "date-fns/locale";
import { getPetStatusText } from "../../utils/string";
import { Pet } from "../../models/Pet";
import { getAuth, onAuthStateChanged } from "firebase/auth";

export const PetsPerdidos = () => {
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
        // Filtrando pets com status "LOST" e "LOOKING_FOR_OWNER"
        const lostPets = data.filter(
          (pet) => pet.status === "LOST" || pet.status === "LOOKING_FOR_OWNER"
        );
        setPets(lostPets);
      })
      .catch((error) => console.error("Erro ao buscar pets:", error));
  }, []);

  const handleAnunciarClick = () => {
    if (!isAuthenticated) {
      alert("Você precisa estar logado para anunciar um pet.");
    } else {
      navigate("/cadastropets");
    }
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
                        {/* Adicione outros detalhes do pet conforme necessário */}
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
