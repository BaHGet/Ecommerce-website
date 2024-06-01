import React, { Component } from 'react'
import { Query } from '@apollo/client/react/components';
import { GET_PRODUCT } from './../../../queries';
import './cart-style.css';


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
        console.log(totalItems)
    
        return (
            <div className='cart'>
                <h2>My Bag, <span>{totalItems} {totalItems === 1 ? 'Item' : 'Items'}</span></h2>
                {cart.map((item, index) => (
                    <Query key={index} query={GET_PRODUCT} variables={{ id: item.productId }}>
                        {({ loading, error, data }) => {
                            let product = data.product;
                            if (loading) return <p>Loading...</p>;
                            if (error) return <p>Error :(</p>;
                                return (
                                    <div className='bag-content' key={index}>
                                        <div className='cart-product-details'>
                                            <h2>{product.name}</h2>
                                            <p>{product.price}</p>
                                            {Object.entries(item.attributes).map(([name, value]) => (
                                                <p key={name}>{name}: {value}</p>
                                            ))}
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
                <h3>Total: ${totalPrice}</h3>
                </div>
                <button className='place-order' onClick={() => alert('Place Order')}>Place Order</button>
            </div>
        )
    }
}
