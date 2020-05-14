import React, { Component } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import { motion } from 'framer-motion';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CardLeft from '../components/CardLeft';
import CardRight from '../components/CardRight';
import Menu from '../components/Menu';
import * as Constants from '../components/Constants';
import Footer from '../components/Footer';
import wy_thumb from '../images/wy_macbookgold.png';
import at_thumb from '../images/at_laptop.png';
import jaxx_thumb from '../images/jaxx_laptop.png';
import dc_thumb from '../images/dc_laptop.png';
import n2_thumb from '../images/n2_laptop.png';
import sfs_thumb from '../images/sfs_laptop.png';
import copetin_thumb from '../images/copetin_laptop.png';
import bhs_thumb from '../images/bhs_laptop.png';

export class projects extends Component {
  componentDidMount() {
    document.getElementById("nav").classList.add("bg-rainbow");
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
            <Menu variant="dark" />
            <Container id="projects" fluid className="bg-smoke pb-4">
              <Row className="">
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
              </Row>

              <CardLeft 
              col2Class="p-5"
              cardImgSrc={wy_thumb}
              microTitle="UX/UI/GRAPHIC DESIGNER"
              cardTitle1="Warren"
              cardTitle2="Yen"
              cardSubTitle="HTML5, CSS3/SASS, PHP, Javascript, UX, Parcel Bundler"
              cardText="Portfolio website build for Toronto Designer Warren Yen."
              >
                <Link href="/projects/warrenyen" scroll={false}>
                  <a>
                    <div className="arrow-btn h3 mt-2 px-3 pb-2 border">⟶</div>
                  </a>
                </Link>
              </CardLeft>

              <CardRight 
              col2Class="p-5"
              cardImgSrc={at_thumb}
              microTitle="Healthcare Services"
              cardTitle1="Advance"
              cardTitle2="Therapy"
              cardSubTitle="HTML5, CSS3/SASS, PHP, Javascript, UI/UX/Graphic design"
              cardText="Website for Guelph/KW healthcare services provider Advance Therapy."
              >
                <Link href="/advance" scroll={false}>
                  <a>
                    <div className="arrow-btn h3 mt-2 px-3 pb-2 border">⟶</div>
                  </a>
                </Link>
              </CardRight>

               <CardLeft 
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
              </CardLeft>

              <CardRight 
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
              </CardRight>

              <CardLeft 
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
              </CardLeft>

              <CardRight 
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
              </CardRight>

              <CardLeft 
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
              </CardLeft>

              <CardRight 
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
              </CardRight>
            </Container>
            <Footer />
        </motion.div>
        )
    }
}

export default projects;
