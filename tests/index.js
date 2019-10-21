import { shallow } from 'enzyme';
import React from 'react';

import App from '../pages/index';

describe('With Enzyme', () => {
  it('App renders', () => {
    const app = shallow(<App />);
    expect(app.toBeTruthy());
  });
});
