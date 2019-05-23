import React, { Component } from 'react';
import { ProductConsumer } from '../context';
import {Link} from 'react-router-dom';
import {ButtonContainer} from './Button'

export default class Details extends Component {
  render() {
    return (
      <ProductConsumer>
        {value =>{
          const {id, company, img, info, price, title, inCart} = value.detailProduct;
          return (
            <div className = "container py-5">
              {/*title*/}
              <div className = "row">
                <div className = "col-10 mx-auto text-center text-slanted text-black my-5">
                  <h1>{title}</h1>
                </div>
              </div>
              {/* end title*/}
              
              {/* Product Info*/}
              <div className = "row">
                <div className = "col-10 mx-auto text-center col-md-6 my-3 text-capitalize">
                  <img src={img} className="img-fluid" alt="product"/>
                </div>
                {/* Product Text*/}

                <div className = "col-10 mx-auto text-center col-md-6 my-3 text-capitalize font-weight-bold">
                  <h2>model : {title}</h2>
                  <h4 className = "text-title text-uppercase text-muted mt-3 mb-2">
                    Por: <span className = "text-uppercase">{company}</span>
                  </h4>
                  <h4 className = "text-black text-uppercase text-muted mt-3 mb-2">
                    <strong>
                      <span>$</span>
                      {price}
                    </strong>
                  </h4>
                  <p className="text-muted lead">
                    {info}
                  </p>
                  {/*botones*/}
                  <div>
                    <Link to = '/'>
                      <ButtonContainer>
                        Volver a Inicio
                      </ButtonContainer>
                    </Link>
                    <ButtonContainer cart disabled={inCart?true:false} onClick={()=>{
                      value.addToCart(id);
                      value.openModal(id);
                    }}>
                      {inCart?'inCart':"Agregar al Carrito"}
                    </ButtonContainer>
                  </div>
                    
                </div>
              </div>
            </div>
          )
        }}
      </ProductConsumer>
    )
  }
}
