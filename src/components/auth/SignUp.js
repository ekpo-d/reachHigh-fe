import React, { Component } from 'react';
import Link from 'next/link';
import { inject, observer } from 'mobx-react';

import { renderIf } from '../../utils/helpers';

/**
 * Displays input fields for signup.
 * @type {Component}
 */
@inject('authStore')
@observer
class SignUp extends Component {
  render() {
    return (
      <section id="auth">
        <Link href="/" as="/">
          <span className="logo">
            <img src="/static/images/logo_white.svg" alt="ReachHigh" />
          </span>
        </Link>
        <section className="content">
          <h1>Sign Up</h1>
          <p>Register To See &amp; Save Your Goals</p>

          <form onSubmit={this.props.authStore.signup}>
            {renderIf(
              this.props.authStore.signupErrors.visible,
              <p className="error-text">
                <em>
                  {`Error: ${this.props.authStore.signupErrors.message}`}
                </em>
              </p>,
            )}
            <div className="m-b-md">
              <label htmlFor="name">Name</label>
              <input
                required
                type="text"
                id="name"
                name="name"
                value={this.props.authStore.signupData.name}
                onChange={event => (
                  this.props.authStore.setClassProps([
                    {
                      name: 'name',
                      value: event.target.value,
                    },
                  ], this.props.authStore.signupData)
                )}
              />
              <p className="light"><em>Tip: Your firstname and lastname.</em></p>
            </div>
            <div className="m-b-md">
              <label htmlFor="email">Email</label>
              <input
                required
                type="email"
                id="email"
                name="email"
                value={this.props.authStore.signupData.email}
                onChange={event => {
                  this.props.authStore.setClassProps([
                    {
                      name: 'email',
                      value: event.target.value,
                    },
                  ], this.props.authStore.signupData);
                  this.props.authStore.validateEmail();
                }}
              />
              <p className="light"><em>Tip: Could be your personal email address or company email address.</em></p>
            </div>
            <div className="m-b-md">
              <label htmlFor="password">Password</label>
              <input
                required
                type="password"
                id="password"
                name="password"
                value={this.props.authStore.signupData.password}
                onChange={event => {
                  this.props.authStore.setClassProps([
                    {
                      name: 'password',
                      value: event.target.value,
                    },
                  ], this.props.authStore.signupData);
                  this.props.authStore.validatePassword();
                }}
              />
              <p className="light"><em>Tip: Password should be equal or longer than 6 characters.</em></p>
            </div>
            <div className="m-b-md">
              <label htmlFor="confirm-password">Re-type password</label>
              <input
                required
                type="password"
                id="confirm-password"
                name="confirm-password"
                value={this.props.authStore.signupData.confirmPassword}
                onChange={event => (
                  this.props.authStore.setClassProps([
                    {
                      name: 'confirmPassword',
                      value: event.target.value,
                    },
                  ], this.props.authStore.signupData)
                )}
              />
              <p className="light"><em>Tip: This should match with the password above.</em></p>
            </div>
            <div className="m-b-md checkbox-wrap">
              <input
                type="checkbox"
                value={this.props.authStore.signupData.TOS}
                onChange={event => (
                  this.props.authStore.setClassProps([
                    {
                      name: 'TOS',
                      value: event.target.value,
                    },
                  ], this.props.authStore.signupData)
                )}
              />
              <span>
                I  agree to the
                {' '}
                <span className="link">Terms of Use </span>
                and
                {' '}
                <span className="link">Privacy Policy</span>
              </span>
            </div>

            <div className="button-wrapper">
              <button
                type="button"
                className="btn-curve-purple"
                onClick={e => this.props.authStore.signup(e)}
              >
                Sign Up
                {renderIf(
                  this.props.authStore.signupLoading,
                  <span className="login-loader" />,
                )}
              </button>
              <div className="link-wrap">
                <span className="link">Learn More</span>
              </div>
            </div>
            <p className="login">
              Already have an account?
              {' '}
              <Link href="/signin" as="/signin">
                <span className="link">
                  Sign In
                </span>
              </Link>
            </p>
          </form>
        </section>
      </section>
    );
  }
}

export default SignUp;
