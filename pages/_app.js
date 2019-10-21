import React from 'react';
import App from 'next/app';
import * as Sentry from '@sentry/browser';
import { Provider } from 'mobx-react';

import Stores from '../src/stores';
import config from '../config';

Sentry.init({
  dsn: config.SENTRY_DSN,
});

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  componentDidCatch(error, errorInfo) {
    Sentry.withScope(scope => {
      // eslint-disable-next-line arrow-parens
      Object.keys(errorInfo).forEach((key) => {
        scope.setExtra(key, errorInfo[key]);
      });

      Sentry.captureException(error);
    });

    super.componentDidCatch(error, errorInfo);
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <Provider {...Stores}>
        <Component {...pageProps} />
      </Provider>
    );
  }
}

export default MyApp;
