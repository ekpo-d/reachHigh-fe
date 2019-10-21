import React from 'react';
import Head from 'next/head';
// eslint-disable-next-line import/no-unresolved
import Signin from '../src/components/auth/Signin';

import '../src/assets/styles/app.scss';

const SigninPage = () => (
  <div>
    <Head>
      <title>Sign In</title>
      <link rel="icon" href="/static/favicon.ico" />
    </Head>
    <Signin />
  </div>
);

export default SigninPage;
