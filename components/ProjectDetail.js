import React, { Component } from 'react';
import Head from 'next/head';
import Menu from '../components/Menu';
import Layout from '../components/Layout';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Footer from '../components/Footer';

// this is the individual project detail page template

export class ProjectDetail extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);
        const toggler = document.querySelectorAll(".icon-bar");
        let i;
        for (i = 0; i < toggler.length; i++) {
          toggler[i].style.backgroundColor = "#000";
        }
      }
render() {
    return (
        <>
            <Head>
                <title>Mason Media | {this.props.metaTitle}</title>
                <meta name="description" content={this.props.metaD} />
            </Head>
            <Menu bg="smoke" />
            <Container id={this.props.projectID} fluid className="project_detail bg-smoke p-0 fade-in-bottom">
                <Row>
                    <Col xl={6} className="align-left min-100 p-5">
                        <h6 className={`${this.props.numberClass} project_number display-2 x-bold mt-4 mb-0`}>
                            {this.props.projectNumber}
                        </h6>
                        <hr className="w-25 bg-black m-0 mb-3" style={{height: '12px'}} />
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

                    <Col xl={6} className={`${this.props.imgColClass1} p-0 text-focus-in`}>
                        <img 
                        className={this.props.imgClass1} 
                        src={this.props.projectImg1} 
                        />
                    </Col>

                    <Col xl={6} className={`${this.props.imgColClass2} p-0`}>
                        <img 
                        className={this.props.imgClass2} 
                        src={this.props.projectImg2} 
                        />
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
                        src={this.props.projectImg3} 
                        />
                    </Col>

                    <Col xl={6} className={`${this.props.imgColClass4} p-0`}>
                        <img 
                        className={this.props.imgClass4} 
                        src={this.props.projectImg4} 
                        />
                    </Col>

                    <Col xl={12} className={`${this.props.imgColClass5} p-0`}>
                        <img 
                        className={this.props.imgClass5} 
                        src={this.props.projectImg5} 
                        />
                    </Col>
                </Row>
                {/* Project Links component */}
                {this.props.children}
            </Container>
            <Footer />
        </>
        );
    }
}

export default ProjectDetail;
