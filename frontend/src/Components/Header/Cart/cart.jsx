import {React, Component} from 'react'
import trolley from './../../../assets/trolley.png'
import './cart-style.css'
import Bag from './Bag';

class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isExpand:false,
      SelectedItems:[],
      Items:[],
    };
  }
  /* componentDidUpdate(prevProps, prevState){
      if(prevState.SelectedItems !== this.state.SelectedItems ){
          
      }
  } */
  componentDidMount(){
    this.setSelectedItems()
  }
  componentDidUpdate(prevProps, prevState){
    if(prevProps.arrayOfAtrributes !== this.props.arrayOfAtrributes){
      this.props.arrayOfAtrributes.map(attribute => {
          return localStorage.setItem(`${attribute.item}~${attribute.name}`, JSON.stringify(attribute));
      })
  }
  }
  setSelectedItems = (ele) =>{
    const attributes = this.props.arrayOfAtrributes;
    const SelectedItems = this.state.SelectedItems

    attributes.map(attribute =>{
        if(SelectedItems.filter(Item => Item.item === attribute.item).length ===0){
          this.setState((prev)=>({
            SelectedItems:[...prev.SelectedItems,
              JSON.parse(localStorage.getItem(`${attribute.item}~${attribute.name}`))
            ]
          }))
        }
    })
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
  setExpand = (state) =>{
    this.setState(() =>({
      isExpand:state
    }));
  }
  render() {
    const {arrayOfAtrributes, Products} = this.props
    let isExpand = this.state.isExpand
    const handleChageExpandState = () =>{
      this.setExpand(!isExpand);
    }
    return (
      isExpand ? 
        <>
          <img
            alt='icon'
            src={trolley}
            className='trolley'
            onClick={() => handleChageExpandState()}
          />
          <Bag 
            arrayOfAtrributes={arrayOfAtrributes} 
            Products={Products}
            SelectedItems={this.state.SelectedItems}
          />
          <div className='cart-background'></div>
        </>
      :
        <img
          alt='icon'
          src={trolley}
          className='trolley'
          onClick={() => handleChageExpandState()}
        />
    );
  }
}


export default Cart