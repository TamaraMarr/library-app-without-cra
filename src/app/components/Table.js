import React, { Component } from "react";
import PropTypes from "prop-types";

import TableHead from "Components/TableHead";
import TableBody from "Components/TableBody";

export default class Row extends Component {
    constructor(props) {
        super(props);
    }

    static propTypes = {
        headers: PropTypes.array.isRequired,
        rows: PropTypes.array.isRequired
    }

    render() {
        return (
            <table>
                <TableHead content={this.props.headers} />
                <TableBody content={this.props.rows} />
            </table>
        )
    }
}