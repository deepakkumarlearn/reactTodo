import { useContext } from "react";
import CreateContextTodo from "../context/CreateContext";
import { REMOVE_TODO } from "../context/action.type";

function Todo() {
  const { todo, dispatch } = useContext(CreateContextTodo);
    

  return (
    <div>
      {todo.map((todos) => (
        <li key={todos.id}>
          {todos.todoString}
          <button
            onClick={() => {
              dispatch({
                type: REMOVE_TODO,
                payload: todos.id,
              });
            }}
          >
            Delete
          </button>
        </li>
      ))}
    </div>
  );
}

export default Todo;
