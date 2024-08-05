import React from "react";
import { useSelector } from 'react-redux';

function Title(){
    const todos = useSelector((state) => state.todo)
    return(
        <>
            {
                todos.length===0 ? <div>Add todo list in the list.Now there is 0 items in the list</div> : <div> There are now {todos.length} items in the list.</div>

            }
        </>
    )
}

export default Title;