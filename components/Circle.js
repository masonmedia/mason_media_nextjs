
import React, { Component } from 'react';

export class Circle extends Component {
    render() {
        return (
            <div 
            className={`circle absolute z-0 shadow ${this.props.circleClass}`}
            style={this.props.style}>
            </div>
        );
    }
}

export default Circle;
