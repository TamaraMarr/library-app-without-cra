import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Cell extends Component {
    constructor(props) {
        super(props);
    }


    static propTypes = {
        content: PropTypes.string.isRequired
    }

    static defaultProps = {
        content: "no content"
    }

    render() {
        return (
            <td>{this.props.content}</td>
        )
    }
}