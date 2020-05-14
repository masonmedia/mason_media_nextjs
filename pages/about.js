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
        // document.getElementById("nav").classList.add("bg-rainbow");
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
                                <h1 className="page_title font-weight-bold ">I create websites & applications with React, Next.js, and Angular. I love web animation and use GSAP, AOS, Scroll Magic, Rellax.js, React-reveal, Framer, SWUP and more to create elegant user experiences.</h1>
                                <div className="display-3 font-weight-light">↓</div>
                            </Col>
                        </Row>

                        <Row>
                            <Col xl={12} className="bg-turq text-light align-left min-100 p-5">
                                <h6 className="text-uppercase">Graphic + UI + UX Design</h6>
                                <h1 className="page_title font-weight-bold">I use Photoshop, Canva, Crello, Lunapic and other tools to design for web, social media, and print. I make logos, posters, invitations, and source the perfect project-specific photos.</h1>
                                <div className="display-3 font-weight-light">↓</div>
                            </Col>
                        </Row>

                        <Row>
                            <Col xl={12} className="bg-red text-light align-left min-100 p-5">
                                <h6 className="text-uppercase">Copy Writing + Editing</h6>
                                <h1 className="page_title font-weight-bold">I write and edit copy for a wide variety of contexts. I specialize in web consumption, UX copywriting, SEO, and parsing text for web presentation.</h1>
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
