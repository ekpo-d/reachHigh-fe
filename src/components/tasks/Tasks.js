import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import Link from 'next/link';

/**
 * Display the list of tasks off selected goals
 * and the ability to route to a specific task.
 * @type {Component}
 */
@inject('goalsStore')
@observer
class Tasks extends Component {
  componentDidMount() {
    this.props.goalsStore.getTasks();
  }

  content = goalsStore => (
    <div className="wrapper">
      <h1>Mary, here&rsquo;s your list of suggested tasks.</h1>
      <div className="row m-t-lg">
        {
          goalsStore.tasks.map(task => (
            <div className="col-xl-4 m-t-lg" key={task.title}>
              <div className="tile">
                <div className="heading">
                  <img src={`/static/images/icons/${goalsStore.goalIcons[task.goalTitle]}`} alt={task.goalTitle} />
                  <p>{task.goalTitle}</p>
                </div>
                <div className="body">
                  <p>{task.title}</p>
                </div>
                <div className="footer">
                  <Link
                    href={{
                      pathname: `tasks/${task._id}`,
                      query: task,
                    }}
                    as={`tasks/${task._id}`}
                  >
                    {
                      goalsStore.user.completedTasks.includes(task._id)
                      ? (
                        <div className="btn-curve-gray">
                          Completed
                        </div>
                        )
                      : (
                        <div className="btn-curve-purple">
                          Start task
                        </div>
                      )
                    }
                  </Link>
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )

  render() {
    return (
      <section
        id="tasks"
        style={
          this.props.goalsStore.tasks.length > 8
          ? { height: 'inherit' }
          : { height: '100vh' }
        }
      >
        <div className="wrapper">
          {
            this.props.goalsStore.tasks.length
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

export default Tasks;
