import React from 'react';
import { NavLink } from 'react-router-dom';

export const CustomHeader = () => (
    <nav className="navbar">
        <div className="container">
            <NavLink to="/" className="nav-link text-light" href="">
                Webstore
            </NavLink>

            <form className="form-inline my-2 my-lg-0">
                <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>

            <NavLink to="/shoppingcart" className="nav-link text-light" href="ShoppingCart">
                <i className="fas fa-2x fa-shopping-cart float-right text-white"/>
            </NavLink>
        </div>
    </nav>
);

