import React from 'react';

import {CustomHeader} from "./shared/customheader/customheader.component";
import {Route, Switch} from "react-router-dom";
import IndexPage from "./pages/indexpage/indexpage.component";
import ShoppingCart from "./pages/shoppingcart/shoppingcart.component";
import DetailPage from "./pages/detailpage/detailpage.component";

class App extends React.Component {
    render() {
        return (
            <div>
                <div className="container-fullwidth bg-dark">
                    <CustomHeader />
                </div>
                <main className="main">
                    <Switch>
                        <Route exact path='/' component={IndexPage}/>
                        <Route exact path='/shoppingcart' component={ShoppingCart} />
                        <Route exact path='/detail' component={DetailPage}/>
                        <Route path="/detail/:id" component={DetailPage} />
                    </Switch>
                </main>
            </div>
        );
    }
}

export default App;
