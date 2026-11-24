import { UserContext } from "./UserContext";
import React, { useReducer } from "react";
import ToDoList from "./ToDoList";

import { Button } from "react-bootstrap";

const initialState = {
  count: 0,
};

const todosInitialState = {
  todos: [
    { id: 1, text: "finishing writing hooks chapter" },
    { id: 2, text: "play with kids" },
    { id: 3, text: "read bible" },
  ],
};

function todosReducer(state, action) {
  switch (action.type) {
    case "add":
      const newToDo = { id: uuidv4(), text: action.payload };
      // add new todo onto array
      const addedToDos = [...state.todos, newToDo];
      // spread our state and assign todos
      return { ...state, todos: addedToDos };
    case "delete":
      const filteredTodoState = state.todos.filter(
        (todo) => todo.id !== action.payload.id,
      );
      return { ...state, todos: filteredTodoState };
    default:
      return todosInitialState;
  }
}

export const TodosContext = React.createContext();

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    case "reset":
      return initialState;
      ault: return initialState;
  }
}

function App() {
  const [state, dispatch] = useReducer(todosReducer, todosInitialState);

  // const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <TodosContext.Provider value={{ state, dispatch }}>
        <ToDoList />
      </TodosContext.Provider>

      <div>
        Count: {state.count}
        <br />
        <Button onClick={() => dispatch({ type: "increment" })}>
          Increment
        </Button>
        <Button
          variant="secondary"
          onClick={() => dispatch({ type: "decrement" })}
        >
          Decrement
        </Button>
        <Button variant="success" onClick={() => dispatch({ type: "reset" })}>
          Reset
        </Button>
      </div>
    </>
  );
}

export default App;
