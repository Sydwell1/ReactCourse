import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App.jsx";
import { UserContext } from "./UserContext";

const username = "Greg";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <UserContext.Provider value={username}>
      <App />
    </UserContext.Provider>
  </StrictMode>,
);
