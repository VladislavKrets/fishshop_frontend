import React from 'react';
import './App.css';
import {Route, Switch} from "react-router-dom";
import { BrowserRouter as Router } from 'react-router-dom'
import Main from "./Panels/Main/Main";
import Products from "./Panels/Products/Products";
import Contacts from "./Panels/Contacts/Contacts";
import Admin from "./Panels/Admin/Admin";
import Basket from "./Panels/Basket/Basket";
import CurrentProduct from "./Panels/CurrentProduct/CurrentProduct";
import ErrorPanel from "./Panels/ErrorPanel/ErrorPanel";

function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Main}/>
                <Route path="/products/:id" component={CurrentProduct}/>
                <Route exact path="/products/" component={Products}/>
                <Route exact path="/contacts/" component={Contacts}/>
                <Route exact path="/basket/" component={Basket}/>
                <Route exact path="/manage/" component={Admin}/>
                <Route path="*" component={ErrorPanel}/>
            </Switch>
        </Router>
    );
}

export default App;
