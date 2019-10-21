import React from 'react';
import Head from 'next/head';
import Home from '../src/components/home/Home';

import '../src/assets/styles/app.scss';

const Index = () => (
  <div>
    <Head>
      <title>Home</title>
      <link rel="icon" href="/static/favicon.ico" />
    </Head>
    <Home />
  </div>
);

export default Index;
