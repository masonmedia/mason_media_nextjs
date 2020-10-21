import React from 'react';
import App from 'next/app';
import Head from 'next/head';
import '../scss/main.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import favicon from '../public/favicon.png';
import { motion, AnimatePresence } from 'framer-motion';

class MyApp extends App {
  render() {
    const { Component, pageProps, router } = this.props;

    return (
      <>
        <Head>
          <link rel="icon" 
          type="image/png" 
          href={favicon} />
        </Head>
        <AnimatePresence exitBeforeEnter>
        <motion.div
        key={router.route}
        initial={{ 
          x: 300, 
          opacity: 0, 
          transition: {
            duration: .1
          }
           }}
        animate={{ 
          x: 0, 
          opacity: 1, 
          transition: {duration: 1, ease: "easeInOut", type: "spring", stiffness: 100} }}
        exit={{ 
          x: -300, 
          opacity: 0, 
          transition: {duration: .2, ease: "easeInOut", type: "spring", stiffness: 100} }}
        // variants={{
        //   pageInitial: {
        //     opacity: 0
        //   },
        //   pageAnimate: {
        //     opacity: 1,
        //     transition: {
        //       duration: 2,
        //       ease: "easeInOut"
        //     },
        //   },
        //   pageExit: {
        //     opacity: 0,
        //     transition: {
        //       duration: 1
        //     },
        //   }
        // }}
        >
          <Component {...pageProps} />
        </motion.div>
        </AnimatePresence>
      </>
    );
  }
}

export default MyApp;