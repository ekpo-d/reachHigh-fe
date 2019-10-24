import React from 'react';
import Head from 'next/head';

import Tasks from '../src/components/tasks/Tasks';
import { withAuthSync } from '../src/utils/auth';
import HorizontalNavigation from '../src/components/navigation/HorizontalNavigation';
import { checkAuth } from '../src/utils/helpers';
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

TasksPage.getInitialProps = async ctx => checkAuth(ctx);

export default withAuthSync(TasksPage);
