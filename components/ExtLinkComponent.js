import React, { Component } from 'react';

export class ExtLinkComponent extends Component {
    render() {
        return (
            <a href={this.props.linkHref} target="_blank">
                <div className="arrow-btn h3 mt-2 px-3 pb-2 border">⟶</div>
            </a>
        )
    }
}

export default ExtLinkComponent;
