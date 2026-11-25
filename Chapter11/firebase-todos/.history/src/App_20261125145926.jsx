import React, { useReducer } from "react";
import ToDoList from "./ToDoList";
import Login from "./Login";
import { AuthProvider, useAuth } from "./AuthContext";

const todosInitialState = {
  todos: [], // the todos now come from the API
};

export const TodosContext = React.createContext();

function TodosApp() {
  const [state, dispatch] = useReducer(todosReducer, todosInitialState);

  return (
    <TodosContext.Provider value={{ state, dispatch }}>
      <ToDoList />
    </TodosContext.Provider>
  );
}

function Screen() {
  const { user, loading } = useAuth();
  if (loading) return <p style={{ margin: 40 }}>Loading…</p>;
  return user ? <TodosApp /> : <Login />;
}

function App() {
  return (
    <AuthProvider>
      <Screen />
    </AuthProvider>
  );
}

function todosReducer(state, action) {
  switch (action.type) {
    case "get":
      return { ...state, todos: action.payload };
    case "add":
      // the new todo is created in ToDoList and arrives as the payload
      const addedToDos = [...state.todos, action.payload];
      return { ...state, todos: addedToDos };
    case "delete":
      const filteredTodoState = state.todos.filter(
        (todo) => todo.id !== action.payload.id,
      );
      return { ...state, todos: filteredTodoState };
    case "edit":
      const updatedToDo = { ...action.payload };
      const updatedToDoIndex = state.todos.findIndex(
        (t) => t.id === action.payload.id,
      );
      const updatedToDos = [
        ...state.todos.slice(0, updatedToDoIndex),
        updatedToDo,
        ...state.todos.slice(updatedToDoIndex + 1),
      ];
      return { ...state, todos: updatedToDos };
    default:
      return state; // unknown action: leave the state alone
  }
}

export default App;
