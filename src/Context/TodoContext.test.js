/** @jest-environment jsdom */
import React from "react";
import '@testing-library/jest-dom'

import { TodoContext, TodoContextProvider } from './TodoContext';

describe('Test Todo Context', ()=>{

  it('Context should be defined',()=>{
    expect(<TodoContext />).toBeDefined();
  });

  it('Context Provider be defined',()=>{
    expect(<TodoContextProvider />).toBeDefined();
  });

})