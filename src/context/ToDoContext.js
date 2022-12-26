import { createContext, useReducer } from 'react';

export const dispatchContext = createContext('');
export const ToDoContext = createContext('');

const initTodos = [];
const todoReducer = (state, action) => {
  switch (action.type) {
    case 'INIT':
      return [...action.initTodos];
    case 'ADD':
      return [...state, action.todo];
    case 'DELETE':
      return state.filter((task) => task.id !== action.id);
    case 'EDIT':
      return state.map((task) =>
        task.id === action.todo.id ? { ...action.todo } : task,
      );
    default:
      return state;
  }
};

export default function ToDoContextWrapper(props) {
  const [todos, dispatch] = useReducer(todoReducer, initTodos);

  return (
    <ToDoContext.Provider value={todos}>
      <dispatchContext.Provider value={dispatch}>
        {props.children}
      </dispatchContext.Provider>
    </ToDoContext.Provider>
  );
}
