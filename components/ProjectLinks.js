import React, { Component } from 'react';
import Link from 'next/link';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

export class ProjectLinks extends Component {
    render() {
        return (
            <Row>
                <Col xl={12} className="align-left min-50 p-5 my-5">
                    {/* project links */}
                    <h6 className="text-uppercase">
                        {this.props.linkTitle}
                    </h6>
                    <a className="text-primary" href={this.props.githubUrl} target="_blank">
                        <h1 className="page_title">code.</h1>
                    </a>
                    <a className="text-primary" href={this.props.behanceUrl} target="_blank">
                        <h1 className="page_title">designs.</h1>
                    </a>
                    <a className="text-primary" href={this.props.siteUrl} target="_blank"> 
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
