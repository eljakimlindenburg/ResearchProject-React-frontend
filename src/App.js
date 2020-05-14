import React from 'react';
import { Switch, Route } from 'react-router-dom';

import IndexPage from "./pages/indexpage/indexpage.component";
import DetailPage from "./pages/detailpage/detailpage.component";
import CustomHeader from './shared/customheader/customheader.component';
import ShoppingCart from "./pages/shoppingcart/shoppingcart.component";
import MainLayout from "./shared/mainlayout/mainlayout.component";

class App extends React.Component {
    render()
    {
        return (
                <MainLayout/>
        );
    }
}

export default App;
