import axios from "axios";


let todoApi =  axios.create({
    baseURL : "http://localhost:8080/api/v1"
});

export const createTodo =  async (task) => {
    let todo = {
        "description" : task,
        "completed" : false,
        "priority" : false
    }

    try{
        let response =  await todoApi.post("/todos", todo);
        return response;
        }catch(err){
            return null;
        }
}

export const fetchTodo =  async (id) => {
    try{
        const response = await todoApi.get(`/todos/${id}`);
        return response;
        }catch(err){
            return null;
        }
}

export const fetchAllTodos =  async () => {
    try{
        const response = await todoApi.get(`/todos`);
        return response;
        }catch(err){
            return null;
        }
}

export const updateTodo =  async (todo) => {
    try{
        const response = await todoApi.put(`/todos/${todo.id}`);
        return response;
        }catch(err){
            return null;
        }
}

export const deleteTodo =  async (id) => {
    try{
        const response = await todoApi.delete(`/todos/${id}`);
        return response;
        }catch(err){
            return null;
        }
}