import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App.jsx";
import UserContext from "./UserContext.jsx";

const username = "Greg";
ReactDOM.render(
  <React.StrictMode>
    <UserContext.Provider value={username}>
      <App username={username} />
    </UserContext.Provider>
  </React.StrictMode>,
  document.getElementById("root"),
);
