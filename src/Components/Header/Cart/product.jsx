import React, { Component } from 'react'
import { Query } from '@apollo/client/react/components';
import { GET_PRODUCT } from './../../../queries';
import './cart-style.css';
import Attribute from './attribute';

export default class Product extends Component {
    constructor(props) {
        super(props)
        this.state = {
            quantity:1
        }
        
    }
    setIncrementQuantity = ()=>{
        this.setState((prev)=>({
            quantity:prev.quantity+1
        }))
    }
    setDecrementQuantity = ()=>{
        if(this.state.quantity >=1){
            this.setState((prev)=>({
                quantity:prev.quantity-1
            }))
        }
    }
    render() {
        const {selectedProductId, selectedAttributes} = this.props

        return (
            <Query query={GET_PRODUCT} variables={{id:selectedProductId}}>
                {({ loading, error, data }) => {
                    if (loading) return <p>Loading...</p>;
                    if (error) return <p>Error :(</p>;

                    (console.log(data))
                    return (
                        <div className='cart-product'>
                            <div className='cart-product-details'>
                                <h2 className='cart-product-name'>{data.product.name}</h2>
                                <p className='cart-product-price'>{data.product.price}</p>
                                {
                                    data.product.attributes.map((attribute)=>{
                                        
                                        return(
                                            <Attribute id={data.product.id} attribute={attribute} selectedAttributes={selectedAttributes} />
                                        );
                                    })
                                }
                            </div>
                            <div className='cart-product-quantity'>
                                <button onClick={this.setIncrementQuantity}>+</button>
                                <span>{this.state.quantity}</span>
                                <button onClick={this.setDecrementQuantity}>-</button>
                            </div>
                            <img
                                src={data.product.gallery[0]} 
                                alt="Product"
                                className={'cart-product-image'}
                            />
                    </div>
                    );            
                }
                }
            </Query>
        )
    }
}


/* 

\


<div >
    
    <div >
        <span>Color:</span>
        {['lightgreen', 'black', 'darkgreen'].map((c) => (
        <button
            key={c}
            onClick={() => this.handleColorChange(c)}
            
        ></button>
        ))}
    </div>
    <div >
        <button onClick={this.decrementQuantity}>-</button>
        <span>{}</span>
        <button onClick={this.incrementQuantity}>+</button>
    </div>
    <img
        src="path_to_image" // replace with the correct path to the image
        alt="Product"
        
    />
</div>
</>

*/