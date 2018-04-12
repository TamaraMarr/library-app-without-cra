import React, {
    Component, Fragment
} from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from "Common/Header";
import Footer from "Common/Footer";
import MainPage from "Pages/MainPage";
import SingleBookPage from "Pages/SingleBookPage";
import ContactPage from "Pages/ContactPage";
import { Books } from "Routes/Books";

import "App/App.css";

export default class App extends Component {
    render() {
        return (
            <Fragment>
                <Header />
                <main>
                    <Switch>
                        <Route exact path="/" component={MainPage} />
                        <Route path="/books" component={Books} />
                        <Route path="/contact" component={ContactPage} />
                    </Switch>
                </main>
                <Footer />  
            </Fragment>
        )
    }
}