import Head from 'next/head';
import Link from 'next/link';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Menu from '../components/Menu';
import { motion } from 'framer-motion';

let easing = "backInOut";

const imageVariants = {
  exit: { 
      y: 150, 
      opacity: 0, 
      transition: { 
        duration: 0.5, 
        ease: easing } 
    },
  enter: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.5,
      when: "beforeChildren",
      ease: easing
    }
  }
};

const textVariants = {
  exit: { 
    y: 100, 
    opacity: 0, 
    transition: { 
      duration: 0.5, 
      staggerChildren: 0.5,
      ease: easing }
     },
  enter: {
    y: 0,
    opacity: 1,
    transition: { delay: 0.1, duration: 0.5, ease: easing }
  }
};

const backVariants = {
  exit: {
    x: 100,
    opacity: 0,
    transition: {
      duration: 0.5,
      staggerChildren: 0.5,
      ease: easing
    }
  },
  enter: {
    x: 0,
    opacity: 1,
    transition: {
      delay: 0.5,
      duration: 0.5,
      ease: easing
    }
  }
};

const container = {
  hidden: { 
    opacity: 0,
    y: 100
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.8
    }
  }
}

const item = {
  hidden: { opacity: 0 },
  show: { opacity: 1 }
}

export default function Home() {
  return (
    <motion.div initial="exit" animate="enter" exit="exit" variants={imageVariants}>
      <Menu navClass="bg-smoke" variant="light" fixed-top />
          <Container fluid>
            <Row className="bg-smoke">
              <Col className="align-left min-100 p-5 ">
                <motion.div variants={textVariants}>
                  <h1 className="site-title rainbow-text-2">
                    MASON
                  </h1>
                  </motion.div>
                  <motion.div variants={backVariants}>
                    <h2 className="site-subtitle">Designer. Developer. Writer.</h2>
                  </motion.div>
              </Col>
          </Row>
      </Container>
    </motion.div>
  )
}
