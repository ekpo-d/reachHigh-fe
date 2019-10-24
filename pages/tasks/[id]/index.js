import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

import TaskView from '../../../src/components/tasks/TaskView';
import { withAuthSync } from '../../../src/utils/auth';
import HorizontalNavigation from '../../../src/components/navigation/HorizontalNavigation';
import { checkAuth } from '../../../src/utils/helpers';
import '../../../src/assets/styles/app.scss';

const TaskPage = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      <Head>
        <title>Task View</title>
        <link rel="icon" href="/static/favicon.ico" />
      </Head>
      <HorizontalNavigation />
      <TaskView taskId={id} />
    </div>
  );
};

// eslint-disable-next-line consistent-return
TaskPage.getInitialProps = async ctx => checkAuth(ctx);

export default withAuthSync(TaskPage);
