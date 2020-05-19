import React, { Component } from 'react';
import Col from 'react-bootstrap/Col';

export class Image extends Component {
    render() {
        return (
            <Col 
            xl={this.props.xl} 
            md={this.props.md} 
            className={`${this.props.imgClass} p-0`}>
                <img src={this.props.ImgUrl} />
            </Col>
        )
    }
}

export default Image;
