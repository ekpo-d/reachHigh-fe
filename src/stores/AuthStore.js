/* eslint-disable arrow-body-style */
import {
  observable,
  action,
  runInAction,
  toJS,
} from 'mobx';
import cookie from 'js-cookie';

import { setClassProps, postData } from '../utils/helpers';
import { signin } from '../utils/auth';

/**
 * MobX store class.
 * For app wide authentication/authorization.
 * @class
 */
export default class AuthStore {
	constructor(uiStore) {
		this.uiStore = uiStore;
	}

	@observable
  loginLoading = false;

	@observable
	signupLoading = false;

	@observable
	loginCredentials = {
    email: '',
    password: '',
    strategy: 'local',
	};

	@observable
	loginErrors = {
    visible: false,
    message: '',
  };

	@observable
	signupData = {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    TOS: false,
	};

	@observable
	signupErrors = {
    visible: false,
    type: '',
    message: '',
  };

	/**
   * Function used to validate that all fields are filled
	 */
  validatefields = () => {
    return !!this.signupData.name
      && !!this.signupData.email
      && !!this.signupData.password
      && !!this.signupData.confirmPassword
      && !!this.signupData.TOS;
  }

	/**
   * Function used to validate that the password
   * and re-type password fields match
	 */
  validatePasswordMatch = () => {
    return !!this.signupData.password
    && !!this.signupData.confirmPassword
    && this.signupData.password === this.signupData.confirmPassword;
  }

	/**
   * Function used to validate an email address
	 */
	@action
  validateEmail = () => {
    if (this.signupData.email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)) {
      this.signupErrors = {
        visible: false,
        type: '',
        message: '',
      };
    }
    else {
      this.signupErrors = {
        visible: true,
        type: 'email',
        message: 'Invalid email address.',
      };
    }
  }

	/**
   * Function used to validate the password entered
   * is equal or more than 6 characters
	 */
	@action
  validatePassword = () => {
    if (this.signupData.password.length >= 6) {
      this.signupErrors = {
        visible: false,
        type: '',
        message: '',
      };
    }
    else {
      this.signupErrors = {
        visible: true,
        type: 'password',
        message: 'Password should be equal or longer than 6 characters.',
      };
    }
  }

	/**
   * Login Function,
   * It take's the input credentials
   * and makes and authentication request.
   * Saves the token and user id, then navigates to the goals page.
   * Also, handles the display of login input errors.
	 * @param {object} e - DOM event.
	 */
	@action
	login = async (e = null) => {
    if (e) e.preventDefault();
    this.loginLoading = true;
    if (this.loginCredentials.email && this.loginCredentials.password) {
      await postData('authentication', this.loginCredentials)
      .then(async response => {
        runInAction(() => {
          this.loginCredentials.email = '';
          this.loginCredentials.password = '';
          this.loginErrors.visible = false;
          this.loginErrors.message = '';
          this.loginLoading = false;
        });

        const { accessToken, user: { _id } } = response.data;
        cookie.set('u_id', _id, { expires: 1 });
        await signin({ token: accessToken });
      })
      .catch(error => {
        if (error.response.status === 401) {
          runInAction(() => {
            this.loginErrors.visible = true;
            this.loginErrors.message = 'Invalid credentials, email or password incorrect.';
            this.loginLoading = false;
          });
        }
        else {
          this.uiStore.setClassProps([
            {
              name: 'open',
              value: true,
            },
            {
              name: 'type',
              value: 'error',
            },
          ], this.uiStore.modal);
        }
      });
    }
    else {
      this.loginErrors.visible = true;
      this.loginErrors.message = 'Email and Password fields needed';
    }
	}

	/**
   * Signup Function,
   * It take's the input credentials
   * and request to create a new user.
   * On creation of user, it makes a authentication request
   * and follows the login flow
   * Also, handles the display of signup input errors.
	 * @param {object} e - DOM event.
	 */
	@action
	signup = async (e = null) => {
    if (e) e.preventDefault();
    this.signupLoading = true;
    if (this.validatefields() && this.validatePasswordMatch()) {
      const signupData = Object.assign({}, toJS(this.signupData));
      delete signupData.confirmPassword;
      delete signupData.TOS;

      await postData('users', this.signupData)
      .then(async response => {
        runInAction(() => {
          this.signupErrors = {
            visible: false,
            type: '',
            message: '',
          };
        });

        return postData('authentication', {
          email: response.data.email,
          password: this.signupData.password,
          strategy: 'local',
        });
      })
      .then(async response => {
        runInAction(() => {
          this.signupData = {
            name: '',
            email: '',
            password: '',
            confirmPassword: '',
            TOS: false,
          };
          this.signupLoading = false;
        });
        const { accessToken, user: { _id } } = response.data;
        cookie.set('u_id', _id, { expires: 1 });
        await signin({ token: accessToken });
      })
      .catch(error => {
        if (error.response.status === 409) {
          runInAction(() => {
            this.signupErrors = {
              visible: true,
              type: 'conflict',
              message: 'Email has already been used',
            };
            this.signupLoading = false;
          });
        }
        else {
          this.uiStore.setClassProps([
            {
              name: 'open',
              value: true,
            },
            {
              name: 'type',
              value: 'error',
            },
          ], this.uiStore.modal);
        }
      });
    }
    else {
      this.signupErrors = {
        visible: true,
        type: 'form',
        message: 'All fields below should be filled out, and passwords must match.',
      };
    }
	}

	/**
	 * Function used to assign values to the members of
	 *  this class from an external function or a react component.
	 * @param {Array} arr - An array key:value pairs of class members and their values
	 * @param {Object} self - Refers to the class itself or a member.
	 */
	@action
	setClassProps = (arr, self = this) => setClassProps(arr, self);
}
