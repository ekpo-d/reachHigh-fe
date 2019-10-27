import React from 'react';
import { Provider } from 'mobx-react';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Stores from './__mocks__/stores';
import TaskView from '../src/components/tasks/TaskView';

configure({ adapter: new Adapter() });


describe('taskView page', () => {
  it('should render', () => {
    const tasksViewPage = mount(
      <Provider goalsStore={Stores.goalsStore}>
        <TaskView />
      </Provider>,
    );
    expect(tasksViewPage).toBeTruthy();
  });

  it('should render the current task', () => {
    const tasksViewPage = mount(
      <Provider goalsStore={Stores.goalsStore}>
        <TaskView />
      </Provider>,
    );
    expect(
      tasksViewPage
      .find('h1')
      .text(),
    ).toEqual('Solicit feedback from your direct reports');
  });

  it('should render an uncompleted task', () => {
    const tasksViewPage = mount(
      <Provider goalsStore={Stores.goalsStore}>
        <TaskView />
      </Provider>,
    );
    expect(
      tasksViewPage
      .find('button')
      .text(),
    ).toEqual('Finished this task? Mark Complete');
  });
});
