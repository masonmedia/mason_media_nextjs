import React, { Component } from 'react';
import Layout from '../components/Layout';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CircleComponent from '../components/CircleComponent';
import { motion } from 'framer-motion';
import * as Constants from '../components/Constants';
import Text from '../components/Text';
// import img_1 from '../public/images/Doubs.svg'
// import img_1 from '../public/images/Taieri.svg'

export class Home extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
  return (
        <Layout
        metaTitle="Home"
        bg="black"
        variant="dark"
        id="home"
        containerBg="bg-gradient-red"
        >
          <Row>
              <Col className="align-center min-100 p-5">
                <CircleComponent
                circle1="bg-lime right"
                circle2="bg-primary" 
                circle3="bg-yellow" 
                circle4="bg-turq" 
                circle5="bg-red" 
                circle6="bg-pink" 
                />
                <motion.div 
                variants={Constants.imageVariants}>
                  <h1 className="site-title mt-0 pt-0 text-light drop-shadow m-0"
                  >
                  mason
                  </h1>
                  </motion.div>
                  <motion.div variants={Constants.backVariants}>
                    <h3 
                    className="site-subtitle relative text-light font-weight-bold text-lowercase">
                    web design. graphic design. copywriting.
                    </h3>
                  </motion.div>  
              </Col>
            </Row>

            <Text
            textSectionClass="align-left"
            circle1Class="bg-turq left"
            circle2Class="bg-pink left"
            circle3Class="bg-lime"
            microTitle="About Me"
            title="I specialize in visual design, building websites, and UX copywriting. I help build successful brands and create engaging digital experiences."
            href="/about"
            />

            <Text
            textSectionClass="align-right"
            circle1Class="bg-primary right"
            circle2Class="bg-red right"
            circle3Class="bg-success right"
            microTitle="Projects"
            title="I design UIs & imagery, build websites with HTML5, CSS3/SASS, PHP, Javascript, Bootstrap & Wordpress, and create single page applications with React, Next.js, and Angular."
            href="/projects"
            />
            
            <Text
            textSectionClass="align-left"
            circle1Class="bg-turq left"
            circle2Class="bg-yellow left"
            circle3Class="bg-pink left"
            microTitle="Copywriting"
            title="I create content for a wide variety of contexts from websites to articles, reviews, blog posts, email marketing, and social media. I specialize in UX, SEO, and editing."
            href="/writing"
            />
        </Layout>
  );
}
}

export default Home;