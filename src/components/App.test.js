import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

const app = shallow(<App />);

it('rendres correctly', () => {
    expect(app).toMatchSnapshot();
});