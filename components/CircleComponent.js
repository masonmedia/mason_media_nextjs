import React, { Component } from 'react';
import Slide from 'react-reveal/Slide';
import { motion } from 'framer-motion';
import * as Constants from '../components/Constants';

export class CircleComponent extends Component {
    render() {
        return (
            <Slide bottom cascade>
                <div 
                className={`${this.props.circle1} absolute z-0 circle shadow`}
                style={{width: '700px', height: '100%'}}></div>
                <div 
                className={`${this.props.circle2} absolute z-0 left circle shadow`}
                style={{width: '400px', height: '400px'}}></div>
                <div 
                className={`${this.props.circle3} absolute z-0 left bottom circle shadow`} style={{width: '300px', height: '300px'}}></div>
                <div 
                className={`${this.props.circle4} absolute z-0 right circle shadow`} style={{width: '450px', height: '450px'}}></div>
                <div 
                className={`${this.props.circle6} absolute z-0 left top circle shadow`} style={{width: '200px', height: '200px'}}></div>
                <div 
                className={`${this.props.circle5} absolute z-0 right top circle shadow`} style={{width: '150px', height: '150px'}}></div>
                
            </Slide>
        )
    }
}

export default CircleComponent;
