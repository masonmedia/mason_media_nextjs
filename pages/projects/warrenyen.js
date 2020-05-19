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
import wy_5 from '../../images/wy_5cyellow.png';
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
                            <h6 className="project_number display-1 font-weight-bold mb-0 mt-4">01.</h6>
                            <h6 className="absolute z-0 left display-1 font-weight-bold" style={{fontSize: '80vw', opacity: '0.05'}}>W</h6>
                            <h1 className="page_title">Warren Yen</h1>
                            <p className="py-2">A website build for UX/UI Designer Warren Yen, this project required the development of a UI and layout provided by the client. I was free to choose tech stack and went with HTML5, PHP for reusable header/footer components, CSS3/SASS, the SWUP library for ajax page transitions, AOS (animate on scroll) for scroll animations, and Parcel as an application bundler. 
                            The client also requested he be able to update and customize the site himself, which informed my approach to architecture: I made all pages, sections, and elements into reuseable, easily customizeable components.</p>
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
                        <Col xl={6} className="bg-pink p-0">
                            <img className="drop-shadow" src={wy_5} />
                        </Col>
                        <Col xl={6} className="bg-yellow p-0">
                            <img className="drop-shadow" src={wy_4} />
                        </Col>
                    </Row>
                    <Row>
                        <Col xl={12} className="align-left min-50 p-5 my-5">
                            <h6 className="text-uppercase">Warren Yen</h6>
                            <a className="text-primary" href="https://github.com/masonmedia/warren_yen_portfolio" target="_blank">
                                <h1 className="page_title">code.</h1>
                            </a>
                            <a className="text-primary" href="https://www.behance.net/gallery/97181347/Warren-Yen-Website-Device-Mockups" target="_blank">
                                <h1 className="page_title">designs.</h1>
                            </a>
                            <a className="text-primary" href="https://warrenyen.com" target="_blank"> 
                                <h1 className="page_title">live site.</h1>
                            </a>
                            <p className="">*I do not maintain this site.</p>
                            {/* pagination */}
                            <div className="d-flex mt-3">
                                <Link href="/projects" scroll={false}>
                                    <a><Button 
                                    className="mr-2"
                                    variant="outline-dark">Previous</Button></a>
                                </Link>
                                <Link href="/projects/at" scroll={false}>
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
