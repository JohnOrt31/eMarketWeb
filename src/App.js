import React,{Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Details from './components/Details';
import Cart from './components/Cart';
import Default from './components/Default';
import AddProduct from './components/addProduct';
import Modal from './components/Modal';


class App extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar/>
                <Switch>
                    <Route exact path = "/" component = {ProductList}></Route>
                    <Route path = "/details" component = {Details}></Route>
                    <Route path = "/cart" component = {Cart}></Route>
                    <Route path = "/addProduct" component = {AddProduct}></Route>
                    <Route ccomponent = {Default}></Route>
                </Switch>
                <Modal/>
            </React.Fragment>
        );
    }
}

export default App;

