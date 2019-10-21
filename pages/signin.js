import React from 'react';
import Head from 'next/head';
import Signin from '../src/components/auth/SignIn';

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
