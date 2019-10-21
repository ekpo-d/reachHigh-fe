import React from 'react';
import Head from 'next/head';
import nextCookie from 'next-cookies';

import Tasks from '../src/components/tasks/Tasks';
import { withAuthSync } from '../src/utils/auth';
import HorizontalNavigation from '../src/components/navigation/HorizontalNavigation';
import '../src/assets/styles/app.scss';

const TasksPage = () => (
  <div>
    <Head>
      <title>Tasks</title>
      <link rel="icon" href="/static/favicon.ico" />
    </Head>
    <HorizontalNavigation />
    <Tasks />
  </div>
);

TasksPage.getInitialProps = async ctx => {
  const { token } = nextCookie(ctx);

  if (!token) {
    ctx.res.writeHead(302, {
      Location: '/signin',
    });
    ctx.res.end();
  }
};

export default withAuthSync(TasksPage);
