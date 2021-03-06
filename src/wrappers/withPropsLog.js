import React, { Component } from 'react';

const withPropsLog = (WrappedComponent) => {
    return class extends Component {
        componentDidUpdate() {
            console.log(this.props)
        }
        
        render() {
            return <WrappedComponent {...this.props} />
        }
    }
}

export default withPropsLog;
