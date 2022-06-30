/** @jest-environment jsdom */
import React from "react";
import AddTodo from "./AddTodo";
import { render, screen , fireEvent} from '@testing-library/react';
import '@testing-library/jest-dom'

describe("Rendering of Add Todo Form", ()=>{  
    const add = jest.fn();

    it("Should render task input field",()=>{
        render(<AddTodo add={add}/>)

        const inputComponent = screen.getByRole('textbox');
    
        expect(inputComponent).toBeInTheDocument()
    })

    it("Should render submit button",async ()=>{
        render(<AddTodo add={add}/>)
        
        const buttonComponent = await screen.findByRole('button');

        expect(buttonComponent).toBeInTheDocument();
    })

    it("Should call handleSubmit method",async ()=>{
        render(<AddTodo add={add}/>)

        const buttonComponent = await screen.findByRole('button');

        fireEvent.click(buttonComponent);

        expect(add).toBeCalled();
    })

})
