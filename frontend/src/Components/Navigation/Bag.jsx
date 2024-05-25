import React, { Component } from 'react'
import './cart-style.css'
import '../Product Page/details-style.css'


export default class Bag extends Component {
    constructor(props) {
        super(props)
        this.state = {
            numberOfItems:0,
            Items:[],
        }
    }
    
    setItems =()=>{
        const SelectedItems = this.props.SelectedItems
        if(SelectedItems){
            SelectedItems.map(ele =>{
                for(let i = SelectedItems.length -1 ; i>=0 ; i--){
                    if(SelectedItems[i].item === ele.item && SelectedItems[i].value !== ele.value){
                        let arr = {
                            id:SelectedItems[i].item,
                            attributes:[
                                {name:SelectedItems[i].name,value:SelectedItems[i].value}
                                ,{name:ele.name,value:ele.value}
                            ]
                        }
                        this.setState((prev)=>({
                            Items:[...prev.Items, arr]
                        }))
                    }  
                }
            })
        }
    }
    
    render() {
        const {arrayOfAtrributes,Products, SelectedItems} = this.props
        const handleCardItems = () =>{

        }
        let numberOfItems = this.state.numberOfItems
        return (
            <div className='cart'>
                <div className='bag-count'><h2>My Bag, {numberOfItems }</h2></div>
                <div className='bag-contant'></div>
                <div className='total'></div>
                <button className='place-order'></button>
            </div>
        )
    }
}
