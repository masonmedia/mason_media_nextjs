import React, { Component } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Menu from '../components/Menu';
import { motion } from 'framer-motion';
import CircleComponent from '../components/CircleComponent';

let easing = "backInOut";

const imageVariants = {
  exit: { 
      y: 150, 
      opacity: 0, 
      transition: { 
        duration: 0.5, 
        ease: easing } 
    },
  enter: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.5,
      when: "beforeChildren",
      ease: easing
    }
  }
};

const textVariants = {
  exit: { 
    y: 100, 
    opacity: 0, 
    transition: { 
      duration: 0.5, 
      staggerChildren: 0.5,
      ease: easing }
     },
  enter: {
    y: 0,
    opacity: 1,
    transition: { delay: 0.1, duration: 0.5, ease: easing }
  }
};

const backVariants = {
  exit: {
    x: 100,
    opacity: 0,
    transition: {
      duration: 0.5,
      staggerChildren: 0.5,
      ease: easing
    }
  },
  enter: {
    x: 0,
    opacity: 1,
    transition: {
      delay: 0.5,
      duration: 0.5,
      ease: easing
    }
  }
};

const container = {
  hidden: { 
    opacity: 0,
    y: 100
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.8
    }
  }
}

const item = {
  hidden: { opacity: 0 },
  show: { opacity: 1 }
}

export class Home extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
    const toggler = document.querySelectorAll(".icon-bar");
    let i;
    for (i = 0; i < toggler.length; i++) {
      toggler[i].style.backgroundColor = "#fff";
    }
  }
  render() {
  return (
    <motion.div 
    initial="exit" 
    animate="enter" 
    exit="exit" 
    variants={imageVariants}>
        <Head>
              <title>Mason Media | Home</title>
        </Head>
        <Menu bg="black" variant="dark" />
        <Container fluid>
          <Row className="bg-black">
              <Col className="align-center min-100 p-5">
                <CircleComponent
                circle1="bg-lime right"
                circle2="bg-primary" 
                circle3="bg-yellow" 
                circle4="bg-turq" 
                circle5="bg-red" 
                circle6="bg-pink" 
                />
                <motion.div variants={textVariants}>
                  <h1 className="site-title text-light drop-shadow m-0"
                  >
                  mason
                  </h1>
                  </motion.div>
                  <motion.div variants={backVariants}>
                    <h5 className="relative text-light text-uppercase">
                    web design. graphic design. copywriting.</h5>
                    {/* <div className="d-flex justify-content-center align-items-center pt-3">
                      <Button 
                      variant="success" className="relative bg-orange mr-2 shadow">Read more</Button>
                      <Button 
                      variant="primary" 
                      className="relative shadow">Contact Me</Button>
                    </div> */}
                  </motion.div>
              </Col>
            </Row>

          {/* <Row className="bg-black">
            <Col className="align-center min-100 p-5">
              <motion.div variants={textVariants}>
                <img className="drop-shadow" src={astro} />
                <h1 className="page_title rainbow-text-2">
                  masonmedia
                </h1>
                </motion.div>
                <motion.div variants={backVariants}>
                  <h2 className="site-subtitle text-light">I'm a passionate, multidisciplicary designer, developer, and writer. I specialize in unique visual design, building websites, and UX copywriting. I help build successful brands, and create engaging digital experiences.</h2>
                  <h5 className="small text-light text-uppercase">web design. graphic design. copywriting.</h5>
                </motion.div>
            </Col>
          </Row>

          <Row className="bg-smoke">
            <Col className="align-left min-100 p-5">
              <motion.div variants={textVariants}>
                <h1 className="site-title rainbow-text-2">
                  MASON
                </h1>
                </motion.div>
                <motion.div variants={backVariants}>
                  <h2 className="site-subtitle">Designer. Developer. Writer.</h2>
                </motion.div>
            </Col>
        </Row> */}
      </Container>
    </motion.div>
  );
}
}

export default Home;