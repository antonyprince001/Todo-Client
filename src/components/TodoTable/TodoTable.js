import React from "react";
import Todo from "../Todo/Todo";

const TodoList = ()=>{
    let todos = [{
        "id" : 0,
        "description" : "NEEV"
    }]

    const handleUpdate = (id,updatedTodo)=>{

    }

    const handleDelete = (id)=>{

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
            {todos &&
                    todos.length === 0 ?
                    <tr align="center">
                        <td colSpan="7">Hurray ! No pending tasks</td>
                    </tr> :
                    todos.map((todo) => {
                        return (
                            <Todo key={todo.id} todo={todo} deleteTodo={handleDelete} updateTodo={handleUpdate} />
                        );
                    })
                }
            </tbody>
        </table>
        </div>
    )
}

export default TodoList;