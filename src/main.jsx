import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "./styles/Navbar.css";
import "./styles/Hero.css";
import "./styles/CardService.css";
import "./styles/Feature.css";
import App from "./App";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App></App>
  </StrictMode>
);
