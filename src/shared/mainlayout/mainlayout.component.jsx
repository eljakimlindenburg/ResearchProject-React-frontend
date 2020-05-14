import React from "react";
import { CustomHeader } from "../customheader/customheader.component";
import {Route, Switch} from "react-router-dom";
import IndexPage from "../../pages/indexpage/indexpage.component";
import ShoppingCart from "../../pages/shoppingcart/shoppingcart.component";
import DetailPage from "../../pages/detailpage/detailpage.component";
import NavMenu from "../navmenu/navmenu.component";

export const MainLayout = () => (
    <div>
        <div className="container-fullwidth bg-dark">
            <CustomHeader />
        </div>
        <main className="main">
            <Switch>
                <Route exact path='/' component={IndexPage}/>
                <Route exact path='/shop' component={ShoppingCart} />
                <Route exact path='/detail' component={DetailPage}/>
                <Route path="/detail/:id" component={DetailPage} />
            </Switch>
        </main>
    </div>
);

export default MainLayout;

