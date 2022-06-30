import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import Navbar from './components/Navbar';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';

import "./setUpTests"

describe('App Component', ()=>{

  let container;

  beforeEach(() => (container = shallow(<App />)))

  it('Should contain one div',()=>{
    expect(container.find('div').length).toEqual(1);
  });

  it('Should render Navbar Component',()=>{
    expect(container.containsMatchingElement(<Navbar />)).toEqual(true)
  });

  it('Should render AddTodo Component',()=>{
    expect(container.containsMatchingElement(<AddTodo />)).toEqual(true)
  });

  it('Should render TodoList Component',()=>{
    expect(container.containsMatchingElement(<TodoList />)).toEqual(true)
  });

})