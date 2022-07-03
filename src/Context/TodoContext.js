import React,{ useState, createContext } from "react";

export const TodoContext = createContext("");

export const TodoContextProvider = props =>{

    const [todos, setTodos] = useState([]);
    const [selectedTodo,setSelectedTodo] = useState({
        id : 0,
        description : "",
        completed : false,
        priority : false
    });

    const addTodo = (todo) =>{
        setBooks([...todos,todo]);
    };

    return (
        <TodoContext.Provider value={{
            todos,
            setTodos,
            addTodo,
            selectedTodo,
            setSelectedTodo
          }}
        >
            {props.children}
        </TodoContext.Provider>
    )
}