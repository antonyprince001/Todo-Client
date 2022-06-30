import React from "react";
import AddTodo from "./components/AddTodo/AddTodo";
import Navbar from "./components/Navbar/Navbar";
import TodoList from "./components/TodoList";

const App = () => {
   const add = ()=>{

   }

   return (
      <div className="App" title="check">
         <Navbar />
         <br /><br />
         <AddTodo add={add}/>
         <TodoList />
      </div>
   );
};

export default App;