import React from "react";

import { BrowserRouter, Route, Switch } from "react-router-dom";

import Menu from "../../components/menu";

function Root() {
    return (
        <BrowserRouter>
            <Menu />
            <Switch>
                <Route exact path="/">
                    <div>Home</div>
                </Route>
                <Route path="/antipasti">
                    <div>Antipasti</div>
                </Route>
            </Switch>
        </BrowserRouter>
    );
}

export default Root;
