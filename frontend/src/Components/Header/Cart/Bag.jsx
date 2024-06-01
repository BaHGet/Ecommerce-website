import React, { Component } from 'react'
import ReactLoading from 'react-loading';
import { Query } from '@apollo/client/react/components';
import { GET_PRODUCT } from './../../../queries';
import './cart-style.css';
import Attribute from './attribute';


export default class Bag extends Component {
    incrementQuantity = (index) => {
        const { cart, updateCart } = this.props;
        const updatedCart = [...cart];
        updatedCart[index].quantity += 1;
        updateCart(updatedCart);
    }
    
    decrementQuantity = (index) => {
        const { cart, updateCart } = this.props;
        const updatedCart = [...cart];
        if (updatedCart[index].quantity > 1) {
            updatedCart[index].quantity -= 1;
        } else {
            updatedCart.splice(index, 1);
        }
        updateCart(updatedCart);
    }
    
    render() {
        const { cart ,totalItems } = this.props;
        const totalPrice = cart.reduce((acc, item) => acc + item.price.replace('$','') * item.quantity, 0);

        return (
            <div className='cart'>
                <h2>My Bag, <span className='count'>{totalItems} {totalItems === 1 ? 'Item' : 'Items'}</span></h2>
                {cart.map((item, index) => (
                    <Query key={index} query={GET_PRODUCT} variables={{ id: item.productId }}>
                        {({ loading, error, data }) => {
                            if (loading) return <ReactLoading type={'balls'} color={'#ffffff'} height={'20%'} width={'20%'} />;
                            if (error) return <p>Error :(</p>;
                            let product = data.product;
                                    return (
                                        <div className='bag-content' key={index}>
                                            <div className='cart-product-details'>
                                                <h2 className='cart-product-name'>{product.name}</h2>
                                                <p className='cart-product-price'>{product.price}</p>
                                                {
                                                    product.attributes.map((attribute)=>{
                                                        
                                                        
                                                        
                                                            return(
                                                                <Attribute key={`${product.id}-${attribute.id}`}  attribute={attribute} selectedAttributes={item.attributes} />
                                                            );
                                                        
                                                    })
                                                }
                                            </div>
                                            <div className='cart-product-quantity'>
                                                <button onClick={() => this.incrementQuantity(index)}>+</button>
                                                <span>{item.quantity}</span>
                                                <button onClick={() => this.decrementQuantity(index)}>-</button>
                                            </div>
                                            <img src={product.gallery[0]} alt="Product" className='cart-product-image' />
                                        </div>
                                    );
                        }}</Query>
                ))}
                <div className='total'>
                <h3>Total: </h3>
                <span>${Number.parseFloat(totalPrice).toFixed(2)}</span>
                </div>
                <button className='place-order' onClick={() => (localStorage.clear(), window.location.pathname = '/')}>Place Order</button>
            </div>
        )
    }
/* 


*/
}
