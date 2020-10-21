import React, { Component } from 'react';
import Link from 'next/link';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import LinkComponent from '../components/LinkComponent';
import Fade from 'react-reveal/Fade';

// component for individual project item cards on projects page

export class ProjectItem extends Component {
    render() {
        return (
        <Fade bottom cascade>
            <Row className={`${this.props.rowClass} text-light mx-3 mt-3 shadow`}>
            <Col lg={5} className="align-center bg-red p-0">
                <img className={`${this.props.imgClass} border-0 drop-shadow`} src={this.props.cardImgSrc} />
            </Col>
            <Col lg={7} className="align-left p-0">
                <Card.Body className="align-left bg-rainbow p-5 w-100">
                    <h6 className="small text-uppercase">
                        {this.props.microTitle}
                    </h6>
                    <h2 className="page_title m-0 p-0">
                        <span>{this.props.cardTitle1}</span>
                        <span className="d-table">{this.props.cardTitle2}</span>
                    </h2>
                    <div className="h3 m-0">―</div>
                    <blockquote className="pl-3 mt-2 border-left">
                        <h6 className="font-weight-light">
                            {this.props.cardSubTitle}
                        </h6>
                        <Card.Text className="font-weight-bold">
                            {this.props.cardText}
                        </Card.Text>
                    </blockquote>
                    {/* button/link */}
                    {this.props.children}
                    {/* <LinkComponent 
                    linkHref={this.props.linkHref}
                    linkText={this.props.linkText}
                    />
                    <Link href={this.props.href}>
                        <a>{this.props.linkText}</a>
                    </Link> */}
                </Card.Body>
            </Col>
            </Row>
        </Fade>
            
        )
    }
}

export default ProjectItem;
