import React, { Component } from 'react';

import { dataService } from "Services/dataService";
import Loader from "Components/Loader";

import 'Pages/SingleBookPage.css';

export default class SingleBookPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            bookData: {}
        }
    }

    componentDidMount = async () => {
        const bookData = await dataService.getSingleVolume(this.props.match.params.id);

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
        console.log(this.state.bookData);
        if (Object.keys(this.state.bookData).length === 0 && this.state.bookData.constructor === Object) {
            return <Loader />;
        }

        return (
            <div className="container">
                <div className="row">
                    <div className="col s12 offset-m2 m8">
                        <h2 className="header">{this.state.bookData.title ? this.state.bookData.title : "No Title Available"}</h2>
                        <h3 className="subheader">{this.state.bookData.subtitle && this.state.bookData.subtitle}</h3>
                        <div className="card horizontal">
                            <a className="btn-floating waves-effect waves-light red">{this.getAverageRating()}</a>
                            <div className="card-image">
                                <img src={this.state.bookData.photo} alt="bookPhoto" />
                            </div>
                            <div className="card-stacked">
                                <div className="card-content">
                                    <p>{this.state.bookData.description ? this.state.bookData.description : "No Description Available"}</p>
                                </div>
                                <div className="card-action">
                                    <a href="#">This is a link</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}