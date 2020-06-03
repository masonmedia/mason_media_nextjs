import React, { Component } from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ProjectItem from '../components/ProjectItem';
import Menu from '../components/Menu';
import CircleComponent from '../components/CircleComponent';
import LinkComponent from '../components/LinkComponent';
import ExtLinkComponent from '../components/ExtLinkComponent';
import * as Constants from '../components/Constants';
import Footer from '../components/Footer';
import wy_thumb from '../public/images/wy/wy_macbookgold.png';
import at_thumb from '../public/images/at/at_laptop.png';
import jaxx_thumb from '../public/images/jaxx/jaxx_laptop.png';
import dc_thumb from '../public/images/dc/dc_laptop.png';
import n2_thumb from '../public/images/n2/n2_laptop.png';
import sfs_thumb from '../public/images/sfs/sfs_laptop.png';
import copetin_thumb from '../public/images/copetin/copetin_laptop.png';
import bhs_thumb from '../public/images/bhs/bhs_laptop.png';
import wake from '../public/images/wakenbake_yellow.jpg';
import emo from '../public/images/em_card_dark.jpg';
import aimee from '../public/images/aimee_card.jpg';
import bhs from '../public/images/bhs/bhs_lights.jpg';

export class projects extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
    render() {
        return (
          <motion.div 
          initial="exit"
          animate="enter" 
          exit="exit"
          variants={Constants.imageVariants}>
            <Head>
                <title>Mason Media | Projects</title>
            </Head>
            <Menu bg="turq" variant="dark" />
            <Container id="projects" fluid className="bg-smoke pb-4">
            <Row className="bg-turq">
              <Col className="align-center min-100 p-5">
                <CircleComponent
                  circle1="bg-lime right"
                  circle2="bg-primary" 
                  circle3="bg-yellow" 
                  circle4="bg-pink" 
                  circle5="bg-red" 
                  circle6="bg-pink" 
                  />
                <motion.div variants={Constants.textVariants}>
                  <h1 className="site-title text-light drop-shadow">
                    projects
                  </h1>
                  </motion.div>
                  <motion.div variants={Constants.backVariants}>
                    <h5 className="relative font-weight-bold text-uppercase mt-2">
                    Check out some of my work below.</h5>
                  </motion.div>
              </Col>
            </Row>

              {/* <Row className="">
                <Col className="align-left min-100 p-5 ">
                  <motion.div variants={Constants.textVariants}>
                    <h1 className="site-title rainbow-text-2">
                      Projects
                    </h1>
                    </motion.div>
                    <motion.div variants={Constants.backVariants}>
                      <h2 className="site-subtitle">Check out the projects below for more info.</h2>
                    </motion.div>
                </Col>
              </Row> */}

              <ProjectItem 
              rowClass="mt-4"
              col2Class="p-5"
              cardImgSrc={wy_thumb}
              microTitle="UX/UI/GRAPHIC DESIGNER"
              cardTitle1="Warren"
              cardTitle2="Yen"
              cardSubTitle="HTML5, CSS3/SASS, PHP, Javascript, UX, Parcel Bundler"
              cardText="Portfolio website build for Toronto Designer Warren Yen."
              >
                <LinkComponent 
                linkHref="/projects/warrenyen"
                />
              </ProjectItem>

              <ProjectItem 
              col2Class="p-5"
              cardImgSrc={jaxx_thumb}
              microTitle="Cryptocurrency App"
              cardTitle1="Jaxx"
              cardTitle2="Liberty"
              cardSubTitle="HTML5, CSS3/SASS, PHP, Javascript/jQuery, Graphic/UI/UX Design, Copy editing"
              cardText="Product website for Jaxx Liberty, a cryptocurrency wallet app made by Decentral Inc."
              >
                <LinkComponent 
                linkHref="/projects/jaxx"
                />
              </ProjectItem>

              <ProjectItem 
              col2Class="p-5"
              cardImgSrc={dc_thumb}
              microTitle="Blockchain Startup"
              cardTitle1="Decentral"
              cardTitle2="Inc."
              cardSubTitle="HTML5, CSS3/SASS, PHP, Javascript, UI/UX/Graphic design"
              cardText="Public facing website for Toronto blockchain software company Decentral Inc."
              >
                <LinkComponent 
                linkHref="/projects/decentral"
                />
              </ProjectItem>

              <ProjectItem 
              col2Class="p-5"
              cardImgSrc={at_thumb}
              microTitle="Healthcare Services"
              cardTitle1="Advance"
              cardTitle2="Therapy"
              cardSubTitle="HTML5, CSS3/SASS, PHP, Javascript, UI/UX/Graphic design"
              cardText="Website for Guelph/KW healthcare services provider Advance Therapy."
              >
                <LinkComponent 
                linkHref="/projects/at"
                />
              </ProjectItem>

              <ProjectItem 
              col2Class="p-5"
              cardImgSrc={n2_thumb}
              microTitle="Speech Therapy Services"
              cardTitle1="N2 Speech"
              cardTitle2="Therapy"
              cardSubTitle="Wordpress, HTML5, CSS3, PHP, Graphic/UI/UX Design, Copywriting"
              cardText="Website for Toronto speech therapy, consultation, and strategy services provider N2 Speech Therapy."
              >
                <LinkComponent 
                linkHref="/projects/n2"
                />
              </ProjectItem>

              <ProjectItem 
              col2Class="p-5"
              cardImgSrc={bhs_thumb}
              microTitle="Electrofunk Band"
              cardTitle1="Big Horn"
              cardTitle2="Sheep"
              cardSubTitle="AngularJS, HTML5, CSS3, Javascript, UI/UX/Graphic design, Copywriting"
              cardText="Product website for Jaxx Liberty, a cryptocurrency wallet app made by Decentral Inc."
              >
                <LinkComponent 
                linkHref="/projects/bhs"
                />
              </ProjectItem>

              <ProjectItem
              col2Class="p-5"
              cardImgSrc={sfs_thumb}
              microTitle="Jazz Funk Band"
              cardTitle1="Surefire"
              cardTitle2="Sweat"
              cardSubTitle="HTML5, CSS3, Javascript/jQuery, UI/UX/Graphic design, Copy editing"
              cardText="Website for Toronto world-jazz band Surefire Sweat."
              >
                <LinkComponent 
                linkHref="/projects/sfs"
                />
              </ProjectItem>              

              <ProjectItem
              col2Class="p-5"
              cardImgSrc={copetin_thumb}
              microTitle="Toronto Restaurant"
              cardTitle1="Copetín"
              cardTitle2=""
              cardSubTitle="HTML5, CSS3, Javascript/jQuery, Graphic/UI/UX Design, Image sourcing, Copywriting"
              cardText="Website mockup for gourmet Toronto restaurant Copetín."
              >
                <LinkComponent 
                linkHref="/projects/copetin"
                />
              </ProjectItem>

              {/* graphic design */}
              
              <ProjectItem
              col2Class="p-5"
              cardImgSrc={wake}
              imgClass="p-0 my-4 circle"
              microTitle="Design: Toronto Coffee Company"
              cardTitle1="Wake 'n Bake"
              cardSubTitle="Graphic Design, Logo creation, Packaging design"
              cardText="Toronto coffee roaster Wake 'n Bake required a logo, color scheme, and packaging mockups for their new coffee company. The design focused on an 80s-inspired palette of neon primaries which offer a bright, exciting feel, while hinting at established brands such as David's Tea, rock band The Strokes, Google, Microsoft, and NBC."
              >
                <ExtLinkComponent 
                linkHref="https://www.behance.net/gallery/93333999/Wake-n-Bake-Coffee-Co"
                />
              </ProjectItem>

              <ProjectItem
              col2Class="p-5"
              cardImgSrc={bhs}
              imgClass="p-0 my-4 circle"
              microTitle="Design: Toronto Funk Band"
              cardTitle1="Big Horn"
              cardTitle2="Sheep"
              cardSubTitle="Graphic Design, Logo creation, Poster design"
              cardText="Big Horn Sheep is an instrumental trio blending jazz, funk, EDM, and pop-rock styles. The band required a logo, website graphics, concert posters, album cover art, and social media content. The resulting designs incorporate an atari-influenced, 8-bit video game theme with bold neon colors, a styled ram's head logo, and variations on the theme for social media content."
              >
                <ExtLinkComponent 
                linkHref="https://www.behance.net/gallery/93333317/Big-Horn-Sheep"
                />
              </ProjectItem>

              <ProjectItem
              col2Class="p-5"
              cardImgSrc={emo}
              imgClass="p-0 my-4 circle"
              microTitle="Design: Ed Mortenson"
              cardTitle1="EMO"
              cardTitle2="Productions"
              cardSubTitle="Graphic Design, Business cards"
              cardText="Toronto drummer and music instructor Ed Mortenson required business card designs for his performing, teaching, and video production services, as well as for his side hustle driving for Uber. He requested a design that combined equal parts brooding edgy rock, with the clean, trustworthy lines of a professional business."
              >
                <ExtLinkComponent 
                linkHref="https://www.behance.net/gallery/93333651/Ed-Mortenson-Business-Card-Design"
                />
              </ProjectItem>
              
              <ProjectItem
              col2Class="p-5"
              cardImgSrc={aimee}
              imgClass="p-0 my-4 circle"
              microTitle="Design: Toronto Jazz Vocalist"
              cardTitle1="Aimee"
              cardTitle2="Claxton"
              cardSubTitle="Graphic Design, Business cards, Concert posters"
              cardText="Toronto vocalist, bandleader, and music instructor Aimee Claxton is talented composer and performer who required a number of designs for her performing and teaching businesses. Designs included business cards, poster + social media designs for her live concerts, as well handbills to market her teaching studio."
              >
                <ExtLinkComponent 
                linkHref="https://www.behance.net/gallery/93330057/Aimee-Claxton-Business-Cards-Concert-Posters"
                />
              </ProjectItem>
            </Container>
            <Footer />
        </motion.div>
        )
    }
}

export default projects;
