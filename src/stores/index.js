/**
 * MobX store classes instantiation.
 * This is where all MobX stores are instantiated
 * and exported for use within the Provider.
 */

import { configure } from 'mobx';
import UIStore from './UIStore';
import AuthStore from './AuthStore';
import GoalsStore from './GoalsStore';

/**
 * Configuration to ensure all state changes occur via MobX actions
 */
configure({ enforceActions: 'observed' });

/**
 * UIStore - For app wide UI configurations (e.g modals and tabs).
 * @class
 */
const uiStore = new UIStore();

 /**
 * AuthStore - For app wide authentication/authorization.
 * @class
 */
const authStore = new AuthStore(uiStore);

/**
 * GoalsStore - For goals and tasks component and related actions.
 * @class
 */
const goalsStore = new GoalsStore(uiStore);


export default {
  uiStore,
  authStore,
  goalsStore,
};
