import React, { Component } from 'react'
import './cart-style.css';

export default class Attribute extends Component {
    render() {
        const {attribute , selectedAttributes} = this.props
        return (
            <div className='cart-product-attribute' data-testid={`cart-item-attribute-${attribute.id.toLowerCase()}`}>
                <span>{attribute.id}:</span>
                <ul className={`tags`}>
                    {attribute.items.map((item) => {
                        const selectedValue = selectedAttributes[attribute.id];
                        const selected = selectedValue === item.value;
                        return (
                            attribute.id === "Color" ?
                            (
                                <span
                                    key={item.value}
                                    className={'cart-color-btn-tag' + (selected ? ' selected-cart-color-btn-tag-overlay' : '')}
                                    data-testid={`cart-item-attribute-color-${item.displayValue}${selected ? '-selected' : ''}`}
                                >
                                    <li
                                        className={`cart-color-tag` } 
                                        style={{ backgroundColor: `${item.value}` }}
                                    ></li>
                                </span>
                            ) : (
                                <span
                                    key={item.value}
                                    className={'cart-btn-tag' + (selected ? ' selected-cart-btn-tag-overlay' : '')}
                                    data-testid={`cart-item-attribute-${attribute.id.toLowerCase()}-${item.displayValue}${selected ? '-selected' : ''}`}
                                >
                                    <li
                                        className={`cart-tag` + (selected ? ' selected-cart-tag-overlay' : '')}
                                    >{item.value}</li>
                                </span>
                            )
                        )
                    })}
                </ul>
                
            </div>
        )
    }
}
