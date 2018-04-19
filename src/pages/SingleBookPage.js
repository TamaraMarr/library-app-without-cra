import React, { Component } from 'react';

import { dataService } from "Services/dataService";
import Loader from "Components/Loader";

import styles from './SingleBookPage.css';

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
        const bookData = this.state.bookData;
        console.log(bookData);

        if (Object.keys(bookData).length === 0 && bookData.constructor === Object) {
            return <Loader />;
        }

        return (
            <div className="container">
                <div className="row">
                    <div className={`${styles.containerBox} col s12 offset-m1 m10 offset-l2 l8`} >
                        <div className="col s12">
                            <div className={styles.cardBox}>
                                <h4 className={styles.title}>{bookData.title ? bookData.title : "No Title Available"}</h4>
                                <h5 className={styles.subtitle}>{bookData.subtitle && bookData.subtitle}</h5>
                                <div className={`${styles.cover} col s12 m6 l5`}>
                                    <img src={bookData.photo} alt="bookPhoto" className={styles.cover} />
                                </div>
                                <div className={`${styles.details} col offset-s1 s10 m6 l7`}>
                                    <p className={styles.author}><span className={styles.authorTag}>Authors: </span>{bookData.authors.length !== 0 ? bookData.authors[0] : "n/a"}</p>
                                    <p><span className={styles.authorTag}>Publishers: </span>{bookData.publisher ? bookData.publisher : "n/a"}</p>
                                    <p><span className={styles.authorTag}>Published: </span>{bookData.publishedDate ? bookData.publishedDate : "n/a"}</p>
                                    <p><span className={styles.authorTag}>{bookData.isbns[0].type}: </span>{bookData.isbns[0].identifier ? bookData.isbns[0].identifier : "n/a"}</p>
                                    <p><span className={styles.authorTag}>{bookData.isbns[1].type}: </span>{bookData.isbns[1].identifier ? bookData.isbns[0].identifier : "n/a"}</p>
                                    <p><span className={styles.authorTag}>Categories: </span>{bookData.categories ? bookData.categories : "n/a"}</p>
                                    <p><span className={styles.authorTag}>Language: </span>{bookData.language ? bookData.language : "n/a"}</p>
                                    <p><span className={styles.authorTag}>Pages: </span>{bookData.pageCount ? bookData.pageCount : "n/a"}</p>
                                </div>
                                <div className={styles.descriptionDiv}>
                                    <h5>About the Book</h5>
                                    <p className={styles.description}>{bookData.description}</p>
                                </div>
                            </div>
                        </div>
                        <div className={styles.avgRatingDiv}>
                            <span>Average rating: {bookData.averageRating ? bookData.averageRating : "n/a"}</span>
                            <span>/ Number of ratings: {bookData.ratingsCount ? bookData.ratingsCount : "n/a"}</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
