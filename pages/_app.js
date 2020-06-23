import React from 'react';
import App from 'next/app';
import Head from 'next/head';
import '../scss/main.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import favicon from '../public/favicon.png';

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <>
        <Head>
          <link rel="icon" 
          type="image/png" 
          href={favicon} />
        </Head>
        <Component {...pageProps} />
      </>
    );
  }
}

export default MyApp;