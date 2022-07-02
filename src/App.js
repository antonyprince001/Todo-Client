import React from "react";
import AddTodo from "./components/AddTodo/AddTodo";
import Navbar from "./components/Navbar/Navbar";
import TodoTable from "./components/TodoTable/TodoTable";

const App = () => {
   const add = ()=>{

   }

   return (
      <div className="App" title="check">
         <Navbar />
         <br /><br />
         <AddTodo add={add}/>
         <br />
         <TodoTable />
      </div>
   );
};

export default App;