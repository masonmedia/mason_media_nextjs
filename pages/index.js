import React, { Component } from 'react';
import Head from 'next/head';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CircleComponent from '../components/CircleComponent';
import Button from 'react-bootstrap/Button';
import Menu from '../components/Menu';
import { motion } from 'framer-motion';
import * as Constants from '../components/Constants';

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
    variants={Constants.imageVariants}>
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
                <motion.div variants={Constants.textVariants}>
                  <h1 className="site-title text-light drop-shadow m-0"
                  >
                  mason
                  </h1>
                  </motion.div>
                  <motion.div variants={Constants.backVariants}>
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