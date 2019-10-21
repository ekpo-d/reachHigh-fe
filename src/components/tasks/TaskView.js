import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

/**
 * Display a task.
 * @type {Component}
 */
@inject('goalsStore')
@observer
class TaskView extends Component {
  componentDidMount() {
    this.props.goalsStore.getTask(this.props.taskId);
  }

  content = goalsStore => (
    <div>
      <h1>{goalsStore.currentTask.title}</h1>
      <div className="second-row m-t-md">
        <div className="one">
          <div className="img-wrap">
            <img src="/static/images/avatar3.png" alt="avatar" />
          </div>
          <div>
            <p>
              By Ahmed Smart
            </p>
            <p>
              Senior Marketing Leader, BigCo
            </p>
          </div>
        </div>
        <div className="two">
          {
            goalsStore.user.completedTasks.includes(
              goalsStore.currentTask._id,
            )
            ? (
              <div className="btn-curve-gray">
                Completed
              </div>
              )
            : (
              <button
                type="button"
                className="btn-curve-purple"
                onClick={e => goalsStore.onTaskComplete(e, goalsStore.currentTask._id)}
              >
                Finished this task? Mark Complete
              </button>
            )
          }
        </div>
      </div>
      <div className="text-content m-t-lg">
        <div className="row">
          <div className="col-sm-7">
            <p className="text">
              {goalsStore.currentTask.description}
            </p>
          </div>
          <div className="col-sm-5">
            <img className="img-fluid" src="/static/images/player.png" alt="player" />
          </div>
        </div>
      </div>
    </div>
  )

  render() {
    return (
      <section id="tasks">
        <div className="wrapper">
          {
            Object.keys(this.props.goalsStore.currentTask).length
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

export default TaskView;
