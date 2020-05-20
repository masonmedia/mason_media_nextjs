import React, { Component } from 'react';
import Link from 'next/link';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

export class ProjectLinks extends Component {
    render() {
        return (
            <Row>
                <Col xl={12} className="align-left min-50 text-primary p-5 my-5">
                    {/* project links */}
                    <h6 className="text-uppercase text-dark ">
                        {this.props.projectTitle}
                    </h6>
                    <a className={this.props.githubClass} href={this.props.githubUrl} target="_blank">
                        <h1 className="page_title">code.</h1>
                    </a>
                    <a className={this.props.behanceClass} href={this.props.behanceUrl} target="_blank">
                        <h1 className="page_title">designs.</h1>
                    </a>
                    <a className={this.props.siteClass} href={this.props.siteUrl} target="_blank"> 
                        <h1 className="page_title">live site.</h1>
                    </a>
                    {/* pagination */}
                    <div className="d-flex mt-3">
                        <Link href={this.props.prevHref} scroll={false}>
                            <a><Button 
                            className="mr-2"
                            variant="outline-dark">Previous</Button></a>
                        </Link>
                        <Link href={this.props.nextHref} scroll={false}>
                            <a><Button 
                            variant="dark">Next</Button></a>
                        </Link>
                    </div>
                </Col>
            </Row>
        )
    }
}

export default ProjectLinks;
