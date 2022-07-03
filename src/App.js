import React from "react";
import AddTodo from "./components/AddTodo/AddTodo";
import Navbar from "./components/Navbar/Navbar";
import TodoTable from "./components/TodoTable/TodoTable";
import { TodoContextProvider  } from "./Context/TodoContext";
const App = () => {
   const add = ()=>{

   }

   return (
      <TodoContextProvider>
      <div className="App" title="check">
         <Navbar />
         <br /><br />
         <AddTodo add={add}/>
         <br />
         <TodoTable />
      </div>
      </TodoContextProvider>
   );
};

export default App;