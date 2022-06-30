import React from "react";
import { useState } from "react";

const AddTodo = ({ add }) => {

    const [task, setTask] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        add(task);
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