import React, { Component } from 'react';
import Link from 'next/link';

export class LinkComponent extends Component {
    render() {
        return (
            <Link href={this.props.linkHref} scroll={false}>
                <a>
                    <div className="arrow-btn h3 mt-2 px-3 pb-2 border">⟶</div>
                </a>
            </Link>
        )
    }
}

export default LinkComponent;
