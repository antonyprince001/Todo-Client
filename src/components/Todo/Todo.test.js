/** @jest-environment jsdom */
import React from "react";
import Todo from "./Todo";
import { render, screen , fireEvent} from '@testing-library/react';
import '@testing-library/jest-dom'


describe("Rendering of Todo", ()=>{  

    let todo;
    const deleteTodo = jest.fn();
    const updateTodo = jest.fn();

    beforeAll(()=>{
        todo = {
            "id" : 0,
            "description" : "Neev",
            "completed" : false,
            "priority" : true
        }
    });

    it("Should render a todo",()=>{
        render(<table>
                <tbody><
                    Todo todo={todo} deleteTodo={deleteTodo} updateTodo={updateTodo}/>
                </tbody>
                </table>)

        const todoRow= screen.getByRole('row');
    
        expect(todoRow).toBeInTheDocument()
    })

    it("Should render todo id",()=>{
        render(<table>
            <tbody><
                Todo todo={todo} deleteTodo={deleteTodo} updateTodo={updateTodo}/>
            </tbody>
            </table>)

        const todoRow= screen.getByText(0);
    
        expect(todoRow).toBeInTheDocument()
    })

    it("Should render todo description",()=>{
        render(<table>
                <tbody><
                    Todo todo={todo} deleteTodo={deleteTodo} updateTodo={updateTodo}/>
                </tbody>
                </table>)
        const todoRow= screen.getByText(/Neev/);
    
        expect(todoRow).toBeInTheDocument()
    })

    it("Should render if todo completed",()=>{
        render(<table>
            <tbody><
                Todo todo={todo} deleteTodo={deleteTodo} updateTodo={updateTodo}/>
            </tbody>
            </table>)

        const todoRow= screen.getByText(/Not completed/);
    
        expect(todoRow).toBeInTheDocument()
    })

    it("Should render todo priority",()=>{
        render(<table>
                <tbody><
                    Todo todo={todo} deleteTodo={deleteTodo} updateTodo={updateTodo}/>
                </tbody>
                </table>)
        const todoRow= screen.getByText(/High/);
    
        expect(todoRow).toBeInTheDocument()
    })

    it("Should render view template",async ()=>{
        render(<table>
            <tbody><
                Todo todo={todo} deleteTodo={deleteTodo} updateTodo={updateTodo}/>
            </tbody>
            </table>)

        const viewRow = await screen.findByTestId('view');

        expect(viewRow).toBeInTheDocument();

    })

    it("Should render edit template for update",async ()=>{
        render(<table>
                <tbody><
                    Todo todo={todo} deleteTodo={deleteTodo} updateTodo={updateTodo}/>
                </tbody>
                </table>)
        const buttonComponent = await screen.findByTestId('update');
        fireEvent.click(buttonComponent);
        const editRow = await screen.findByTestId('edit');

        expect(editRow).toBeInTheDocument();

    })

    it("Should call delete todo method",async ()=>{
        render(<table>
            <tbody><
                Todo todo={todo} deleteTodo={deleteTodo} updateTodo={updateTodo}/>
            </tbody>
            </table>)

        const buttonComponent = await screen.findByTestId('delete');
        fireEvent.click(buttonComponent);

        expect(deleteTodo).toBeCalledTimes(1);

    })

    it("Should call update todo method",async ()=>{
        render(<table>
            <tbody><
                Todo todo={todo} deleteTodo={deleteTodo} updateTodo={updateTodo}/>
            </tbody>
            </table>)

        const buttonComponent = await screen.findByTestId('delete');
        fireEvent.click(buttonComponent);

        expect(deleteTodo).toBeCalledTimes(1);

    })

})
