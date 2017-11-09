import React from 'react';
import App from './App';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';

describe("App", () => {

  it('renders correctly', () => {
    const tree = renderer.create(
      <App/>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('creates random numbers', () => {
    const wrapper = mount(<App />);
    expect(wrapper.find("ResultList").props().randomNumbers.length).toEqual(0);
    wrapper.find('button').simulate('click');
    expect(wrapper.find("ResultList").props().randomNumbers.length).toEqual(1);
    wrapper.find('button').simulate('click');
    expect(wrapper.find("ResultList").props().randomNumbers.length).toEqual(2);

  });

});
