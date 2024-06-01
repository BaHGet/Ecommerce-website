import React, { Component } from 'react'
import './cart-style.css';

export default class Attribute extends Component {
    render() {
        const {attribute , selectedAttributes} = this.props
        // console.log(attribute, selectedAttributes)
        return (
            <div className='cart-product-attribute'>
                <span>{attribute.id}:</span>
                <ul className={`tags`}>
                    {attribute.items.map((item) => {
                        const selectedValue = selectedAttributes[attribute.id];
                        const selected = selectedValue === item.value;
                        return (
                            attribute.id === "Color" ?
                            (
                                <button
                                    key={item.value}
                                    // onClick={() => this.handleColorChange(item.value)}
                                    className={'cart-color-btn-tag' + (selected ? ' selected-cart-color-btn-tag-overlay' : '')}
                                >
                                    <li
                                        className={`cart-color-tag` } 
                                        style={{ backgroundColor: `${item.value}` }}
                                    ></li>
                                </button>
                            ) : (
                                <button
                                    key={item.value}
                                    // onClick={() => this.handleColorChange(item.value)}
                                    className={'cart-btn-tag' + (selected ? ' selected-cart-btn-tag-overlay' : '')}
                                >
                                    <li
                                        className={`cart-tag` + (selected ? ' selected-cart-tag-overlay' : '')}
                                    >{item.value}</li>
                                </button>
                            )
                        )
                    })}
                </ul>
                
            </div>
        )
    }
}
