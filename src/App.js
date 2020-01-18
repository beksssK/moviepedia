import React, {Fragment} from 'react';
import './App.css';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Home from "./containers/Home/Home";
import Search from "./components/Search/Search";
import Header from "./components/Header/Header";

function App() {
    return (
        <Fragment>
            <BrowserRouter>
                <Header/>
                <Search/>
                <Switch>
                    <Route path='/' exact component={Home}/>
                </Switch>
            </BrowserRouter>
        </Fragment>
    );
}

export default App;
