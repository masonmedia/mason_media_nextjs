import React, { Component } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import { motion } from 'framer-motion';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import ProjectItem from '../components/ProjectItem';
import Menu from '../components/Menu';
import * as Constants from '../components/Constants';
import Footer from '../components/Footer';
import icon from '../images/parachute_isometric.svg';
import wy_thumb from '../images/wy_macbookgold.png';
import at_thumb from '../images/at/at_laptop.png';
import jaxx_thumb from '../images/jaxx_laptop.png';
import dc_thumb from '../images/dc_laptop.png';
import n2_thumb from '../images/n2_laptop.png';
import sfs_thumb from '../images/sfs_laptop.png';
import copetin_thumb from '../images/copetin_laptop.png';
import bhs_thumb from '../images/bhs_laptop.png';
import wake from '../images/wakenbake_yellow.jpg';
import emo from '../images/em_card_dark.jpg';
import aimee from '../images/aimee_card.jpg';
import bhs from '../images/bhs_lights.jpg';
import wiwp from '../images/wiwp_flyer_dark.jpg';


export class projects extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
    render() {
        return (
          <motion.div 
          initial="initial"
          animate="enter" 
          exit="exit"
          variants={Constants.aboutVariants}>
            <Head>
                <title>Andrew Mason | Projects</title>
            </Head>
            <Menu bg="rainbow" variant="dark" />
            <Container id="projects" fluid className="bg-smoke pb-4">
            <Row className="bg-rainbow">
              <Col className="align-center min-100 p-5">
                <motion.div variants={Constants.textVariants}>
                  <img 
                  style={{borderRadius: '20%', width: '250px', height: '250px'}}
                  className="drop-shadow bg-pink p-2" 
                  src={icon} />
                  <h1 className="page_title text-light drop-shadow mt-2">
                    projects
                  </h1>
                  </motion.div>
                  <motion.div variants={Constants.backVariants}>
                    <h5 className="small text-light text-uppercase">
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
              href="/projects/warrenyen"
              >
                <Link href="/projects/warrenyen" scroll={false}>
                  <a>
                    <div className="arrow-btn h3 mt-2 px-3 pb-2 border">⟶</div>
                  </a>
                </Link>
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
                <Link href="/projects/jaxx" scroll={false}>
                  <a>
                    <div className="arrow-btn h3 mt-2 px-3 pb-2 border">⟶</div>
                  </a>
                </Link>
              </ProjectItem>

              <ProjectItem 
              col2Class="p-5"
              cardImgSrc={dc_thumb}
              microTitle="Blockchain Startup"
              cardTitle1="Decentral"
              cardTitle2="Inc."
              cardSubTitle="HTML5, CSS3/SASS, PHP, Javascript, UI/UX/Graphic design"
              cardText="Company website for Toronto blockchain software company Decentral Inc."
              >
                <Link href="/projects/decentral" scroll={false}>
                  <a>
                    <div className="arrow-btn h3 mt-2 px-3 pb-2 border">⟶</div>
                  </a>
                </Link>
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
                <Link href="/projects/at" scroll={false}>
                  <a>
                    <div className="arrow-btn h3 mt-2 px-3 pb-2 border">⟶</div>
                  </a>
                </Link>
              </ProjectItem>

              <ProjectItem 
              col2Class="p-5"
              cardImgSrc={n2_thumb}
              microTitle="Speech Therapy Services"
              cardTitle1="N2 Speech"
              cardTitle2="Therapy"
              cardSubTitle="Wordpress, HTML5, CSS3, PHP, Graphic/UI/UX Design, Copywriting"
              cardText="Product website for Jaxx Liberty, a cryptocurrency wallet app made by Decentral Inc."
              >
                <Link href="/projects/n2" scroll={false}>
                  <a>
                    <div className="arrow-btn h3 mt-2 px-3 pb-2 border">⟶</div>
                  </a>
                </Link>
              </ProjectItem>

              <ProjectItem
              col2Class="p-5"
              cardImgSrc={sfs_thumb}
              microTitle="Jazz Funk Band"
              cardTitle1="Surefire"
              cardTitle2="Sweat"
              cardSubTitle="HTML5, CSS3, Javascript/jQuery, UI/UX/Graphic design"
              cardText="Company website for Toronto blockchain software company Decentral Inc."
              >
                <Link href="/sfs" scroll={false}>
                  <a>
                    <div className="arrow-btn h3 mt-2 px-3 pb-2 border">⟶</div>
                  </a>
                </Link>
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
                <Link href="/projects/bhs" scroll={false}>
                  <a>
                    <div className="arrow-btn h3 mt-2 px-3 pb-2 border">⟶</div>
                  </a>
                </Link>
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
                <Link href="/projects/yvr" scroll={false}>
                  <a>
                    <div className="arrow-btn h3 mt-2 px-3 pb-2 border">⟶</div>
                  </a>
                </Link>
              </ProjectItem>

              {/* graphic design */}
              
              <ProjectItem
              col2Class="p-5"
              cardImgSrc={wake}
              imgClass="p-0 my-4 circle"
              microTitle="Design: Toronto Coffee Company"
              cardTitle1="Wake 'n Bake"
              cardSubTitle="Graphic Design, Logo creation, packaging design"
              cardText="Toronto coffee roaster Wake 'n Bake required a logo, color scheme, and packaging mockups for their new coffee company. The design focused on an 80s-inspired palette of neon primaries which offer a bright, exciting feel, while hinting at established brands such as David's Tea, rock band The Strokes, Google, Microsoft, and NBC."
              >
                <Link href="/projects/yvr" scroll={false}>
                  <a>
                    <div className="arrow-btn h3 mt-2 px-3 pb-2 border">⟶</div>
                  </a>
                </Link>
              </ProjectItem>

              <ProjectItem
              col2Class="p-5"
              cardImgSrc={bhs}
              imgClass="p-0 my-4 circle"
              microTitle="Design: Toronto Funk Band"
              cardTitle1="Big Horn Sheep"
              cardSubTitle="Web development, Graphic Design, Logo creation, poster design"
              cardText="Big Horn Sheep is an instrumental trio blending jazz, funk, EDM, and pop-rock styles. The band required a logo, website graphics, concert posters, album cover art, and social media content. The resulting designs incorporate an atari-influenced, 8-bit video game theme with bold neon colors, a styled ram's head logo, and variations on the theme for social media content."
              >
                <Link href="/projects/yvr" scroll={false}>
                  <a>
                    <div className="arrow-btn h3 mt-2 px-3 pb-2 border">⟶</div>
                  </a>
                </Link>
              </ProjectItem>

              <ProjectItem
              col2Class="p-5"
              cardImgSrc={emo}
              imgClass="p-0 my-4 circle"
              microTitle="Design: EMO Video Production"
              cardTitle1="EMO Productions"
              cardSubTitle="Graphic Design, Business cards"
              cardText="Toronto drummer and music instructor Ed Mortenson required business card designs for his performing, teaching, and video production services, as well as for his side hustle driving for Uber. He requested a design that combined equal parts brooding edgy rock, with the clean, trustworthy lines of a professional business."
              >
                <Link href="/projects/yvr" scroll={false}>
                  <a>
                    <div className="arrow-btn h3 mt-2 px-3 pb-2 border">⟶</div>
                  </a>
                </Link>
              </ProjectItem>

            </Container>
            <Footer />
        </motion.div>
        )
    }
}

export default projects;
