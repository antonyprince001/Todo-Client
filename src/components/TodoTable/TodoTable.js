import React from "react";
import Todo from "../Todo/Todo";
import { TodoContext } from "../../Context/TodoContext";
import { useEffect, useContext } from "react";
import { fetchAllTodos, deleteTodo } from "../../APIs/TodoAPI";
const TodoTable = ()=>{
    
    const { todos, setTodos } = useContext(TodoContext);

    const fetchTodos = async () => {
        try {
            const response = await fetchAllTodos();
            console.log(response);
            setTodos(response.data);
        } catch (err) { }
    };
    useEffect( () => {
          fetchTodos();
    }, []);

    const handleUpdate = (updatedTodo)=>{

    }

    const handleDelete = async (id)=>{
        let response = await deleteTodo(id);
        fetchTodos();
    }

    return (
        <div data-testid="TodoTable" className="container">
        <table className="table table-hover table-success">
            <thead>
                <tr>
                    <th scope="col-auto">#</th>
                    <th scope="col-auto">Task</th>
                    <th scope="col-auto">Completed</th>
                    <th scope="col-auto">Priority</th>
                    <th scope="col-auto"></th>
                    <th scope="col-auto"></th>
                </tr>
            </thead>
            <tbody>
            {(   todos === undefined || todos.length === 0 ?
                    <tr align="center">
                        <td colSpan="7">Hurray ! No pending tasks</td>
                    </tr> :
                    todos.map((todo) => {
                        return (
                            <Todo key={todo.id} todo={todo} deleteTodo={handleDelete} updateTodo={handleUpdate} />
                        );
                    })
            )}
            </tbody>
        </table>
        </div>
    )
}

export default TodoTable;