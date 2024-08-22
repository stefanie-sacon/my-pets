import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import { Index } from "./pages";
import { Pets } from "./pages/pets";
import { Doacao } from "./pages/doacao";
import { PetsPerdidos } from "./pages/petsPerdidos";
import { Ongs } from "./pages/ongs";
import { Form } from "./pages/form";

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
    path: "/cadastro",
    element: <Form />,
  },
  {
    path: "/cadastro",
    element: <Form />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
