import React from "react";
import AddTodo from "./components/AddTodo";
import Navbar from "./components/Navbar/Navbar";
import TodoList from "./components/TodoList";

const App = () => {
   return (
      <div className="App" title="check">
         <Navbar />
         <br /><br />
         <AddTodo />
         <TodoList />
      </div>
   );
};

export default App;