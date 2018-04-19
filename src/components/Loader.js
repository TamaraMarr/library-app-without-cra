import React, { Component } from 'react';

import styles from "./Loader.css";

export default class Loader extends Component {

    render() {
        return (
            <div className="container">
                <div className="row">
                    <img src="https://i.giphy.com/media/xUOwG8l3u3IF5awt9u/giphy.webp" className={`col s6 offset-s3 ${styles.loader}`} />
                </div>
            </div>
        )
    }
}
