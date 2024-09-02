import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../services/firebase";
import "./styles.css";

// Definindo a interface para erros do Firebase
interface FirebaseError {
  code: string;
  message: string;
}

export const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      console.log("Usuário logado com sucesso:", user);

      // Define a mensagem de sucesso e redireciona para a página principal ou outra página desejada
      setSuccessMessage(
        "Login realizado com sucesso! Você será redirecionado."
      );
      setErrorMessage(""); // Limpa a mensagem de erro, se houver

      setTimeout(() => {
        navigate("/"); // Redireciona para a página principal após o login
      }, 2000); // Redireciona após 2 segundos para mostrar a mensagem de sucesso
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error("Erro ao fazer login:", error.message);

        // Verifica se o erro é do tipo FirebaseError
        if ("code" in error) {
          const firebaseError = error as FirebaseError; // Agora usamos o tipo correto
          switch (firebaseError.code) {
            case "auth/wrong-password":
              setErrorMessage(
                "Senha incorreta. Por favor, verifique sua senha."
              );
              break;
            case "auth/user-not-found":
              setErrorMessage(
                "Nenhum usuário encontrado com esse email. Verifique o email ou registre-se."
              );
              break;
            case "auth/invalid-email":
              setErrorMessage(
                "O email fornecido é inválido. Por favor, verifique o email."
              );
              break;
            default:
              setErrorMessage("Erro ao fazer login. Tente novamente.");
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
