import React from "react";

const Todo = ({todo})=>{
    return (
        <tr>
            <td>{todo.id}</td>
            <td>{todo.description}</td>
        </tr>
    )
};

export default Todo;