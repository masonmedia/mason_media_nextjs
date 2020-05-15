import React, { Component } from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Menu from '../components/Menu';
import Footer from '../components/Footer';
import * as Constants from '../components/Constants';

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
                    <title>About Me</title>
                </Head>
                <Menu navClass="bg-primary" variant="light" />
                <Container fluid>
                    <Row className="bg-smoke">
                        <Col xl={12} className="align-left min-100 p-5 ">
                        <motion.div variants={Constants.textVariants}>
                            <h1 className="site-title rainbow-text-2">
                            About
                            </h1>
                            </motion.div>
                            <motion.div variants={Constants.backVariants}>
                            <h2 className="site-subtitle">I build websites, design graphics, and write copy.</h2>
                            </motion.div>
                        </Col>
                        </Row>

                        <Row>
                            <Col xl={12} className="bg-black text-light align-left min-100 p-5">
                                <h6 className="text-uppercase">Coding + Development</h6>
                                <h1 className="page_title font-weight-bold ">I build websites with HTML5, CSS3, SASS, PHP, Javascript, jQuery, Bootstrap, Semantic UI, Wordpress and Webflow.</h1>
                                <div className="display-3 font-weight-light">↓</div>
                            </Col>
                        </Row>

                        <Row>
                            <Col xl={12} className="bg-smoke align-left min-100 p-5">
                                <h6 className="text-uppercase">Frameworks + Animation</h6>
                                <h1 className="page_title font-weight-bold ">I also create single page applications with React, Next.js, and Angular. I love web animation and use GSAP, AOS, Scroll Magic, Rellax.js, React-reveal, Framer, SWUP and more to create elegant user experiences.</h1>
                                <div className="display-3 font-weight-light">↓</div>
                            </Col>
                        </Row>

                        <Row>
                            <Col xl={12} className="bg-turq text-light align-left min-100 p-5">
                                <h6 className="text-uppercase">Graphic + UI + UX Design</h6>
                                <h1 className="page_title font-weight-bold">I design unique imagery for websites, social media, and print using Photoshop, Canva, Crello, Lunapic and other tools. I make logos, posters, invitations, and source the perfect project-specific photos.</h1>
                                <div className="display-3 font-weight-light">↓</div>
                            </Col>
                        </Row>

                        <Row>
                            <Col xl={12} className="bg-red text-light align-left min-100 p-5">
                                <h6 className="text-uppercase">Copywriting + Editing</h6>
                                <h1 className="page_title font-weight-bold">I write and edit copy for a wide variety of contexts. I strive for fast moving, easy-to-read content with humour and originality, while specializing in UX, SEO, and editing for web presentation.</h1>
                                <div className="display-3 font-weight-light">↓</div>
                            </Col>
                        </Row>

                        <Row>
                            <Col xl={12} className="bg-purple text-light align-left min-100 p-5">
                                <h6 className="text-uppercase">Tech Stack</h6>
                                <h1 className="page_title font-weight-bold">This website is made with Next.js, React, React-Bootstrap, SASS, and Framer.</h1>
                            </Col>
                        </Row>
                    <Footer />
                </Container>
            </motion.div>
        )
    }
}

export default about;
