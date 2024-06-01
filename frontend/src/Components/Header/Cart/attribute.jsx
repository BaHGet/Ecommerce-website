import React, { Component } from 'react'
import './cart-style.css';

export default class Attribute extends Component {
    render() {
        const {id ,attribute , selectedAttributes} = this.props
        // console.log(attribute.items, selectedAttributes[0])
        return (
            <div className='cart-product-attribute'>
                <span>{attribute.id}:</span>
                <ul className={`tags`}>
                    {attribute.items.map((item) => {
                        let currentSelectedAttributeValue = selectedAttributes.filter(selectedAttribute => (selectedAttribute.name === attribute.id))[0].value
                        let selected = (currentSelectedAttributeValue === item.value) ? true :  false
                        // console.log(selected)
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
