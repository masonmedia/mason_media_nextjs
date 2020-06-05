import React, { Component } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CircleComponent from '../components/CircleComponent';
import Button from 'react-bootstrap/Button';
import Menu from '../components/Menu';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import * as Constants from '../components/Constants';
import Circle from '../components/Circle';
import LinkComponent from '../components/LinkComponent';
import Text from '../components/Text';

export class Home extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
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
        <Menu bg="squares" variant="dark" />
        <Container id="home" fluid className="bg-squares">
          <Row>
              <Col className="align-center min-100 p-5">
                <CircleComponent
                circle1="bg-lime right"
                circle2="bg-primary" 
                circle3="bg-yellow" 
                circle4="bg-turq" 
                circle5="bg-red" 
                circle6="bg-pink" 
                />
                <motion.div 
                variants={Constants.textVariants}>
                  <h1 className="site-title mt-0 pt-0 text-light drop-shadow m-0"
                  >
                  mason
                  </h1>
                  </motion.div>
                  <motion.div variants={Constants.backVariants}>
                    <h3 
                    className="site-subtitle relative text-light font-weight-bold text-lowercase">
                    web design. graphic design. copywriting.
                    </h3>
                  </motion.div>  
              </Col>
            </Row>

            {/* <Row className="bg-yellow">
              <Col className="align-center min-100 p-5">
                  <CircleComponent
                  circle1="bg-turq right"
                  circle2="bg-turq" 
                  circle3="bg-yellow" 
                  circle4="bg-pink" 
                  circle5="bg-pink" 
                  circle6="bg-pink" 
                  />
                  <motion.div variants={Constants.textVariants}>
                  <h1 className="site-title text-light drop-shadow">
                      about
                  </h1>
                  </motion.div>
                  <motion.div variants={Constants.backVariants}>
                    <Link href="/about">
                      <a>
                        <Button
                        className="relative btn-lg mt-3 shadow"
                        variant="dark">
                          Read More
                        </Button>
                      </a>
                    </Link>
                  </motion.div>
              </Col>
          </Row> */}

          {/* <Row className="bg-turq">
            <Col className="align-center min-100 p-5">
              <CircleComponent
                circle1="bg-lime right"
                circle2="bg-primary" 
                circle3="bg-yellow" 
                circle4="bg-pink" 
                circle5="bg-red" 
                circle6="bg-pink" 
                />
              <motion.div variants={Constants.textVariants}>
                <h1 className="site-title text-light drop-shadow">
                  Projects
                </h1>
                </motion.div>
                <motion.div variants={Constants.backVariants}>
                  <Link href="/projects">
                    <a>
                      <Button
                      className="relative btn-lg mt-3 shadow"
                      variant="dark">
                        Read More
                      </Button>
                    </a>
                  </Link>
                </motion.div>
              </Col>
            </Row>

            <Row className="bg-success">
              <Col className="align-center min-100 p-5">
                <CircleComponent
                circle1="bg-turq right"
                circle2="bg-turq" 
                circle3="bg-yellow" 
                circle4="bg-pink" 
                circle5="bg-pink" 
                circle6="bg-pink" 
                />
                <motion.div variants={Constants.textVariants}>
                <h1 className="site-title text-light drop-shadow">
                    Writing
                </h1>
                </motion.div>
                <motion.div variants={Constants.backVariants}>
                <Link href="/writing">
                      <a>
                        <Button
                        className="relative btn-lg mt-3 shadow"
                        variant="dark">
                          Read More
                        </Button>
                      </a>
                    </Link>
                </motion.div>
              </Col>
            </Row>

            <Row className="bg-black">
              <Col className="align-center min-100 p-5">
                <CircleComponent
                circle1="bg-lime right"
                circle2="bg-turq" 
                circle3="bg-yellow" 
                circle4="bg-red" 
                circle5="bg-pink" 
                circle6="bg-pink" 
                />
                <motion.div variants={Constants.textVariants}>
                <h1 className="site-title text-light drop-shadow mr-3">
                    Resume
                </h1>
                </motion.div>
                <motion.div variants={Constants.backVariants}>
                    <Link href="/resume">
                      <a>
                        <Button
                        className="relative btn-lg mt-3 shadow"
                        variant="dark">
                          Read More
                        </Button>
                      </a>
                    </Link>
                </motion.div>
              </Col>
            </Row> */}

            <Text
            textSectionClass="align-left"
            circle1Class="bg-turq left"
            circle2Class="bg-pink left"
            circle3Class="bg-lime"
            microTitle="About Me"
            title="I specialize in visual design, building websites, and UX copywriting. I help build successful brands and create engaging digital experiences."
            href="/about"
            />

            <Text
            textSectionClass="align-right"
            circle1Class="bg-primary right"
            circle2Class="bg-red right"
            circle3Class="bg-success right"
            microTitle="Projects"
            title="I design UIs & imagery, build websites with HTML5, CSS3/SASS, PHP, Javascript, Bootstrap & Wordpress, and create single page applications with React, Next.js, and Angular."
            href="/projects"
            />
            
            <Text
            textSectionClass="align-left"
            circle1Class="bg-turq left"
            circle2Class="bg-yellow left"
            circle3Class="bg-pink left"
            microTitle="Copywriting"
            title="I create content for a wide variety of contexts from websites to articles, reviews, blog posts, email marketing, and social media. I specialize in UX, SEO, and editing."
            href="/writing"
            />
            {/* <Row>
                <Col xl={12} className="align-left min-100 p-5">
                  <Circle 
                  circleClass="bg-turq left shadow"
                  style={{height: '600px', width: '600px'}}
                  />
                  <Circle 
                  circleClass="bg-lime left bottom shadow"
                  style={{height: '400px', width: '400px'}}
                  />
                  <Circle 
                  circleClass="bg-pink left top shadow"
                  style={{height: '200px', width: '200px'}}
                  />
                  <h5 className="relative text-uppercase text-light drop-shadow">About me</h5>
                  <h1 className="page_title relative text-light pb-3 mb-0 drop-shadow">
                    I specialize in visual design, building websites, and UX copywriting. I help build successful brands and create engaging digital experiences.
                  </h1>
                  <Link href="/about" scroll={false}>
                    <a>
                      <Button 
                      className="relative drop-shadow font-weight-bold mt-2"
                      variant="light">Read more
                      </Button>
                      </a>
                  </Link>
                </Col>
            </Row> */}

            {/* <Row>
                <Col xl={12} className="align-right min-100 p-5">
                  <Circle 
                  circleClass="bg-primary right shadow"
                  style={{height: '600px', width: '600px'}}
                  />
                  <Circle 
                  circleClass="bg-red right bottom shadow"
                  style={{height: '400px', width: '400px'}}
                  />
                  <Circle 
                  circleClass="bg-lime right top shadow"
                  style={{height: '200px', width: '200px'}}
                  />
                  <h5 className="relative text-uppercase text-light drop-shadow">Projects</h5>
                  <h1 className="page_title relative text-light pb-3 mb-0 drop-shadow">
                  I design UIs & imagery, build websites with HTML5, CSS3/SASS, PHP, Javascript, Bootstrap & Wordpress, and create single page applications with React, Next.js, and Angular.
                  </h1>
                  <Link href="/projects" scroll={false}>
                    <a>
                      <Button 
                      className="relative drop-shadow font-weight-bold mt-2"
                      variant="light">Read more
                      </Button>
                      </a>
                  </Link>
                </Col>
            </Row> */}

            {/* <Row>
                <Col xl={12} className="align-left min-100 p-5">
                  <Circle 
                  circleClass="bg-turq left shadow"
                  style={{height: '600px', width: '600px'}}
                  />
                  <Circle 
                  circleClass="bg-yellow left bottom shadow"
                  style={{height: '400px', width: '400px'}}
                  />
                  <Circle 
                  circleClass="bg-pink left top shadow"
                  style={{height: '200px', width: '200px'}}
                  />
                  <h5 className="relative text-uppercase text-light drop-shadow">Copywriting</h5>
                  <h1 className="page_title relative text-light pb-3 mb-0 drop-shadow">
                    I create content for a wide variety of contexts from websites, to articles and reviews, blog posts and social media content. I specialize in UX, SEO, and editing.
                  </h1>
                  <Link href="/writing" scroll={false}>
                    <a>
                      <Button 
                      className="relative drop-shadow font-weight-bold mt-2"
                      variant="light">Read more
                      </Button>
                      </a>
                  </Link>
                </Col>
            </Row>          */}
      </Container>
      <Footer />
    </motion.div>
  );
}
}

export default Home;