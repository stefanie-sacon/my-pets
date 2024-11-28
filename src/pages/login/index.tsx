import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./styles.css";

export const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setSuccessMessage("Login realizado com sucesso! Você será redirecionado.");
    setErrorMessage("");

    setTimeout(() => {
      navigate("/");
    }, 2000);
  };

  return (
    <main className="main">
      <div className="container-pages">
        <div>
          <div className="login-title">
            <img src="/assets/img/logo-2.png" alt="My Pet's" />
            <h2>Faça seu login</h2>
          </div>
          <form onSubmit={onSubmit}>
            <input
              type="email"
              placeholder="E-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            {errorMessage && <p className="error-message">{errorMessage}</p>}
            {successMessage && (
              <p className="success-message">{successMessage}</p>
            )}
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
