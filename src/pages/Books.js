import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getBooks } from 'Reducers/books';
import Loader from "Components/Loader";
import BookItem from "Components/BookItem";

class Books extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount = async () => {
        const bookData = await this.props.getBooks(this.props.searchType, this.props.searchQuery);
    }

    render() {
        if (!this.props.books || this.props.books.length === 0) {
            return <Loader />
        }

        return (
            <div className="container">
                <div className="row">
                    <div className="col s12">
                        {this.props.books.map(book => <BookItem key={book.id} bookData={book} />)}
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        searchType: state.searchType,
        searchQuery: state.searchQuery,
        books: state.books
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getBooks: (searchType, searchQuery) => {
            dispatch(getBooks(searchType, searchQuery))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Books);
