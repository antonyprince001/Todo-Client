import React from 'react';
import { shallow } from 'enzyme';
import Navbar from './Navbar';

import "../../setUpTests";

describe('Test Navbar Component', ()=>{

  let NavContainer;

  beforeEach(() => (NavContainer = shallow(<Navbar />)))

  it('Should render a Nav',()=>{
    expect(NavContainer.find('nav').length).toEqual(1);
  });

  it('Should have proper heading',()=>{
    expect(NavContainer.find('span').text()).toMatch(/Todos App/);
  });
})
