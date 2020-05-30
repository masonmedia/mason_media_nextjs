import React, { Component } from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Menu from '../components/Menu';
import Footer from '../components/Footer';
import * as Constants from '../components/Constants';
import CircleComponent from '../components/CircleComponent';

export class writing extends Component {
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
                    <title>Mason Media | Copywriting</title>
                </Head>
                <Menu bg="turq" variant="dark" />
                <Container fluid>
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
                                <h5 className="text-uppercase font-weight-bold drop-shadow">
                                Copy. Content. Editing.</h5>
                            </motion.div>
                        </Col>
                    </Row>

                    <Row className="bg-smoke">
                        <Col xl={12} className="align-left min-100 p-5">
                        <motion.div variants={Constants.textVariants}>
                            <h6 className="text-uppercase rainbow-text-2 mt-5 pt-2">Content is king</h6>
                            <h1 className="page_title relative rainbow-text-2 pb-3 mb-0">I write and edit copy for a wide variety of contexts. I strive for fast moving, easy-to-read content with humour and originality, while specializing in UX, SEO, and editing for web presentation.
                            </h1>
                            <div className="page_title rainbow-text-2 font-weight-light">↓</div>
                            </motion.div>
                        </Col>
                    </Row>
                    
                    <Row>
                        <Col xl={12} className="bg-black text-light align-left min-100 p-5">
                            <h6 className="text-uppercase">Content</h6>
                            <h1 className="page_title font-weight-bold ">I have broad experience with short and long form writing on a range of topics from music, to fashion, fitness, food/cooking, lifestyle, design, real estate, and business.</h1>
                            <div className="display-3 font-weight-light">↓</div>
                        </Col>
                    </Row>

                    <Row>
                        <Col xl={12} className="bg-smoke align-left min-100 p-5">
                            <h6 className="text-uppercase">Frameworks + Animation</h6>
                            <h1 className="page_title font-weight-bold ">I create a range of different content types, from articles, to reviews, blog and social media posts, poster/flyer copy, bios, and album/track descriptions all written with a fast, fluid style.</h1>
                            <div className="display-3 font-weight-light">↓</div>
                        </Col>
                    </Row>

                    <Row>
                        <Col xl={12} className="bg-turq text-light align-left min-100 p-5">
                            <h6 className="text-uppercase">Editing</h6>
                            <h1 className="page_title font-weight-bold">From grammar and spelling corrections, to improved style, UX, and SEO, I specialize in editing, parsing, and revitalizing existing written content for web presentation.</h1>
                            <div className="display-3 font-weight-light">↓</div>
                        </Col>
                    </Row>

                    <Row>
                        <Col xl={12} className="bg-black text-light align-left min-100 p-5">
                            <h6 className="text-uppercase">Mason Media</h6>
                            <h1 className="page_title font-weight-bold">See samples of work on my copywriting website <a href="https://copy.andrewmasonmedia.com" target="_blank">here.</a></h1>
                        </Col>
                    </Row>
                    <Footer />
                </Container>
            </motion.div>
        )
    }
}

export default writing;