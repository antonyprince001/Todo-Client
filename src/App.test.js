/** @jest-environment jsdom */
import React from 'react';
import { screen, render, cleanup } from '@testing-library/react'
import App from './App';
import '@testing-library/jest-dom'

describe('App component', () => {

  beforeEach(() => (render(<App />)))

  it('Should render Navbar Component',()=>{  
    const navbarComponent = screen.getByRole('navigation');
    
    expect(navbarComponent).toBeInTheDocument()
  });

  it('Should render AddTodo Component',()=>{
    const addTodoComponent = screen.getByTestId('AddTodo');
    
    expect(addTodoComponent).toBeInTheDocument()
  });

  it('Should render TodoTable Component',()=>{
    const todoTableComponent = screen.getByTestId('TodoTable');

    expect(todoTableComponent).toBeInTheDocument()
  });

  afterAll(cleanup)
})
