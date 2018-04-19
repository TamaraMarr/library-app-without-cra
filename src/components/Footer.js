import React from "react";

import styles from "./Footer.css";

const Footer = (props) => {
    return (
        <footer className={`${styles.footer} page-footer teal lighten-2`}>
            <p>© 2018 MyLibrary</p>
        </footer>
    )
}

export default Footer;
