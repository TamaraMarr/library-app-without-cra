import React, {Component} from 'react';

const withPropsLog = (WrappedComponent) => {
    return class extends Component {
        componentDidUpdate() {
            /* eslint-disable */
            console.log(this.props)
        }
        render() {
            return <WrappedComponent {...this.props} />
        }
    }
}

export default withPropsLog;