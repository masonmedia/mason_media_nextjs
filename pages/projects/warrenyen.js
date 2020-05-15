import React, { Component } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Menu from '../../components/Menu';
import { motion } from 'framer-motion';
import * as Constants from '../../components/Constants';
import Footer from '../../components/footer';
import wy_thumb from '../../images/wy_macbookgold.png';
import wy_2 from '../../images/wy_about.png';
import wy_3 from '../../images/wy_iphone5.png';
import wy_4 from '../../images/wy_project.png';
import Button from 'react-bootstrap/Button';

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
                    <title>Andrew Mason | Warren Yen</title>
                </Head>
                <Menu />
                <Container fluid className="bg-smoke">
                    <Row>
                        <Col xl={6} className="align-left min-100 p-5">
                            {/* pagination */}
                            {/* <div className="d-flex mt-4">
                                <Link href="/projects" scroll={false}>
                                    <a><span className="h1 font-weight-light mr-3 mb-0 text-muted">←</span></a>
                                </Link>
                                <span className="h1 font-weight-light mb-0 text-muted">→</span>
                            </div> */}
                            <h6 className="display-1 font-weight-bold mb-0 mt-4">01.</h6>
                            <h1 className="page_title font-weight-bold text-uppercase">Warren Yen</h1>
                            <p className="py-2">A website build for UX/UI Designer Warren Yen, this project required the development of a UI and layout provided by the client. I was free to choose tech stack and went with HTML5, PHP for reusable header/footer components, CSS3/SASS, the SWUP library for ajax page transitions, AOS (animate on scroll) for scroll animations, and Parcel as an application bundler. The project also required me to build the site so that the client could update and add to it himself. As such I made all main page elements into reuseable, easily cusomizeable components.</p>
                        </Col>
                        <Col xl={6} className="p-3 bg-turq">
                            <img className="drop-shadow" src={wy_thumb} />
                        </Col>
                        <Col xl={6} className="bg-red p-0">
                            <img className="drop-shadow" src={wy_2} />
                        </Col>
                        <Col xl={6} className="bg-purple p-0">
                            <img className="drop-shadow" src={wy_3} />
                        </Col>
                        <Col xl={12} className="bg-yellow p-0">
                            <img className="drop-shadow" src={wy_4} />
                        </Col>
                    </Row>
                    <Row>
                        <Col xl={12} className="align-left min-50 p-5 my-5">
                            <h6 className="text-uppercase">Warren Yen</h6>
                            <h1 className="page_title font-weight-bold ">See live site
                                <a className="text-primary" href="https://warrenyen.com" target="_blank"> here.</a>
                            </h1>
                            <p className="">*I do not maintain this site.</p>
                            {/* pagination */}
                            <div className="d-flex mt-2">
                                <Link href="/projects" scroll={false}>
                                    <a><Button 
                                    className="mr-2"
                                    variant="outline-dark">Previous</Button></a>
                                </Link>
                                <Link href="/projects/jaxx" scroll={false}>
                                    <a><Button 
                                    variant="dark">Next</Button></a>
                                </Link>
                            </div>
                        </Col>
                    </Row>
                </Container>
                <Footer />
            </motion.div>
        )
    }
}

export default warrenyen;
