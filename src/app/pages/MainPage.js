import React, { Component } from 'react';

import { dataService } from "../../services/dataService";
import BookItem from "Components/BookItem";
import "Components/BookItem.css";

class MainPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            bookData: [],
            searchQuery: "",
            searchType: ""
        }
    }

    getSearchQuery = (event) => {
        this.setState({
            searchQuery: event.target.value
        })
    }

    getSearchType = (event) => {
        this.setState({
            searchType: event.target.name
        })
    }

    sendSearchRequest = async () => {
        const bookData = await dataService.searchVolumes(this.state.searchType, this.state.searchQuery);

        this.setState({
            bookData
        })
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col s12 m6 l8 input-field">
                        <input type="text" value={this.state.searchQuery} onChange={this.getSearchQuery} placeholder="Search" />
                    </div>
                    <div className="col s6 m3 l2">
                        <a className='dropdown-button btn App_dropdown' data-activates='searchDropdown'>Choose Category</a>
                        <ul id='searchDropdown' className='dropdown-content'>
                            <li><a name="intitle" onClick={this.getSearchType}>Title</a></li>
                            <li><a name="inauthor" onClick={this.getSearchType}>Author</a></li>
                            <li><a name="inpublisher" onClick={this.getSearchType}>Publisher</a></li>
                            <li><a name="subject" onClick={this.getSearchType}>Subject</a></li>
                            <li><a name="isbn" onClick={this.getSearchType}>ISBN</a></li>
                        </ul>
                    </div>
                    <div className="col s6 m3 l2">
                        <input type="button" value="Search" onClick={this.sendSearchRequest} className="btn App_searchButton" />
                    </div>
                    <div className="col s12">
                        {this.state.bookData.map(book => <BookItem key={book.id} bookData={book} />)}
                    </div>
                </div>
            </div>
        )
    }
}

export default MainPage;