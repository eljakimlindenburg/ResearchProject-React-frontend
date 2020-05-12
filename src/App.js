import React from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom';

import HomePage from "./pages/index/index.component";
import {DetailPage} from "./pages/detailpage/detailpage.component";
import customHeader from './shared/customheader/customHeader.component';


function App() {
    return (
        <div>
            <customHeader />
            <Switch>
                <Route exact path='/' component={HomePage}></Route>
                <Route path='/detail' component={DetailPage}></Route>
                <Route path='/shop'></Route>
            </Switch>
        </div>
    );
}

export default App;
