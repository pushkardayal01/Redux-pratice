import React, { useState } from "react";
import { useDispatch } from 'react-redux'
import { addTodo } from "../../redux/Slice/Todoslice";


function Inputtodo(){

    const [inputvalue,setInputvalue] = useState('');
    const dispatch = useDispatch()

    const handleevent = () =>{
        
        
        dispatch(addTodo(inputvalue))
        setInputvalue('')
    }

    return(
        <div className="container">
            <input 
            type = "text"
            placeholder="Enter todo list here" 
            value={inputvalue}
            onChange={(e) => setInputvalue(e.target.value)}
            />
            <button onClick={handleevent}>Add Todo</button>
        </div>

    )
}


export default Inputtodo;