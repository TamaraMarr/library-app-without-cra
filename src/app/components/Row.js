import React, { Component } from "react";
import PropTypes from "prop-types";

import Cell from "Components/Cell";

export default class Row extends Component {
    constructor(props) {
        super(props);
    }

    static propTypes = {
        content: PropTypes.array.isRequired
    }

    render() {
        return (
            <tr>
                {this.props.content.map((cellContent, index) => {
                    return <Cell content={cellContent} key={index} />
                })}
            </tr>
        )
    }
}