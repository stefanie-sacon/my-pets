import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { auth } from "../../services/firebase"; // Certifique-se que o caminho esteja correto
import {
  IconUserCircle,
  IconLogout,
  IconEdit,
  IconDog,
} from "@tabler/icons-react"; // Ícones do Tabler

export const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Monitora o estado de autenticação do Firebase
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setIsLoggedIn(!!user);
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, []);

  const handleLogout = () => {
    auth.signOut().then(() => {
      setIsLoggedIn(false);
      navigate("/login");
    });
  };

  return (
    <header className="container">
      <nav>
        <Link to="/">
          <img
            className="logo-img"
            src="/assets/img/logo-2.png"
            alt="Logo My Pets"
          />
        </Link>

        <ul>
          <li>
            <Link to="/" id="home-nav-active">
              Home
            </Link>
          </li>
          <li>
            <Link to="/pets">Pet's</Link>
          </li>
          <li>
            <Link to="/doacao">Doar</Link>
          </li>
          <li>
            <Link to="/petsperdidos">Pet's Perdidos</Link>
          </li>
          <li>
            <Link to="/ongs">ONGs/Parceiros</Link>
          </li>
        </ul>

        <div className="buttons-nav">
          <Link to="/pets" id="btn-adotaraqui">
            Adotar aqui
          </Link>
          {isLoggedIn ? (
            <div className="profile-dropdown">
              <IconUserCircle
                strokeWidth={1.5}
                color="var(--primary)"
                size={42}
                className="profile-icon"
              />
              <div className="dropdown-content">
                <Link to="/meuspets">
                  <IconDog size={20} /> Meus Pets
                </Link>
                <Link to="/editarperfil">
                  <IconEdit size={20} /> Editar
                </Link>
                <button onClick={handleLogout}>
                  <IconLogout size={20} /> Sair
                </button>
              </div>
            </div>
          ) : (
            <Link to="/login" id="btn-entrar">
              Entrar
            </Link>
          )}
        </div>

        <input id="toggleChecker" type="checkbox" />
        <label id="togglerLable" htmlFor="toggleChecker">
          <div className="checkboxtoggler">
            <div className="line-1"></div>
            <div className="line-2"></div>
            <div className="line-3"></div>
          </div>
        </label>
      </nav>
    </header>
  );
};
