import { UserContext } from "./UserContext";

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
