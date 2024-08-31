import { Link } from "react-router-dom";
import "./styles.css";

export const Registro = () => {
  return (
    <main className="main">
      <div className="container-register">
        <div className="form-section-register" id="register-form">
          <div className="login-title">
            <img src="/assets/img/logo-2.png" alt="My Pet's" />
            <h2>Faça seu cadastro</h2>
          </div>
          <form>
            <div className="inputs-form">
              <div className="input-form">
                <input type="text" placeholder="Nome" required />
                <input type="text" placeholder="Sobrenome" required />
              </div>
              <div className="input-form">
                <input type="email" placeholder="E-mail" required />
                <input type="tel" placeholder="Telefone" required />
              </div>
              <div className="input-form">
                <input type="password" placeholder="Senha" required />
                <input type="password" placeholder="Repita a senha" required />
              </div>
            </div>

            <button type="submit">Cadastrar</button>
            <div id="linea"></div>
            <div className="links-form">
              <Link to="/redefinirsenha" className="forgot-password">
                Esqueceu a senha?
              </Link>
              <Link to="/login" className="show-login">
                Já possui conta? Entrar
              </Link>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
};
