import React from 'react';
import { Provider } from 'mobx-react';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { emptyGoals, goals } from './__mocks__/constants';
import Stores from './__mocks__/stores';
import Goals from '../src/components/goals/Goals';

configure({ adapter: new Adapter() });


describe('Goals page', () => {
  it('should render', () => {
    const goalsPage = mount(
      <Provider goalsStore={Stores.goalsStore}>
        <Goals goalsData={emptyGoals} />
      </Provider>,
    );
    expect(goalsPage).toBeTruthy();
  });

  it('should the loading screen', () => {
    const goalsPage = mount(
      <Provider goalsStore={Stores.goalsStore}>
        <Goals goalsData={emptyGoals} />
      </Provider>,
    );
    expect(goalsPage.find('.content-loader')).toHaveLength(1);
  });

  it('should render goals', () => {
    const goalsPage = mount(
      <Provider goalsStore={Stores.goalsStore}>
        <Goals goalsData={goals} />
      </Provider>,
    );
    expect(goalsPage.find('.content-loader')).toHaveLength(0);
    expect(goalsPage.find('.col-sm-4')).toHaveLength(4);
    expect(goalsPage.find('.active')).toHaveLength(4);
  });
});
