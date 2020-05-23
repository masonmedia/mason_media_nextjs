
import React, { Component } from 'react';

export class Circle extends Component {
    render() {
        return (
            <div 
            className={`${this.props.circleClass} circle absolute z-0 shadow`}
            style={this.props.style}>
            </div>
        );
    }
}

export default Circle;
