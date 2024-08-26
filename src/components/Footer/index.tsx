import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer>
      <Link to="/">
        <img
          className="logo-img"
          src="/assets/img/logo-2.png"
          alt="Logo My Pets"
        />
      </Link>
      <p>© 2024 - Todos os direitos reservados.</p>
    </footer>
  );
};
