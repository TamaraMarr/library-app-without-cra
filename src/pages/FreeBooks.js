import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getFreeBooks } from 'Reducers/books';
import Loader from "Components/Loader";
import BookItem from "Components/BookItem";

class FreeBooks extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getFreeEBooks();
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    {this.props.status === "fulfilled"
                        ? this.props.freeBooks.map(book => {
                            return <BookItem bookData={book} key={book.id} />
                        })
                        : <Loader />
                    }
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
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

export default connect(mapStateToProps, mapDispatchToProps)(FreeBooks);
