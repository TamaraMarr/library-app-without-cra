import React, { Component } from 'react';
import { Dropdown, Button, NavItem } from "react-materialize";
import { connect } from 'react-redux';

import { getSearchType, getSearchQuery } from 'Reducers/books';
import { dataService } from "Services/dataService";
import { validationService } from "Services/validationService";
import Books from "Pages/Books";

import styles from "./MainPage.css";

class MainPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            bookData: [],
            searchQuery: "",
            searchType: "Category",
            showBooks: false,
            queryError: false,
            searchTypeError: false,
            isbnError: false
        }
    }

    getSearchQuery = (event) => {
        this.setState({
            searchQuery: event.target.value
        })
    }

    getSearchType = (event) => {
        this.setState({
            searchType: event.target.innerHTML
        })
    }

    resetErrors = () => {
        this.setState({
            queryError: false,
            searchTypeError: false,
            isbnError: false
        })
    }

    handleEnter = (event) => {
        if (event.key === "Enter") {
            this.sendSearchRequest();
        }
    }

    sendSearchRequest = () => {
        this.resetErrors();

        if (!validationService.validateSearchString(this.state.searchQuery)) {
            this.setState({
                queryError: true
            })
            return;
        }

        if (!validationService.validateSearchType(this.state.searchType)) {
            this.setState({
                searchTypeError: true
            })
            return;
        }

        let searchType;

        if (this.state.searchType === "Title") {
            searchType = "intitle";
        } else if (this.state.searchType === "Author") {
            searchType = "inauthor";
        } else if (this.state.searchType === "Publisher") {
            searchType = "inpublisher";
        } else if (this.state.searchType === "ISBN") {
            if (!validationService.validateISBN(this.state.searchQuery)) {
                this.setState({
                    isbnError: true
                })
                return;
            }
        } else {
            searchType = this.state.searchType.toLowerCase();
        }
        
        this.props.getSearchType(searchType);
        this.props.getSearchQuery(this.state.searchQuery);

        this.setState({
            showBooks: true
        })
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className={`col s12 m6 l8 ${styles.inputField}`}>
                        <input type="text" value={this.state.searchQuery} onChange={this.getSearchQuery} onKeyDown={this.handleEnter} tabIndex="0" placeholder="Search" />
                    </div>
                    <div className="col s6 m3 l2">
                        <Dropdown trigger={
                            <Button className="col s12">{this.state.searchType}</Button>
                        }>
                            <NavItem name="Title" onClick={this.getSearchType}>Title</NavItem>
                            <NavItem name="Author" onClick={this.getSearchType}>Author</NavItem>
                            <NavItem name="Publisher" onClick={this.getSearchType}>Publisher</NavItem>
                            <NavItem name="Subject" onClick={this.getSearchType}>Subject</NavItem>
                            <NavItem name="ISBN" onClick={this.getSearchType}>ISBN</NavItem>
                        </Dropdown>
                    </div>
                    <div className="col s6 m3 l2">
                        <input type="button" value="Search" onClick={this.sendSearchRequest} className={`${styles.categorySearchButton} btn`} />
                    </div>
                    <div className={`col s12 ${styles.errorDiv}`}>
                        {this.state.queryError ? "Please enter a search term." : ""}
                        {this.state.searchTypeError ? "Please choose a category." : ""}
                        {this.state.isbnError ? "Please enter the ISBN number without hyphens." : ""}
                    </div>
                    {this.state.showBooks && <Books searchType={this.state.searchType} searchQuery={this.state.searchQuery} />}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getSearchType: (searchType) => {
            dispatch(getSearchType(searchType))
        },
        getSearchQuery: (searchQuery) => {
            dispatch(getSearchQuery(searchQuery))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
