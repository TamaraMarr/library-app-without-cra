import React from 'react';
import { Switch, Route } from 'react-router-dom';

import AllBooks from "Pages/AllBooks";
import SingleBookPage from "Pages/SingleBookPage";

export const Books = () => {
    return (
        <Switch>
            <Route exact path="/books" component={AllBooks} />
            <Route path="/books/:id" component={SingleBookPage} />
        </Switch>
    )
}