import React from "react";

export const NavigationMenu = () => (
    <div>
        <div className="top-row pl-4 navbar navbar-dark">
            <a className="navbar-brand" href="">Blazor</a>
            <button className="navbar-toggler" @onclick="ToggleNavMenu">
            <span className="navbar-toggler-icon"></span>
            </button>
        </div>
        <div class="@NavMenuCssClass" @onclick="ToggleNavMenu">
            <ul class="nav flex-column">
                <li class="nav-item px-3">
                    <NavLink class="nav-link" href="" Match="NavLinkMatch.All">
                        <span class="oi oi-home" aria-hidden="true"></span> Home
                    </NavLink>
                </li>
                <li class="nav-item px-3">
                    <NavLink class="nav-link" href="counter">
                        <span class="oi oi-plus" aria-hidden="true"></span> Counter
                    </NavLink>
                </li>
                <li class="nav-item px-3">
                    <NavLink class="nav-link" href="fetchdata">
                    <span class="oi oi-list-rich" aria-hidden="true"></span> Fetch data
                    </NavLink>
                </li>
            </ul>
        </div>
    </div>
);