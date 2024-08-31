import { Link } from "react-router-dom";
import "./styles.css";

export const Login = () => {
  return (
    <main className="main">
      <div className="container-pages">
        <div>
          <div className="login-title">
            <img src="/assets/img/logo-2.png" alt="My Pet's" />
            <h2>Faça seu login</h2>
          </div>
          <form>
            <input type="email" placeholder="E-mail" required />
            <input type="password" placeholder="Senha" required />
            <button type="submit">Entrar</button>
            <div id="linea"></div>
            <div className="links-form">
              <Link to="/redefinirsenha" className="forgot-password">
                Esqueceu a senha?
              </Link>
              <Link to="/registro" className="show-register">
                Não possui conta? Cadastrar
              </Link>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
};
