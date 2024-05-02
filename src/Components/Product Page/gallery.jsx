import React, { Component } from 'react'
import './product-page-style.css'

class Gallery extends Component {
    constructor(props) {
        super(props)
        this.state = {
            imageIndex:0,
        }
    }
    render() {
        const {Product} = this.props ;

        if(Product){
            return (
                <div className='gallery product-contanier'>
                    <div className='images-overview'>
                    {Product.gallery.map(url =>{
                        return(<img className='product-images' alt='Product' src={url}/>);
                    })}
                    </div>
                    <div className='slide-show'>
                        <button></button>
                        <img className='main-photo' alt='Product' src={Product.gallery[0]}/>
                        <button></button>
                    </div>
                </div>
            )
        }
        
    }
}

export default Gallery