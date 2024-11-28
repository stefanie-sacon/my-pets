import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./styles.css";

export const Registro = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setErrorMessage("As senhas não coincidem.");
      setSuccessMessage("");
      return;
    }

    setSuccessMessage(
      "Cadastro realizado com sucesso! Você será redirecionado para o login."
    );
    setErrorMessage("");

    setTimeout(() => {
      navigate("/login");
    }, 2000);
  };

  return (
    <main className="main">
      <div className="container-register">
        <div className="form-section-register" id="register-form">
          <div className="login-title">
            <img src="/assets/img/logo-2.png" alt="My Pet's" />
            <h2>Faça seu cadastro</h2>
          </div>
          <form onSubmit={onSubmit}>
            <div className="inputs-form">
              <div className="input-form">
                <input
                  id="nome"
                  type="text"
                  placeholder="Nome"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                />
                <input
                  id="sobrenome"
                  type="text"
                  placeholder="Sobrenome"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  required
                />
              </div>
              <div className="input-form">
                <input
                  type="email"
                  placeholder="E-mail"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <input
                  type="tel"
                  placeholder="Telefone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />
              </div>
              <div className="input-form">
                <input
                  type="password"
                  placeholder="Senha"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <input
                  type="password"
                  placeholder="Repita a senha"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
              </div>
            </div>

            {successMessage && (
              <p className="success-message">{successMessage}</p>
            )}
            {errorMessage && <p className="error-message">{errorMessage}</p>}

            <button type="submit">Cadastrar</button>
            <div id="linea"></div>
            <div className="links-form">
              <NavLink to="/redefinirsenha" className="forgot-password">
                Esqueceu a senha?
              </NavLink>
              <NavLink to="/login" className="show-login">
                Já possui conta? Entrar
              </NavLink>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
};
