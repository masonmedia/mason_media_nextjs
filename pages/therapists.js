import React, { Component } from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Menu from '../components/Menu';

const aboutVariants = {
    initial: {
        x: -100,
        opacity: 0,
        transition: {
          duration: 1,
          ease: "backInOut"
        }
      },
    exit: {
        x: 100,
        opacity: 0,
        transition: {
          duration: 1,
          ease: "backInOut"
        }
      },
      enter: {
        x: 0,
        opacity: 1,
        transition: {
          delay: 0,
          duration: 1,
          ease: "backInOut"
        }
      }

}

export class therapists extends Component {
    render() {
        return (
            <motion.div 
            initial="initial"
            animate="enter" 
            exit="exit"
            variants={aboutVariants}>
                <Head>
                    <title>Advance Therapy | Our Therapists</title>
                </Head>
                <Menu />
                <Container fluid>
                    <Row>
                        <Col className="min-100 bg-info">
                            <h1 className="h4">Our therapists</h1>
                            <h2>Pride in teamwork.</h2>
                        </Col>
                    </Row>
                </Container>
            </motion.div>
        )
    }
}

export default therapists;
