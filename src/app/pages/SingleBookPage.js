import React, { Component } from 'react';

import { dataService } from "Services/dataService";
import Table from "Components/Table";

import 'Pages/SingleBookPage.css';

export default class SingleBookPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            bookData: {}
        }
    }

    componentDidMount = async () => {
        const bookData = await dataService.getSingleVolume('lwy2UThL4uIC');

        this.setState({
            bookData
        })
    }

    getAverageRating = () => {
        if (typeof this.state.bookData.averageRating !== 'number') {
            return <i className="material-icons">sentiment_dissatisfied</i>
        }

        return this.state.bookData.averageRating;
    }

    render() {
        /* eslint-disable */
        console.log(this.state.bookData)
        return (
            <div className="container">
                <div className="row">
                    <div className="col s8 offset-s2 SingleBookPage_containerDiv">
                        <a className="btn-floating waves-effect waves-light red">{this.getAverageRating()}</a>
                        <img src={this.state.bookData.photo} className="SingleBookPage_image" />
                        <div className="SingleBookPage_bookInfoSection">
                            <span className="card-title">{this.state.bookData.title}</span>
                            <div className="card-content">
                                <p>{this.state.bookData.description}</p>
                            </div>
                        </div>
                    </div>
                    <div className="SingleBookPage_">

                    </div>
                </div>
            </div>
        )
    }
}