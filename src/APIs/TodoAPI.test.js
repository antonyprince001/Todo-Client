/** @jest-environment jsdom */
import React from "react";
import '@testing-library/jest-dom'
import { createTodo, fetchTodo, fetchAllTodos, updateTodo , deleteTodo} from "./TodoAPI";
import { server, todoErrorResponse } from "../mocks/server";

describe('Test Todo API', () => {
    beforeAll(() => server.listen());
    afterAll(() => server.close());
    let id = 1;
    it('Todo API should create', async () => {
        let task = "NEEV";

        let response = await createTodo(task);

        expect(response).not.toBeNull();
        expect(response.status).toBe(201);
    });

    it('Todo API should fetch by id', async () => {
        let response = await fetchTodo(id);

        expect(response.data[0].description).toBe("NEEV");
        expect(response.data[0].completed).toBe(false);
    });

    it('Todo API should not fetch', async () => {
        server.use(todoErrorResponse);
        let response = await fetchTodo(id-1);

        expect(response).toBe(null);

    });

    it('Todo API should fetch all', async () => {
        let response = await fetchAllTodos();

        expect(response.data[0]).not.toBe(null);
    });

    it('Todo API should update by id', async () => {
        let todo = {
            id : 1,
            description : "NEEV",
            completed : true,
            priority : false
        }
        let response = await updateTodo(todo);

        expect(response.data[0].description).toBe("NEEV");
        expect(response.data[0].completed).toBe(true);
    });

    it('Todo API should delete by id', async () => {
        let response = await deleteTodo(id);

        expect(response.data[0].description).toBe("NEEV");
        expect(response.data[0].completed).toBe(false);
        expect(response.status).toBe(200);
    });

})