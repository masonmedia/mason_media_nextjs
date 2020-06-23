import React, { Component } from 'react';
import Link from 'next/link';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

export class ProjectLinks extends Component {
    render() {
        return (
            <Row className="bg-warning bg-texture-6-og"
            style={{backgroundSize: '3000%', backgroundPosition: '50% 50%'}}>
                <Col xl={12} className="text-center min-50 p-5 my-5">
                    {/* project links */}
                    <h6 className="text-uppercase text-light">
                        {this.props.projectTitle}
                    </h6>
                    <a className={this.props.githubClass} href={this.props.githubUrl} target="_blank">
                        <span className="page_title font-weight-bold mr-1">code • </span>
                    </a>
                    <a className={this.props.behanceClass} href={this.props.behanceUrl} target="_blank">
                        <span className="page_title font-weight-bold mr-1">designs {this.props.designCircle} </span>
                    </a>
                    <a className={this.props.siteClass} href={this.props.siteUrl} target="_blank"> 
                        <span className="page_title font-weight-bold">live site</span>
                    </a>
                    {/* pagination */}
                    <div className="d-flex justify-content-center mt-4">
                        <Link href={this.props.prevHref} scroll={false}>
                            <a><Button 
                            className={`${this.props.prevClass} mr-2`}
                            variant="outline-light">Previous</Button></a>
                        </Link>
                        <Link href={this.props.nextHref} scroll={false}>
                            <a><Button
                            className="mr-2" 
                            variant="light">Next</Button></a>
                        </Link>
                    </div>
                </Col>
            </Row>
        )
    }
}

export default ProjectLinks;
