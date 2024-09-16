import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import MainPage from "../screens/MainPage";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <MainPage />
  </StrictMode>
);
