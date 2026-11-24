import React from "react";
import { UserContext } from "./index";
function App() {
  return (
    <div>
      <UserContext.Consumer>
        {(value) => <div>Received, {value}</div>}
      </UserContext.Consumer>
    </div>
  );
}
export default App;
