import React, { Component } from 'react'
import './cart-style.css';
import Product from './product';


export default class Bag extends Component {
    constructor(props) {
        super(props)
        this.state = {
            numberOfItems:0,
            Items:[],
        }
    }
    componentDidMount(){
        // this.setItems()
    }
    
    setItems =()=>{
        const SelectedItems = JSON.parse(localStorage.getItem('selectedItems')) || this.props.SelectedItems
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
        const {arrayOfAttributes, SelectedItems, selectedProductId} = this.props
        const handleCardItems = () =>{

        }
        let numberOfItems = arrayOfAttributes.length || 0;
        return (
            <div className='cart'>
                <h2 className='bag-count'>My Bag, <span className='count'>{numberOfItems}</span></h2>
            {arrayOfAttributes.map((array) => {
                return(
                        
                        <div className='bag-contant'>
                            <Product selectedProductId={array[0].item} selectedAttributes={array} />
                        </div>
                            
                );
            })}
                <div className='total'></div>
                <button className='place-order'>Place Order</button>
            </div>

        )
    }
}
