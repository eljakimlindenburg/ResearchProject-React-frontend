import React from "react";
import { Link } from "react-router-dom";

const customHeader = () => (
    <nav className="navbar">
        <div className="container">
            <Link to="/" className="nav-link text-light" href="">
                Webstore
            </Link>

            <form className="form-inline my-2 my-lg-0">
                <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
            <Link to="/" className="nav-link text-light" href="ShoppingCart">
                <i className="fas fa-2x fa-shopping-cart float-right text-white"></i>
            </Link>
        </div>
    </nav>
);

export default customHeader;

