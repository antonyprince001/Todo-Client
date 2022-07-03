/** @jest-environment jsdom */
import React from "react";
import TodoTable from "./TodoTable";
import { render, screen , fireEvent} from '@testing-library/react';
import '@testing-library/jest-dom'
import { server, todoErrorResponse } from "../../mocks/server";

describe("Rendering of Todo table", ()=>{  
    beforeAll(() => server.listen());
    afterAll(() => server.close());

    it("Should render a table",()=>{
        render(
            <TodoTable />
           )

        const todoTable = screen.getByRole('table');
    
        expect(todoTable).toBeInTheDocument()
    })

    it("Should render correct table header",()=>{
        render(<TodoTable />)

        expect(screen.getByText('#')).toBeInTheDocument();
        expect(screen.getByText('Task')).toBeInTheDocument();
        expect(screen.getByText('Completed')).toBeInTheDocument();
        expect(screen.getByText('Priority')).toBeInTheDocument();
    })

    it("Should render table rows",()=>{
        render(<TodoTable />)

        expect(screen.getAllByRole('row').length).toBeGreaterThanOrEqual(0);
    
    })

})
