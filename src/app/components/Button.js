import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createBooks } from 'Reducers/books';

class Button extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <input type="button" value="Submit" onClick={this.props.handler} />
            </div>
        )
    }
}

export default Button;