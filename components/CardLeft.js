import React, { Component } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

export class CardLeft extends Component {
    render() {
        return (
            <Row className={`${this.props.rowClass} text-light mx-3 mt-3 shadow`}>
                <Col lg={5} className="bg-red p-0">
                    <Card.Img className="rounded-0 drop-shadow" src={this.props.cardImgSrc} />
                </Col>
                <Col lg={7} className="align-left p-0">
                    <Card.Body className="align-left bg-rainbow p-5 w-100">
                        <h6 className="small text-uppercase">
                            {this.props.microTitle}
                        </h6>
                        <h2 className="h1 font-weight-bold text-uppercase m-0 p-0">
                            <span>{this.props.cardTitle1}</span>
                            <span className="d-table">{this.props.cardTitle2}</span>
                        </h2>
                        <div className="h3 m-0">―</div>
                        <blockquote className="pl-3 mt-2 border-left">
                            <h6 className="font-weight-light">
                                {this.props.cardSubTitle}
                            </h6>
                            <Card.Text>
                                {this.props.cardText}
                            </Card.Text>
                        </blockquote>
                        {/* button/link */}
                        {this.props.children}
                    </Card.Body>
                </Col>
            </Row>
        )
    }
}

export default CardLeft;
