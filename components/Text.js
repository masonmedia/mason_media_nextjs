import React, { Component } from 'react';
import Link from 'next/link';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
// import Circle from './Circle';
import Slide from 'react-reveal/Slide';
import Fade from 'react-reveal/Fade';

export class Text extends Component {
    render() {
        return (
            <Row>
                <Col xl={12} className={`${this.props.textSectionClass} min-100 p-5`}>
                  <Slide bottom cascade>
                  <div 
                  className={`${this.props.circle1Class} absolute z-0 circle shadow`}
                  style={{width: '600px', height: '600px'}}></div>
                  <div 
                  className={`${this.props.circle2Class} absolute z-0 bottom circle shadow`}
                  style={{width: '400px', height: '400px'}}></div>
                  <div 
                  className={`${this.props.circle3Class} absolute z-0 top circle shadow`}
                  style={{width: '200px', height: '200px'}}></div>
                  </Slide>
                  <Fade>
                    <h5 className="relative text-shadow text-uppercase text-light">
                        {this.props.microTitle}
                    </h5>
                    <h1 className="page_title relative text-light pb-3 mb-0 drop-shadow">
                      {this.props.title}   
                    </h1>
                    <Link href={this.props.href} scroll={false}>
                      <a>
                        <Button 
                        className="relative drop-shadow mt-2"
                        variant="light">Read more
                        </Button>
                      </a>
                    </Link>
                  </Fade>
                </Col>
            </Row>
        )
    }
}

export default Text
