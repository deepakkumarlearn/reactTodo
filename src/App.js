import CreateContextTodo from "./context/CreateContext";
import AddForm from "./Component/AddForm";
import {useReducer} from 'react';
import Reducer from "./context/TodoReducer";
import Todo from "./Component/Todo";



function App() {
  const [todo, dispatch] = useReducer(Reducer,[])
  
  return (
    <CreateContextTodo.Provider value={{todo, dispatch}}> 
          <AddForm/>
          <Todo/>
    </CreateContextTodo.Provider>
  );
}

export default App;
