import React, { Component } from "react";
import Iframe from "./components/iframe.js";

class MenuBody extends Component {
    constructor(props) {
        super(props);
        this.state = {
            src: "./components/iframe"
        };
    }

    render() {
        return (
            <div className="MenuBody">
                <h1></h1>
                <Iframe source={this.state.src} />
            </div>
        );
    }
}

export default MenuBody;
