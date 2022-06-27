import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import "./setUpTests"

describe('App Component', ()=>{

  let container;

  beforeEach(() => (container = shallow(<App />)))

  it('Should render App Component',()=>{
    expect(container.find('div').length).toEqual(1);
  });

})