import React, { Component } from 'react';
import Layout from '../components/Layout';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import * as Constants from '../components/Constants';
// import CircleComponent from '../components/CircleComponent';
import Parallax from 'react-rellax';

export class writing extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);
      }
    render() {
        return (
            <Layout
            metaTitle="Copywriting"
            metaD="I have broad experience with short and long form writing on a range of topics, SEO, and optimizing user experience."
            bg="black"
            variant="dark"
            id="writing"
            >
                <Row className="bg-black">
                    <Col className="bg-texture-6-og align-center min-100 p-5"
                    style={{backgroundSize: '900%', backgroundPosition: '50% 60%'}}>
                        <h1 className="site-title text-light drop-shadow">
                            Writing
                        </h1>
                        <h3 
                        className="site-subtitle relative text-light font-weight-bold text-lowercase">
                        Copy. Content. Editing.
                        </h3>
                    </Col>
                </Row>

                <Row className="bg-smoke">
                    <Col xl={12} className="bg-texture-6-og align-left min-100 p-5"
                    style={{backgroundSize: '3000%', backgroundPosition: '100% 10%'}}>
                        <h6 className="text-uppercase rainbow-text-2 mt-5 pt-2">Overview</h6>
                        <h1 className="page_title relative rainbow-text-2 pb-3 mb-0">I write and edit copy for a wide variety of contexts. I strive for fast moving, easy-to-read content with humour and originality, while specializing in UX, SEO, and editing for web presentation.
                        </h1>
                        <div className="page_title rainbow-text-2 font-weight-light">↓</div>
                    </Col>
                </Row>
                
                <Row className="bg-black">
                    <Col xl={12} className="bg-texture-6-og text-light align-left min-100 p-5"
                    style={{backgroundSize: '50%', backgroundPosition: '100% 0%', backgroundRepeat: 'repeat-y'}}
                        >
                        <h6 className="text-uppercase drop-shadow">Copywriting</h6>
                        <h1 className="page_title font-weight-bold drop-shadow">I have broad experience with short and long form writing on a range of topics from music, to fashion, fitness, food/cooking, lifestyle, design, real estate, and business.</h1>
                        <div className="page_title font-weight-light drop-shadow">↓</div>
                    </Col>
                </Row>

                <Row>
                    <Col xl={12} className="bg-smoke align-left min-100 p-5">
                        <h6 className="text-uppercase">Content Creation</h6>
                        <h1 className="page_title font-weight-bold ">I create a range of different content types, from articles, to reviews, blog and social media posts, poster/flyer copy, bios, and album/track descriptions all written with a fast, fluid style.</h1>
                        <div className="page_title font-weight-light">↓</div>
                    </Col>
                </Row>

                <Row className="bg-black">
                    <Col xl={12} className="bg-texture-6-og text-light align-left min-100 p-5"
                    style={{backgroundSize: '40%', backgroundPosition: '0% 100%', backgroundRepeat: 'repeat-y'}}>
                        <h6 className="text-uppercase drop-shadow">Editing</h6>
                        <h1 className="page_title font-weight-bold drop-shadow">From grammar and spelling corrections, to improved style, UX, and SEO, I specialize in editing, parsing, and revitalizing existing written content for web presentation.</h1>
                        <div className="page_title font-weight-light drop-shadow">↓</div>
                    </Col>
                </Row>

                <Row>
                    <Col xl={12} className="bg-black text-light align-left min-100 p-5">
                        <h6 className="text-uppercase">Mason Media</h6>
                        <h1 className="page_title font-weight-bold">See samples of work on my copywriting website <a href="https://copy.andrewmasonmedia.com" target="_blank">here.</a></h1>
                    </Col>
                </Row>
            </Layout>
        )
    }
}

export default writing;
