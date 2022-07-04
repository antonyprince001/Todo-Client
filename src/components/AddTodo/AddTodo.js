import React, { useContext } from "react";
import { useState } from "react";
import { TodoContext } from "../../Context/TodoContext";
import { fetchAllTodos } from "../../APIs/TodoAPI";

const AddTodo = ({ add }) => {

    const [task, setTask] = useState("");

    const { setTodos } = useContext(TodoContext);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if(task !== null || task !== undefined || task.trim() !== ""){
            await add(task);
            let allTodos = await fetchAllTodos();
            setTodos(allTodos.data);
            setTask("");
        }

    }

    return (
        <form className="container" data-testid="AddTodo">
            <div className="row g-4 align-items-center justify-content-md-center">
                <div className="col-auto">
                    <label htmlFor="task" className="col-form-label">Task :</label>
                </div>
                <div className="col-auto">
                    <input
                        type="text"
                        id="task"
                        className="form-control"
                        value={task}
                        onChange={(e) => setTask(e.target.value)}
                    />
                </div>
                <div className="col-auto">
                    <button
                        type="button"
                        className="btn btn-success"
                        onClick={handleSubmit}
                        data-testid="AddBtn"
                    >
                        Add
                    </button>
                </div>
            </div>
        </form>
    )
}



export default AddTodo;