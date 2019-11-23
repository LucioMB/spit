import React from "react";

import { Link } from "react-router-dom";

import "./index.css";
//import logo from './imgs/logo.png';

function Menu() {
    return (
        <div className="container">
            <Link to="/">
                <button>Home</button>
            </Link>
            <Link to="/antipasti">
                <button>antipasti</button>
            </Link>
            <button>
                <a href="">Primi</a>
            </button>
            <button>
                <a href="">Secondi</a>
            </button>
            <button>
                <a href="">Contorni</a>
            </button>
            <button>
                <a href="">Vini</a>
            </button>
            <button>
                <a href="">Chi Siamo</a>
            </button>
            <button>
                <a href="">Contattaci</a>
            </button>
        </div>
    );
}

export default Menu;
