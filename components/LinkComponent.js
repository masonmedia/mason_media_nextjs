import React, { Component } from 'react';
import Link from 'next/link';
import Button from 'react-bootstrap/Button';

export class LinkComponent extends Component {
    render() {
        return (
            // <Link href={this.props.linkHref} scroll={false}>
            //     <a>
            //         <div className="arrow-btn relative h3 mt-2 px-3 pb-2 border">⟶</div>
            //     </a>
            // </Link>

            <Link href={this.props.linkHref} scroll={false}>
                <a>
                    <Button 
                    className="relative font-weight-bold mt-2 drop-shadow"
                    variant="outline-light">Read more
                    </Button>
                </a>
            </Link>
        )
    }
}

export default LinkComponent;
