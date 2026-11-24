import { UserContext } from "./UserContext";
import React, {useReducer} from 'react';

const initialState = {
 count: 0
}

function reducer(state, action){
 switch(action.type){
 case "increment":
 return {count : state.count + 1}
 case "decrement":
 return {count : state.count - 1}
 case "reset":
 return initialState


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
