import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Product from './Product';
import Title from './Title';
import Navbar from './Navbar';
import {ProductConsumer} from '../context';

export default class AddProduct extends Component {
    render() {
        return(
            <div className="addProducto">

            <form action='/addProduct'  enctype="multipart/form-data" method="POST">
            <button type="submit" value="Submit">Publicar</button>            

            <h4>TÍTULO</h4>
            <input type="text" name="titulo" className="text" placeholder="E.j. Poly Station 4"></input>
            <h4 type="text">PRECIO</h4>
            <input type="text" name="precio" className="text" placeholder="$MXN 00.00"></input>
            <h4 type="text">DESCRIPCIÓN</h4>
            <input type="text" name="descripcion" className="text" placeholder="Escribe una breve descripción del producto."></input>
            <input type="file" name="imagen" accept="image/*" className="text"></input>
            
            </form>
            </div>
            
        )
    }
}