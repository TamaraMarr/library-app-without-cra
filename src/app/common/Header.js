import React from "react";
import { Navbar, NavItem, Icon } from "react-materialize";
import "Common/Header.css";

const Header = (props) => {
    return (
        <header>
            <div className="container-fluid">
                <div className="row">
                    <Navbar brand={<img src="https://www.shareicon.net/data/256x256/2016/09/02/823795_book_512x512.png" alt="logo" className="Header_logoImg" />} right className="teal lighten-2">
                        <NavItem href='get-started.html'><Icon>view_module</Icon></NavItem>
                        <NavItem href='get-started.html'><Icon>refresh</Icon></NavItem>
                        <NavItem href='get-started.html'><Icon>more_vert</Icon></NavItem>
                    </Navbar>
                </div>
            </div>
        </header>
    )
}

export default Header;