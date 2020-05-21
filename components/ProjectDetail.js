import React, { Component } from 'react';
import Head from 'next/head';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Menu from '../components/Menu';

// this is the individual project detail page template

export class ProjectDetail extends Component {
render() {
    return (
        <div>
            <Head>
                <title>{this.props.metaTitle}</title>
            </Head>
            <Container id={this.props.projectID} fluid className="project_detail bg-smoke p-0">
                <Row>
                    <Col xl={6} className="align-left min-100 p-5">
                        <h6 className="project_number display-1 font-weight-bold mb-0 mt-4">
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

                    <Col xl={6} className={`${this.props.imgClass1} p-0`}>
                        <img 
                        className={this.props.imgClass1} 
                        src={this.props.projectImg1} />
                    </Col>

                    <Col xl={6} className={`${this.props.imgClass2} p-0`}>
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

                    <Col xl={6} className={`${this.props.imgClass3} p-0`}>
                        <img 
                        className={this.props.imgClass3} 
                        src={this.props.projectImg3} />
                    </Col>

                    <Col xl={6} className={`${this.props.imgClass4} p-0`}>
                        <img 
                        className={this.props.imgClass4} 
                        src={this.props.projectImg4} />
                    </Col>

                    <Col xl={12} className={`${this.props.imgClass5} p-0`}>
                        <img 
                        className={this.props.imgClass5} 
                        src={this.props.projectImg5} />
                    </Col>
                </Row>
                {/* Project Links component */}
                {this.props.children}
            </Container>
        </div>
        );
    }
}

export default ProjectDetail;
