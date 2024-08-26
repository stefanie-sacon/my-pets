import { Link } from "react-router-dom";

export const Header = () => {
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
          <Link to="/login" id="btn-entrar">
            Entrar
          </Link>
          <Link to="/pets" id="btn-adotaraqui">
            Adotar aqui
          </Link>
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
