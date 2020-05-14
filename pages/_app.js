import React from 'react';
import App from 'next/app';
import '../scss/main.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AnimatePresence } from 'framer-motion';

class MyApp extends App {
  render() {
    const { Component, pageProps, router } = this.props;

    return (
      <AnimatePresence exitBeforeEnter>
        <Component {...pageProps} key={router.route} />
      </AnimatePresence>
    );
  }
}

export default MyApp;