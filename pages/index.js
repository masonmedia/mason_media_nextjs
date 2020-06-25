import React, { Component } from 'react';
import Layout from '../components/Layout';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CircleComponent from '../components/CircleComponent';
import * as Constants from '../components/Constants';
import Text from '../components/Text';
import Fade from "react-reveal/Fade";
import Parallax from 'react-rellax';

export class Home extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
  return (
        <Layout
        metaTitle="Home"
        metaD="I'm a Toronto designer, frontend developer and copywriter. I build websites, design UIs and imagery, and write copy for a wide range of formats."
        bg="black"
        variant="dark"
        id="home"
        containerClass="bg-black"
        >
          <Row className="bg-texture-6">
              <Col className="align-center min-100 p-5">
                {/* <CircleComponent
                circle1="bg-lime right"
                circle2="bg-primary" 
                circle3="bg-yellow" 
                circle4="bg-turq" 
                circle5="bg-red" 
                circle6="bg-pink" 
                /> */}
                <Parallax speed={-2}>
                  <h1 className="site-title mt-0 pt-0 text-light drop-shadow m-0"
                  >mason</h1>
                </Parallax>
                  <h3 
                  className="site-subtitle relative text-light font-weight-bold text-lowercase">
                  web design. graphic design. copywriting.
                  </h3>
              </Col>
            </Row>

            <Fade>
            <Text
            rowClass="bg-black relative"
            textSectionClass="align-left bg-texture-6-og"
            style={{backgroundSize: '6000%', backgroundPosition: '50% 10%'}}
            circle1Class="bg-texture-6 right d-none"
            circle2Class="bg-pink left d-none"
            circle3Class="bg-lime right d-none"
            microTitle="About Me"
            title="I specialize in visual design, building websites, and UX copywriting. I help build successful brands and create engaging digital experiences."
            href="/about"
            />
            </Fade>

            <Fade>
            <Text
            rowClass="bg-black"
            textSectionClass="align-right bg-texture-6b"
            circle1Class="bg-texture-6 right d-none"
            circle2Class="bg-texture-6 right d-none"
            circle3Class="bg-texture-6 right d-none"
            microTitle="Projects"
            title="I design UIs & imagery, build websites with HTML5, CSS3/SASS, PHP, Javascript, Bootstrap & Wordpress, and create single page applications with React, Next.js, and Angular."
            href="/projects"
            />
            </Fade>
            
            <Fade>
            <Text
            textSectionClass="bg-texture-6-og align-left bg-black"
            style={{backgroundSize: '30%', backgroundPosition: '100% 0%', backgroundRepeat: 'repeat-y'}}
            circle1Class="bg-texture-6c right d-none"
            circle2Class="bg-yellow left d-none"
            circle3Class="bg-pink left d-none"
            microTitle="Copywriting"
            title="I create content for a wide variety of contexts from websites to articles, reviews, blog posts, email marketing, and social media. I specialize in UX, SEO, and editing."
            href="/writing"
            />
            </Fade>
        </Layout>
  );
}
}

export default Home;