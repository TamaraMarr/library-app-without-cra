import React from 'react';
import { Switch, Route } from 'react-router-dom';

import FreeBooks from "Pages/FreeBooks";
import SingleBookPage from "Pages/SingleBookPage";

export const Books = () => {
    return (
        <Switch>
            <Route exact path="/books" component={FreeBooks} />
            <Route path="/books/:id" component={SingleBookPage} />
        </Switch>
    )
}