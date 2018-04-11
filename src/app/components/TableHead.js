import React, { Component } from "react";
import PropTypes from "prop-types";

import HeaderCell from "Components/HeaderCell";

export default class TableHead extends Component {
    constructor(props) {
        super(props);
    }

    static propTypes = {
        content: PropTypes.array.isRequired
    }

    render() {
        return (
            <thead>
                <tr>
                    {this.props.content.map((title, index) => {
                        return <HeaderCell content={title} key={index} />
                    })}
                </tr>
            </thead>
        )
    }
}