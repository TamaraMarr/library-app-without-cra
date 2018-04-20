import React, {
    Component, Fragment
} from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from "Components/Header";
import Footer from "Components/Footer";
import MainPage from "Pages/MainPage";
import Books from "Pages/Books";
import SingleBookPage from "Pages/SingleBookPage";

import styles from "./App.css";

export default class App extends Component {
    render() {
        return (
            <Fragment>
                <Header />
                <main>
                    <Switch>
                        <Route exact path="/" component={MainPage} />
                        <Route path="/book/:id" component={SingleBookPage} />
                        <Route path="/books" component={Books} />
                    </Switch>
                </main>
                <Footer />  
            </Fragment>
        )
    }
}
