import React, { Component } from 'react';
import Link from 'next/link';
import { inject, observer } from 'mobx-react';

import { renderIf } from '../../utils/helpers';

/**
 * Displays input fields for login and initiatates authentication.
 * @type {Component}
 */
@inject('authStore')
@observer
class SignIn extends Component {
  render() {
    return (
      <section id="auth" className="signin">
        <Link href="/" as="/">
          <span className="logo">
            <img src="/static/images/logo_white.svg" alt="ReachHigh" />
          </span>
        </Link>
        <section className="content">
          <h1>Sign In</h1>
          <p>Login To See &amp; Save Your Goals</p>

          <form onSubmit={this.props.authStore.login}>
            {renderIf(
              this.props.authStore.loginErrors.visible,
              <p className="error-text">
                <em>
                  {`Error: ${this.props.authStore.loginErrors.message}`}
                </em>
              </p>,
            )}
            <div className="m-b-md">
              <label htmlFor="email">Email</label>
              <input
                required
                type="text"
                id="email"
                name="email"
                value={this.props.authStore.loginCredentials.email}
                onChange={event => (
                  this.props.authStore.setClassProps([
                    {
                      name: 'email',
                      value: event.target.value,
                    },
                  ], this.props.authStore.loginCredentials)
                )}
              />
            </div>
            <div className="m-b-md">
              <label htmlFor="password">Password</label>
              <input
                required
                type="password"
                id="password"
                name="password"
                value={this.props.authStore.loginCredentials.password}
                onChange={event => (
                  this.props.authStore.setClassProps([
                    {
                      name: 'password',
                      value: event.target.value,
                    },
                  ], this.props.authStore.loginCredentials)
                )}
              />
            </div>
            <div className="button-wrapper">
              <button
                type="button"
                onClick={e => this.props.authStore.login(e)}
                className="btn-curve-purple"
              >
                Sign In
                {renderIf(
                  this.props.authStore.loginLoading,
                  <span className="login-loader" />,
                )}
              </button>
            </div>
            <p className="login">
              Don’t have an account?
              {' '}
              <Link href="/signup" as="/signup">
                <span className="link">
                  Sign Up
                </span>
              </Link>
            </p>
          </form>
        </section>
      </section>
    );
  }
}

export default SignIn;
