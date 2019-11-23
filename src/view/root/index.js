import React from "react";

import { BrowserRouter, Route, Switch } from "react-router-dom";

import Menu from "../../components/menu";
import Antipasti from "../antipasti";

function Root() {
    return (
        <BrowserRouter>
            <Menu />
            <Switch>
                <Route exact path="/">
                    <div>Home</div>
                </Route>
                <Route path="/antipasti">
                    <Antipasti />
                </Route>
            </Switch>
        </BrowserRouter>
    );
}

export default Root;
