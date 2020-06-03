import React, { Component } from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import Menu from '../components/Menu';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Footer from '../components/Footer';
import * as Constants from '../components/Constants';

// this is the individual project detail page template

export class ProjectDetail extends Component {
render() {
    return (
        <motion.div 
            initial="initial"
            animate="enter" 
            exit="exit"
            variants={Constants.aboutVariants}>
            <Head>
            <title>Mason Media | {this.props.metaTitle}</title>
                <meta name="description" content={this.props.metaD} />
            </Head>
            <Menu bg="smoke" />
            <Container id={this.props.projectID} fluid className="project_detail bg-smoke p-0">
                <Row>
                    <Col xl={6} className="align-left min-100 p-5">
                        <h6 className={`${this.props.numberClass} project_number display-1 font-weight-bold mt-4 rounded-circle p-3 shadow`}>
                            {this.props.projectNumber}
                        </h6>
                        <h6 className="project_letter absolute z-0 left font-weight-bold">
                            {this.props.projectLetter}
                        </h6>
                        <h1 className="page_title">
                            {this.props.projectTitle}
                        </h1>
                        <p className="py-2">
                            {this.props.projectDesc}
                        </p>
                    </Col>

                    <Col xl={6} className={`${this.props.imgColClass1} p-0`}>
                        <img 
                        className={this.props.imgClass1} 
                        src={this.props.projectImg1} />
                    </Col>

                    <Col xl={6} className={`${this.props.imgColClass2} p-0`}>
                        <img 
                        className={this.props.imgClass2} 
                        src={this.props.projectImg2} />
                    </Col>

                    {/* description column 2 if applicable */}
                    <Col xl={6} className={`${this.props.projectDescCol} align-left min-100 p-5`}>
                        <h6 className="text-uppercase">
                            {this.props.projecSubTitle2}
                        </h6>
                        <h1 className="page_title text-lowercase">
                            {this.props.projectTitle2}
                        </h1>
                        <p className="py-2">
                            {this.props.projectDesc2}
                        </p>
                    </Col>

                    <Col xl={6} className={`${this.props.imgColClass3} p-0`}>
                        <img 
                        className={this.props.imgClass3} 
                        src={this.props.projectImg3} />
                    </Col>

                    <Col xl={6} className={`${this.props.imgColClass4} p-0`}>
                        <img 
                        className={this.props.imgClass4} 
                        src={this.props.projectImg4} />
                    </Col>

                    <Col xl={12} className={`${this.props.imgColClass5} p-0`}>
                        <img 
                        className={this.props.imgClass5} 
                        src={this.props.projectImg5} />
                    </Col>
                </Row>
                {/* Project Links component */}
                {this.props.children}
            </Container>
            <Footer />
        </motion.div>
        );
    }
}

export default ProjectDetail;
