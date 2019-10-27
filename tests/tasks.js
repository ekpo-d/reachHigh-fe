import React from 'react';
import { Provider } from 'mobx-react';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Stores from './__mocks__/stores';
import Tasks from '../src/components/tasks/Tasks';

configure({ adapter: new Adapter() });


describe('Tasks page', () => {
  it('should render', () => {
    const tasksPage = mount(
      <Provider goalsStore={Stores.goalsStore}>
        <Tasks />
      </Provider>,
    );
    expect(tasksPage).toBeTruthy();
  });

  it('should render tasks', () => {
    const tasksPage = mount(
      <Provider goalsStore={Stores.goalsStore}>
        <Tasks />
      </Provider>,
    );
    expect(tasksPage.find('.tile')).toHaveLength(2);
  });

  it('should show completed tasks', () => {
    const tasksPage = mount(
      <Provider goalsStore={Stores.goalsStore}>
        <Tasks />
      </Provider>,
    );
    expect(tasksPage.find('.btn-curve-gray')).toHaveLength(1);
  });
});
