import React, { Component } from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import Container from 'react-bootstrap/Container';
import Menu from '../components/Menu';
import Footer from '../components/Footer';
import * as Constants from '../components/Constants';

export class Layout extends Component {
    render() {
        return (
            <motion.div
            initial="exit"
            animate="enter" 
            exit="exit"
            variants={Constants.imageVariants}>
                <Head>
                    <title>Mason Media | {this.props.metaTitle}
                    </title>
                    {this.props.description ? <meta name="description" content={this.props.metaD} /> : ''}
                    I am a Toronto based designer, front-end developer and copywriter. I build websites and web applications, design UIs and imagery, and write and edit copy for a range of formats.  
                </Head>
                <Menu 
                bg={this.props.bg} 
                variant={this.props.variant}  
                />
                <Container 
                id={this.props.id}
                className={this.props.containerClass}
                fluid>
                    {this.props.children}
                </Container>
                <Footer />
            </motion.div>
        )
    }
}

export default Layout
