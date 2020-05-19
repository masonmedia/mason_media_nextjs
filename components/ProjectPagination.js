import React, { Component } from 'react';
import Link from 'next/link';
import Button from 'react-bootstrap/Button';

export class ProjectPagination extends Component {
    render() {
        return (
            <div className="d-flex mt-3">
                <Link href={this.props.href1} scroll={false}>
                    <a><Button 
                    className="mr-2"
                    variant="outline-dark">Previous</Button></a>
                </Link>
                <Link href={this.props.href2} scroll={false}>
                    <a><Button 
                    variant="dark">Next</Button></a>
                </Link>
            </div>
        )
    }
}

export default ProjectPagination;
