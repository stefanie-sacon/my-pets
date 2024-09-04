import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import { Index } from "./pages";
import { Pets } from "./pages/pets";
import { Doacao } from "./pages/doacao";
import { PetsPerdidos } from "./pages/pets-perdidos";
import { Ongs } from "./pages/ongs";
import { CadastroPets } from "./pages/cadastro-pets";
import { Login } from "./pages/login";
import { Registro } from "./pages/registro";
import { RedefinirSenha } from "./pages/redefinir-senha";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Index />,
  },
  {
    path: "/pets",
    element: <Pets />,
  },
  {
    path: "/doacao",
    element: <Doacao />,
  },
  {
    path: "/petsperdidos",
    element: <PetsPerdidos />,
  },
  {
    path: "/ongs",
    element: <Ongs />,
  },
  {
    path: "/cadastropets",
    element: <CadastroPets />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/registro",
    element: <Registro />,
  },
  {
    path: "/redefinirsenha",
    element: <RedefinirSenha />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
