import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../services/firebase";
import "./styles.css";

// Definindo a interface para erros do Firebase
interface FirebaseError {
  code: string;
  message: string;
}

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

    // Verifica se as senhas coincidem
    if (password !== confirmPassword) {
      setErrorMessage("As senhas não coincidem.");
      setSuccessMessage(""); // Limpa a mensagem de sucesso, se houver
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      console.log("Usuário criado com sucesso:", user);

      // Define a mensagem de sucesso e redireciona para a página de login
      setSuccessMessage(
        "Cadastro realizado com sucesso! Você será redirecionado para o login."
      );
      setErrorMessage(""); // Limpa a mensagem de erro, se houver

      setTimeout(() => {
        navigate("/login");
      }, 2000); // Redireciona após 2 segundos para mostrar a mensagem de sucesso
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error("Erro ao criar usuário:", error.message);

        // Verifica se o erro é do tipo FirebaseError
        if ("code" in error) {
          const firebaseError = error as FirebaseError; // Agora usamos o tipo correto
          switch (firebaseError.code) {
            case "auth/email-already-in-use":
              setErrorMessage(
                "Este email já está em uso. Por favor, use outro email."
              );
              break;
            case "auth/invalid-email":
              setErrorMessage(
                "O email fornecido é inválido. Por favor, verifique o email."
              );
              break;
            case "auth/weak-password":
              setErrorMessage(
                "A senha é muito fraca. Por favor, forneça uma senha mais forte."
              );
              break;
            default:
              setErrorMessage("Erro ao criar usuário. Tente novamente.");
          }
        } else {
          setErrorMessage("Erro inesperado. Tente novamente.");
        }
      } else {
        setErrorMessage("Erro inesperado. Tente novamente.");
      }
      setSuccessMessage(""); // Limpa a mensagem de sucesso, se houver
    }
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
