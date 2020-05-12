import React from "react";
import {Link} from "react-router-dom";

const navMenu = () => (
<div>
    <div className="top-row pl-4 navbar navbar-dark">
        <a className="navbar-brand" href="">React</a>
        <button className="navbar-toggler" onClick="ToggleNavMenu">
            <span className="navbar-toggler-icon"></span>
        </button>
    </div>
    <div onClick="ToggleNavMenu">
        <ul className="nav flex-column">
            <li className="nav-item px-3">
                <Link class="nav-link" href="">
                    <span className="oi oi-home" aria-hidden="true"></span> Home
                </Link>
            </li>
            <li className="nav-item px-3">
                <Link className="nav-link" href="counter">
                    <span className="oi oi-plus" aria-hidden="true"></span> Counter
                </Link>
            </li>
            <li className="nav-item px-3">
                <Link className="nav-link" href="fetchdata">
                    <span className="oi oi-list-rich" aria-hidden="true"></span> Fetch data
                </Link>
            </li>
        </ul>
    </div>
</div>
);

export default navMenu;