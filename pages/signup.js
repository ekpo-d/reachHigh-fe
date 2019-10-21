import React from 'react';
import Head from 'next/head';
// eslint-disable-next-line import/no-unresolved
import Signup from '../src/components/auth/Signup';

import '../src/assets/styles/app.scss';

const SignupPage = () => (
  <div>
    <Head>
      <title>Sign Up</title>
      <link rel="icon" href="/static/favicon.ico" />
    </Head>
    <Signup />
  </div>
);

export default SignupPage;
