import React, { Component } from 'react';
import Head from 'next/head';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Menu from '../components/Menu';
import ProjectLinks from './ProjectLinks';

export class ProjectDetail extends Component {

render() {
    return (
        <div>
            <Head>
                <title>{this.props.metaTitle}</title>
            </Head>
            <Menu />
            <Container id="project_detail" fluid className="bg-smoke">
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
                        <img src={this.props.projectImg1} />
                    </Col>

                    <Col xl={6} className={`${this.props.imgClass2} p-0`}>
                        <img src={this.props.projectImg2} />
                    </Col>

                    {/* desc column 2 if applicable */}
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
                        <img src={this.props.projectImg3} />
                    </Col>

                    <Col xl={6} className={`${this.props.imgClass4} p-0`}>
                        <img src={this.props.projectImg4} />
                    </Col>

                    <Col xl={12} className={`${this.props.imgClass5} p-0`}>
                        <img src={this.props.projectImg5} />
                    </Col>
                </Row>
                {/* Project Links component */}
                {/* {this.props.children} */}
                <ProjectLinks 
                linkTitle={this.props.linkTitle}
                githubUrl={this.props.githubUrl}
                behanceUrl={this.props.behanceUrl}
                siteUrl={this.props.siteUrl}
                prevHref={this.props.prevHref}
                nextHref={this.props.nextHref}
                />
            </Container>
        </div>
        );
    }
}

export default ProjectDetail;
