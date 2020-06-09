import React, { Component } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import { motion } from 'framer-motion';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Menu from '../components/Menu';
import Footer from '../components/Footer';
import * as Constants from '../components/Constants';
import CircleComponent from '../components/CircleComponent';
import Button from 'react-bootstrap/Button';

export class about extends Component {
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
                    <title>Mason Media | About</title>
                </Head>
                <Menu 
                bg="yellow" 
                variant="light" />
                <Container fluid>
                    <Row className="bg-yellow">
                        <Col className="align-center min-100 p-5">
                            <CircleComponent
                            circle1="bg-turq right"
                            circle2="bg-turq" 
                            circle3="bg-yellow" 
                            circle4="bg-pink" 
                            circle5="bg-pink" 
                            circle6="bg-pink" 
                            />
                            <motion.div variants={Constants.imageVariants}>
                                <h1 className="site-title text-light drop-shadow">
                                    about
                                </h1>
                            </motion.div>
                            <motion.div variants={Constants.backVariants}>
                                <h3 
                                className="site-subtitle relative text-light font-weight-bold text-lowercase">
                                What I do.
                                </h3>
                            </motion.div>
                        </Col>
                    </Row>
                    

            {/* <Row className="bg-rainbow">
              <Col className="align-center min-100 p-5">
                <motion.div variants={Constants.textVariants}>
                  <img 
                  style={{width: '55vmin'}}
                  className="drop-shadow" 
                  src={about_icon} />
                  <h1 className="page_title text-light drop-shadow">
                    about me
                  </h1>
                  </motion.div>
                  <motion.div variants={Constants.backVariants}>
                    <h5 className="small text-light text-uppercase relative">What I do.</h5>
                  </motion.div>
              </Col>
            </Row> */}

                    <Row className="bg-smoke">
                        <Col xl={12} className="align-left min-100 p-5">
                        <motion.div variants={Constants.textVariants}>
                            <h6 className="text-uppercase rainbow-text-2 mt-5 pt-2">About me</h6>
                            <h1 className="page_title relative rainbow-text-2 pb-3 mb-0">
                            Hi, I'm Andrew. I am a passionate, multidisciplinary designer, developer, and writer. I specialize in visual design, building websites, and UX copywriting. I help build successful brands and create engaging digital experiences.
                            </h1>
                            <div className="page_title rainbow-text-2 font-weight-light">↓</div>
                            </motion.div>
                        </Col>
                    </Row>
                    
                    <Row>
                        <Col xl={12} className="bg-black text-light align-left min-100 p-5">
                            <h6 className="text-uppercase">Coding + Development</h6>
                            <h1 className="page_title font-weight-bold ">I build websites with HTML5, CSS3, SASS, PHP, Javascript, jQuery, Bootstrap, Semantic UI, Wordpress and Webflow.</h1>
                            <div className="page_title font-weight-light">↓</div>
                        </Col>
                    </Row>

                    <Row>
                        <Col xl={12} className="bg-smoke align-left min-100 p-5">
                            <h6 className="text-uppercase">Frameworks + Animation</h6>
                            <h1 className="page_title font-weight-bold ">I also create single page applications with React, Next.js, and Angular. I love web animation and use GSAP, AOS, Scroll Magic, Rellax.js, React-reveal, Framer, SWUP and more to create elegant user experiences.</h1>
                            <div className="page_title font-weight-light">↓</div>
                        </Col>
                    </Row>

                    <Row>
                        <Col xl={12} className="bg-turq text-light align-left min-100 p-5">
                            <h6 className="text-uppercase">Graphic + UI + UX Design</h6>
                            <h1 className="page_title font-weight-bold">I design UIs + imagery for websites, social media, and print using Photoshop, Canva, Crello, Lunapic and other tools. I make logos, posters, invitations, and source the perfect project-specific photos.</h1>
                            <div className="page_title font-weight-light">↓</div>
                        </Col>
                    </Row>

                    <Row>
                        <Col xl={12} className="bg-pink text-light align-left min-100 p-5">
                            <h6 className="text-uppercase">Copywriting + Editing</h6>
                            <h1 className="page_title font-weight-bold">I write and edit copy for a wide variety of contexts. I strive for fast moving, easy-to-read content with humour and originality, while specializing in UX, SEO, and editing for web presentation.</h1>
                            <div className="page_title font-weight-light">↓</div>
                        </Col>
                    </Row>

                    <Row>
                        <Col xl={12} className="bg-yellow align-left min-100 p-5">
                            <h6 className="text-uppercase">Tech Stack</h6>
                            <h1 className="page_title font-weight-bold">This website is made with Next.js, React, React-Bootstrap, SASS, and Framer.</h1>
                            <Link href="/projects" scroll={false}>
                                <a>
                                    <Button variant="outline-dark mt-2">
                                        Projects
                                    </Button>
                                </a>
                            </Link>
                        </Col>
                    </Row>
                    <Footer />
                </Container>
            </motion.div>
        )
    }
}

export default about;
