import {React, Component} from 'react'
import './product-page-style.css'

const ss={
  "__typename": "Product",
  "attributes": [
      {
          "__typename": "AttributeSet",
          "id": "Size",
          "items": [
              {
                  "__typename": "Attribute",
                  "displayValue": "40",
                  "id": "40",
                  "value": "40"
              },
              {
                  "__typename": "Attribute",
                  "displayValue": "41",
                  "id": "41",
                  "value": "41"
              },
              {
                  "__typename": "Attribute",
                  "displayValue": "42",
                  "id": "42",
                  "value": "42"
              },
              {
                  "__typename": "Attribute",
                  "displayValue": "43",
                  "id": "43",
                  "value": "43"
              }
          ],
          "name": "Size",
          "type": "text"
      }
  ],
  "brand": "Nike x Stussy",
  "category": "clothes",
  "description": "<p>Great sneakers for everyday use!</p>",
  "gallery": [
      "https://cdn.shopify.com/s/files/1/0087/6193/3920/products/DD1381200_DEOA_2_720x.jpg?v=1612816087",
      "https://cdn.shopify.com/s/files/1/0087/6193/3920/products/DD1381200_DEOA_1_720x.jpg?v=1612816087",
      "https://cdn.shopify.com/s/files/1/0087/6193/3920/products/DD1381200_DEOA_3_720x.jpg?v=1612816087",
      "https://cdn.shopify.com/s/files/1/0087/6193/3920/products/DD1381200_DEOA_5_720x.jpg?v=1612816087",
      "https://cdn.shopify.com/s/files/1/0087/6193/3920/products/DD1381200_DEOA_4_720x.jpg?v=1612816087"
  ],
  "id": "huarache-x-stussy-le",
  "inStock": true,
  "name": "Nike Air Huarache Le",
  "prices": [
      {
          "__typename": "Price",
          "amount": 144.69,
          "currency": {
              "__typename": "Currency",
              "label": "USD",
              "symbol": "$"
          }
      }
  ]
}
class ProductPage extends Component {
  render() {
    const {selectedProduct} =this.props
    const Product = selectedProduct[0]
    console.log(Product)
    return (
      <div className='product-contanier'>
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
        <div className='product-details'>
          <h1>{Product.name}</h1>
          {Product.attributes.map((attribute,n) =>{
            return(
              <>
                <h1 key={'attribute'+n}>{attribute.name}</h1>
                <ul>
                  {attribute.items.map((item,n) =>{
                    return(
                      <li key={'item'+n}>{item.value}</li>
                    );
                  })}
                </ul>
              </>
            );
          })}
        </div>
      </div>
    );
  }
}

export default ProductPage