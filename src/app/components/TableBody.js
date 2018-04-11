import React, { Component } from "react";
import PropTypes from "prop-types";

import Row from "Components/Row";

export default class TableBody extends Component {
    constructor(props) {
        super(props);
    }

    
    static propTypes = {
        content: PropTypes.array.isRequired
    }

    render() {
        return (
            <tbody>
                {this.props.content.map((content, index) => {
                    return <Row content={content} key={index} />
                })}
            </tbody>
        )
    }
}