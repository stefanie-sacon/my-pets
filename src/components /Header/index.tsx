export const Header = () => {
  return (
    <header className="container">
      <nav>
        <img
          className="logo-img"
          src="/assets/img/logo-2.png"
          alt="Logo My Pets"
        />

        <ul>
          <li>
            <a href="index.html" id="home-nav-active">
              Home
            </a>
          </li>
          <li>
            <a href="/pages/adocao-de-pets.html">Pet's</a>
          </li>
          <li>
            <a href="/pages/doar.html">Doar</a>
          </li>
          <li>
            <a href="/pages/pets-perdidos.html">Pet's Perdidos</a>
          </li>
          <li>
            <a href="/pages/ongs.html">ONGs/Parceiros</a>
          </li>
        </ul>

        <div className="buttons-nav">
          <a href="#" id="btn-entrar">
            Entrar
          </a>
          <a href="/pages/adocao-de-pets.html" id="btn-adotaraqui">
            Adotar aqui
          </a>
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
