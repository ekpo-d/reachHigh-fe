import React from 'react';
import Head from 'next/head';
import nextCookie from 'next-cookies';

import TaskView from '../../../src/components/tasks/TaskView';
import { withAuthSync } from '../../../src/utils/auth';
import HorizontalNavigation from '../../../src/components/navigation/HorizontalNavigation';
import '../../../src/assets/styles/app.scss';

const TaskPage = props => (
  <div>
    <Head>
      <title>Task View</title>
      <link rel="icon" href="/static/favicon.ico" />
    </Head>
    <HorizontalNavigation />
    <TaskView taskId={props.id} />
  </div>
);

// eslint-disable-next-line consistent-return
TaskPage.getInitialProps = ctx => {
  const { token } = nextCookie(ctx);

  if (!token) {
    ctx.res.writeHead(302, {
      Location: '/signin',
    });
    ctx.res.end();
  }
  else {
    return ctx.query;
  }
};

export default withAuthSync(TaskPage);
