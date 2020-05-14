import React, { Component } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Menu from '../../components/Menu';
import { motion } from 'framer-motion';
import * as Constants from '../../components/Constants';
import Button from 'react-bootstrap/Button';
import Footer from '../../components/footer';
import wy_thumb from '../../images/wy_macbookgold.png';

export class warrenyen extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);  
    }
    render() {
        return (
            <motion.div 
            initial="initial"
            animate="enter" 
            exit="exit"
            variants={Constants.aboutVariants}>
                <Head>
                    <title>Andrew Mason | Projects: Warren Yen</title>
                </Head>
                <Menu />
                <Container fluid className="bg-smoke">
                    <Row>
                        <Col xl={6} className="align-left min-100 p-5">
                            <h6 className="display-1 font-weight-bold mb-0 mt-3">01.</h6>
                            <h1 className="font-weight-bold text-uppercase">Warren Yen</h1>
                            <p className="py-2">A website build for UX/UI Designer Warren Yen, this project focused on building a UI and layout provided by the client. I was free to choose tech stack and went with HTML5, PHP for reusable header/footer components, CSS3/SASS, the SWUP library for ajax page transitions and animation, AOS (animate on scroll) for scroll animations, and Parcel as an application bundler.</p>
                            {/* button row */}
                            <Row>
                                <Col className="d-flex">
                                    <a href="https://warrenyen.com" target="_blank">
                                        <Button className="mr-2" variant="dark">See live site</Button>
                                    </a>
                                    <Link href="/projects" scroll={false}>
                                        <a><Button className="mr-2" variant="outline-dark">Projects</Button></a>
                                    </Link>
                                </Col>
                            </Row>
                        </Col>
                        <Col xl={6} className="p-3 bg-turq">
                            <img className="drop-shadow" src={wy_thumb} />
                        </Col>
                    </Row>
                </Container>
                <Footer />
            </motion.div>
        )
    }
}

export default warrenyen;
