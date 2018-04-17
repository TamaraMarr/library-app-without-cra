import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { Navbar, NavItem, Icon } from "react-materialize";

import "Components/Header.css";

export default class Header extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount(){
        $(".button-collapse").sideNav();
    }

    render() {
        return (
            <header>
                <nav>
                    <div className="nav-wrapper teal lighten-2">
                        <Link to="/" className="brand-logo"><img src="https://www.shareicon.net/data/256x256/2016/09/02/823795_book_512x512.png" alt="logo" className="Header_logoImg" /></Link>
                        <a href="#" data-activates="mobile-demo" className="button-collapse"><i className="material-icons">menu</i></a>
                        <ul className="right hide-on-med-and-down">
                            <li><Link to="/">Main</Link></li>
                            <li><Link to="/books">Free Books</Link></li>
                            <li><Link to="/books/13">Book</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                        </ul>
                        <ul className="side-nav" id="mobile-demo">
                            <li><Link to="/">Main</Link></li>
                            <li><Link to="/books">Free Books</Link></li>
                            <li><Link to="/books/13">Book</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                        </ul>
                    </div>
                </nav>
            </header>
        )
    }
}