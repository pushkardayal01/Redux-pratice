import React from "react";
import { useSelector, useDispatch } from 'react-redux'
import { deleteTodo } from "../../redux/Slice/Todoslice"


function Todo() {
    const todos = useSelector((state) => state.todo)
    const dispatch = useDispatch()
    const handleevent = (todo) => {
        dispatch(deleteTodo(todo))
    };

    return (
        <div>
            {
                todos.map((todo, index) => (
                    <div className="container" key={index}>
                        <h2>{todo}</h2>
                        <button onClick={() => handleevent(todo)}>
                            Delete Button
                        </button>
                    </div>
                ))
            }
        </div>
    );
}

export default Todo;
