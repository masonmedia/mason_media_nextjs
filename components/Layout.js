import React, { Component } from 'react';
import Head from 'next/head';
import Container from 'react-bootstrap/Container';
import Menu from '../components/Menu';
import Footer from '../components/Footer';
import * as Constants from '../components/Constants';

export class Layout extends Component {
    render() {
        return (
            <>
                <Head>
                    <title>Mason Media | {this.props.metaTitle}
                    </title>
                    <meta name="description" content={this.props.metaD} />  
                </Head>
                <Menu 
                bg={this.props.bg} 
                variant={this.props.variant}  
                />
                <Container 
                id={this.props.id}
                className={`${this.props.containerClass}`}
                // fade-in-bottom
                fluid>
                    {this.props.children}
                </Container>
                <Footer />
            </>
        )
    }
}

export default Layout
