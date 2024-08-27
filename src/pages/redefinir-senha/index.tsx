import { Link } from "react-router-dom";

export const RedefinirSenha = () => {
  return (
    <main>
      <div className="form-section" id="password-reset-form">
        <div className="login-title">
          <img src="/assets/img/logo-2.png" alt="My Pet's" />
          <h2>Recuperar senha</h2>
        </div>
        <form>
          <input type="email" placeholder="Digite seu e-mail" required />
          <button type="submit">Enviar link</button>
          <div id="linea"></div>
          <div className="links-form">
            <Link to="/login" className="show-login">
              Já possui conta? Entrar
            </Link>
            <Link to="/registro" className="show-register">
              Não possui conta? Cadastrar
            </Link>
          </div>
        </form>
      </div>
    </main>
  );
};
