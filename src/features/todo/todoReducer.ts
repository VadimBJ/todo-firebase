import Action from "./types/Action";
import TodoState from "./types/todoState";
import todoState from "./types/todoState";

const initialState: todoState[] = getToDoLS();


function getToDoLS(): todoState[] {
  const todos = localStorage.getItem('todos');
  return todos ? JSON.parse(todos) : [];
}

export default function todoReducer(
  state: todoState[] = initialState,
  action: Action
): TodoState[] {
  switch (action.type) {
    case "addToDo":
      return [...state, action.payload];
    case "deleteToDo":
      return state.filter((obj) => obj.id !== action.payload);
      case "editToDo":
        return state.map((obj) => {
          if (obj.id === action.payload.id) {
            return {
              ...obj,
              description: action.payload.description,
            };
          }
          return obj;
        });
    default:
      return state;
  }
}
