/** @jest-environment jsdom */
import React from 'react';
import { screen, render, cleanup } from '@testing-library/react'
import Navbar from './Navbar';
import '@testing-library/jest-dom'

describe('Test Navbar Component', ()=>{

  beforeEach(() => (render(<Navbar />)))

  it('Should render a Nav',()=>{
    const navbarComponent = screen.getByRole('navigation');
    
    expect(navbarComponent).toBeInTheDocument()
  });

  it('Should have proper heading',()=>{
    const navbarComponent = screen.getByText(/Todos App/);
    
    expect(navbarComponent).toBeInTheDocument()
  });
})
