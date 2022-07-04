import React from "react";
import { createTodo } from "./APIs/TodoAPI";
import AddTodo from "./components/AddTodo/AddTodo";
import Navbar from "./components/Navbar/Navbar";
import TodoTable from "./components/TodoTable/TodoTable";
import { TodoContextProvider  } from "./Context/TodoContext";


const App = () => {

   const add = async (task)=>{
      return await createTodo(task);
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