import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Button extends Component {

    static propTypes = {
        handler: PropTypes.func.isRequired,
        text: PropTypes.string.isRequired
    }

    shouldComponentUpdate(nextProps) {
        if (nextProps.text === this.props.text) {
            return false;
        }

        return true;
    }

    render() {
        return (
            <div>
                <div>
                    <button onClick={this.props.handler} id="button">{this.props.text}</button>
                </div>
            </div>
        )
    }
}

export default Button;