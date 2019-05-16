import React,{Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Header from './header';
import Home from './home.js';
import Carrito from './Cart';
import Error from './error';
import Menu from './menu'


export default class Router extends Component {
    render() {
        return (
          <BrowserRouter>
            <Header />
            <Menu />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/carrito" component={Carrito}/>
              <Route component={Error} />
            </Switch> 
          </BrowserRouter>
        );
    }
}