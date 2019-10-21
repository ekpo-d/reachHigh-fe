import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

import { renderIf } from '../../utils/helpers';

/**
 * Displays list of available goals,
 * and ability for the user to select preferred goals
 * @type {Component}
 */
@inject('goalsStore')
@observer
class Goals extends Component {
  constructor(props) {
    super(props);
    props.goalsStore.setClassProps([
      {
        name: 'goals',
        value: props.goalsData.data,
      },
    ]);
  }

  componentDidMount() {
    this.props.goalsStore.getUser();
  }

  content = goalsStore => (
    <div>
      <h1>What Are Your Main Goals?</h1>
      <p>
        Tell us what you would like to achieve with ReachHigh.
        Select your preferred goals below.
      </p>
      <div className="row m-t-lg">
        {goalsStore.goals.map(goal => (
          <div className="col-sm-4 m-t-md" key={goal.title}>
            <button
              type="button"
              className={`tile ${
                goalsStore.selectedGoals.includes(goal._id)
                ? 'active'
                : ''
              }`}
              onClick={e => goalsStore.selectGoal(e, goal._id)}
            >
              <img
                src={`/static/images/icons/${goalsStore.goalIcons[goal.title]}`}
                alt={goal.title}
              />
              <p>{goal.title}</p>
            </button>
          </div>
          ))
        }
      </div>
      <button
        type="button"
        className="btn-clear m-t-lg"
        onClick={e => goalsStore.saveGoals(e)}
      >
        <span className="link-wrap">
          <span className="link">
            See My Personalized List
          </span>
          {renderIf(
            goalsStore.goalsSaving,
            <span className="login-loader" />,
          )}
          <img src="/static/images/icons/right.svg" alt="right" />
        </span>
      </button>
    </div>
  )

  render() {
    return (
      <section id="goals">
        <div className="wrapper">
          {
            this.props.goalsStore.goals.length
            ? this.content(this.props.goalsStore)
            : (
              <div className="content-loader">
                <span className="loader" />
              </div>
            )
          }
        </div>
      </section>
    );
  }
}

export default Goals;
