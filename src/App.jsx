import { useState } from "react"
import Title from "./Component/title/Title";
import Inputtodo from "./Component/InputTodo/Inputtodo";
import Todo from "./Component/Todo/Todo";

function App() {
  

  return (
    <>
      <div> TODO List</div>

      <Title/>
      <Inputtodo/>
      <Todo/>
      
    </>
  )
}

export default App
