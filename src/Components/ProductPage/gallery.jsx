import React, { Component } from 'react'
import './gallery-style.css'

class Gallery extends Component {
    constructor(props) {
        super(props)
        this.state = {
            gallaryLength:0,
            imageIndex:0,
            cart:''
        }
    }
    componentDidMount(){
        const {Product} = this.props
        this.setGalleryArrayLength(Product.gallery.length)
    }
    setGalleryArrayLength = (index) =>{
        this.setState(()=>({
            gallaryLength:index,
        }))
    }
    setImageIndex = (index) =>{
        this.setState(()=>({
            imageIndex:index,
        }));
    }
    
    render() {
        const {Product} = this.props ;
        const handleIncrementImageIndex = (index,length) =>{
            if(index < length-1){
                this.setImageIndex(index+1)
            }
            else{
                this.setImageIndex(0)
            }
        }
        const handleDiscrementImageIndex = (index,length) =>{
            if(index > 0){
                this.setImageIndex(index-1)
            }
            else{
                this.setImageIndex(length-1)
            }
        }
        const handleImageSwap = (num) => {
            this.setImageIndex(num)
        }
        if(Product){
            
            return (
                <div className='gallery product-contanier' data-testid='product-gallery'>
                    <div className='side-overview'>
                    {Product.gallery.map((url,num) =>{
                        return(<img key={num} className={`product-images ${this.state.imageIndex === num ? 'selected-img' : ''}`} alt='Product' src={url} onClick={()=> handleImageSwap(num)}/>);
                    })}
                    </div>
                    <div className='slide-show'>
                        {this.state.gallaryLength ===1? '':
                            <div className='slide-show-btns'>  
                                <button className='left-slide-show-btn' onClick={()=> handleDiscrementImageIndex(this.state.imageIndex,Product.gallery.length)}></button>
                                <button className='right-slide-show-btn' onClick={()=> handleIncrementImageIndex(this.state.imageIndex,Product.gallery.length)}></button>
                            </div>
                            }
                        <img className='main-photo' alt='Product' src={Product.gallery[this.state.imageIndex]}/>
                    </div>
                </div>
            )
        }
        
    }
}

export default Gallery