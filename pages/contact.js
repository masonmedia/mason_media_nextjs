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
import Slide from 'react-reveal/Slide';

export class contact extends Component {
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
                    <title>Mason Media | Contact</title>
                </Head>
                <Menu bg="turq" variant="dark" />
                <Container fluid>
                    <Row className="bg-success">
                        <Col className="align-center min-100 p-5">
                        <Slide bottom cascade>
                            <div 
                            className="absolute z-0 right circle shadow bg-turq"
                            style={{width: '700px', height: '100%'}}></div>
                            <div 
                            className="absolute z-0 left circle shadow bg-turq"
                            style={{width: '400px', height: '400px'}}></div>
                            <div 
                            className="absolute z-0 bg-yellow left bottom circle shadow" style={{width: '300px', height: '300px'}}></div>
                            <div 
                            className="absolute z-0 right circle shadow bg-pink" style={{width: '450px', height: '450px'}}></div>
                            <div 
                            className="absolute z-0 left top circle shadow bg-pink" style={{width: '200px', height: '200px'}}>
                            </div>
                            <div 
                            className="absolute z-0 bg-pink right top circle shadow" style={{width: '150px', height: '150px'}}></div>
                        </Slide>
                            <motion.div variants={Constants.textVariants}>
                            <h1 className="site-title text-light drop-shadow">
                                Contact
                            </h1>
                            </motion.div>
                            <motion.div variants={Constants.backVariants}>
                                <h5 className="text-uppercase font-weight-bold drop-shadow">
                                Get in touch.</h5>
                            </motion.div>
                        </Col>
                    </Row>
                    
                    <Footer />
                </Container>
            </motion.div>
        )
    }
}

export default contact;
