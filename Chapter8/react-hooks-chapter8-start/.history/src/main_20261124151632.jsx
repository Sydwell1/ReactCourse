import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App.jsx";

const UserContext = React.createContext();
const username = "Greg";
ReactDOM.render(
  <React.StrictMode>
    <UserContext.Provider value={username}>
      <App username={username} />
    </UserContext.Provider>
  </React.StrictMode>,
  document.getElementById("root"),
);
export const UserContext = React.createContext();
