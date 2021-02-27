import { useContext, useState } from "react";
import  CreateContextTodo  from "../context/CreateContext";
import {ADD_TODO} from "../context/action.type";

function AddForm() {

    const [todoString,setTodoString] = useState("")
    const {dispatch} = useContext(CreateContextTodo)

    const handleEvent = e =>{
        console.log(todoString)
        e.preventDefault();
        if(todoString===""){
            return alert("Please Input Something")
        }

        const addDispatchTodo ={
            id : Math.random(),
            todoString
        } 
        console.log(addDispatchTodo)

        dispatch({type:ADD_TODO, payload : addDispatchTodo})
        setTodoString("")

    }

    return (
        <div>
           <form onSubmit={handleEvent}>
               <input type="text" value={todoString}  onChange={e=>setTodoString(e.target.value)} placeholder="Enter Some value" />
               <button>Add TODO</button>
           </form>
        </div>
    )
}

export default AddForm
