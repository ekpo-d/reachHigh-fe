import React from 'react';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import App from '../pages/index';

configure({ adapter: new Adapter() });

describe('With Enzyme', () => {
  it('App renders', () => {
    const app = mount(<App />);
    expect(app).toBeTruthy();
  });
});
