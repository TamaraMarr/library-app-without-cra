import React, { Component } from 'react';

import { connect } from 'react-redux';
import { getFreeBooks } from 'Reducers/books';

class AllBooks extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
       this.props.getFreeEBooks();
    }

    render() {
        /* eslint-disable */
        console.log(this.props.freeBooks);
        console.log(this.props.status);
        return (
            <div className="container">
                <div className="row">
                HI
                    {/* {this.props.freeBooks.map(book => {
                        return <div>{book.title}</div>
                    })} */}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log('state', state);
    return {
        freeBooks: state.freeBooks,
        status: state.status
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getFreeEBooks: () => {
            dispatch(getFreeBooks())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AllBooks);