import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { formatDistanceToNow } from "date-fns";
import "./styles.css";
import { Pet } from "../../models/Pet";

export const Pets = () => {
  const [pets, setPets] = useState<Pet[]>([]);

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
                <Link to="/cadastropets" id="btn-anunciar">
                  Cadastrar pet
                </Link>
              </div>
            </div>
            <div className="adocao-pets-boxes">
              {pets.map((pet) => (
                <div key={pet.id} className="pet-card">
                  <img src={pet.image_url} alt={pet.name} />
                  <h3>{pet.name}</h3>
                  <p>
                    {formatDistanceToNow(new Date(pet.created_at), {
                      addSuffix: true,
                    })}
                  </p>{" "}
                  {/* Data relativa sem prefixo */}
                  {/* Adicione outros detalhes do pet conforme necessário */}
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
