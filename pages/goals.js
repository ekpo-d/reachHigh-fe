import React from 'react';
import Head from 'next/head';

import Goals from '../src/components/goals/Goals';
import HorizontalNavigation from '../src/components/navigation/HorizontalNavigation';
import { withAuthSync } from '../src/utils/auth';
import { getInitialProps } from '../src/utils/helpers';
import '../src/assets/styles/app.scss';

const GoalsPage = props => (
  <div>
    <Head>
      <title>Goals</title>
      <link rel="icon" href="/static/favicon.ico" />
    </Head>
    <HorizontalNavigation />
    <Goals goalsData={props} />
  </div>
);

GoalsPage.getInitialProps = async ctx => getInitialProps(ctx, 'goals');

export default withAuthSync(GoalsPage);
