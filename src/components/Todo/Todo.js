import React, { useState } from "react";

const Todo = ({todo, deleteTodo , updateTodo})=>{

    const [isEditing, setEditing] = useState(false);
    const [name, setName] = useState(todo.description);
    const [completed, setCompleted] = useState(todo.completed);
    const [priority, setPriority] = useState(todo.priority);
    
    const handleUpdate = async (e,id)=>{
        let updatedTodo = {
            "id" : todo.id,
            "description" : name,
            "completed" : completed,
            "priority" : priority
        }
        await updateTodo(updatedTodo);
        setEditing(false);
    }

    const togglePriority = ()=>{
        console.log(!priority);
        setPriority(!priority);
    }

    const toggleCompleted = ()=>{
        setCompleted(!completed);
    }
    const handleDelete = (e,id)=>{
        deleteTodo(id)
    }

    const editingTemplate =  (
        <tr data-testid="edit">
            <td>{todo.id}</td>
            <td>
                <input 
                    id={todo.id} 
                    type="text" 
                    name="description"
                    value={name}
                    onChange={(e) => setName(e.target.value)}  
                />
            </td>
            <td>
            <input 
                    id={todo.id} 
                    type="checkbox" 
                    name="description"
                    value={completed}
                    checked={completed}
                    onChange={(e) => toggleCompleted(e.target.value)}  
                />
            </td>
            <td>
            <input 
                    id={todo.id} 
                    type="checkbox" 
                    name="description"
                    checked={priority}
                    value={priority}
                    onChange={(e) => togglePriority(e.target.value)}  
                />
            </td> 
            <td>    
                <button type="button" className="btn btn-warning" data-testid="update" id="update" onClick={(e) => {handleUpdate(e,todo.id) }}>
                    Update
                </button>
            </td>
            <td>
                <button type="button" className="btn btn-danger" data-testid="cancel" id="delete" onClick={(e) => { setEditing(false) }}>
                    Cancel
                </button>
            </td>
        </tr>
    )

    const viewTemplate =  (
        <tr data-testid="view">
            <td>{todo.id}</td>
            <td>{todo.description}</td>
            <td>{todo.completed === true ? "completed" : "Not completed"}</td>
            <td>{todo.priority === true ? "High" : "Low"}</td>
            <td>    
                <button type="button" className="btn btn-warning" id="update" data-testid="update" onClick={(e) => { setEditing(true) }}>
                    Update
                </button>
            </td>
            <td>
                <button type="button" className="btn btn-danger" id="delete" data-testid="delete" onClick={(e) => { handleDelete(e,todo.id) }}>
                    Delete
                </button>
            </td>
        </tr>
    )

    return <>{isEditing === true ? editingTemplate : viewTemplate}</>;

};

export default Todo;