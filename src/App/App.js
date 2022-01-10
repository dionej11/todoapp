import React from "react";
import { AppUI } from "./AppUI";
import { TodoProvider } from "../todoContext"

// const defaulTodos = [
//   {text:'Leer Lore Olympus', completed:false},
//   {text:'Curso intro React', completed:false},
//   {text:'Llorar', completed:true},
//   {text:'Ver Friends temp 7', completed:true},
//   {text:'Tomar agua', completed:false}
// ];

function App() {
  return (
    <TodoProvider>
      <AppUI/>
    </TodoProvider>
    );
}

export default App;