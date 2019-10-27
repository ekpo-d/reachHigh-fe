/**
 * Mock MobX store classes
 */

import { setClassProps } from '../../src/utils/helpers';
import {
  goals,
  selectedGoals,
  goalIcons,
  tasks,
  user,
  currentTask,
} from './constants';

class UIStore {}

class AuthStore {}

class GoalsStore {
  goals = goals.data;

  selectedGoals = selectedGoals;

  goalIcons = goalIcons;

  tasks = tasks;

  user = user;

  currentTask = currentTask;

  // eslint-disable-next-line no-unused-vars
  getTask = id => {};

  getTasks = () => {};

	getUser = () => {};

	setClassProps = (arr, self = this) => setClassProps(arr, self);
}

const uiStore = new UIStore();
const authStore = new AuthStore(uiStore);
const goalsStore = new GoalsStore(uiStore);


export default {
  uiStore,
  authStore,
  goalsStore,
};
