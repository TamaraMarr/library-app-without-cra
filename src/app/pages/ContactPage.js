import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createBooks, addBook } from 'Reducers/books';
import Button from "Components/Button";

class ContactPage extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.handleCreateBooks();
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    {this.props.books.map(book => {
                        return <div key={book}>{book}</div>;
                    })}
                </div>
                <Button handler={() => this.props.handleAddBook(Math.random())} />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        books: state.books
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleCreateBooks: () => {
            dispatch(createBooks());
        },
        handleAddBook: (book) => {
            dispatch(addBook(book));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactPage);