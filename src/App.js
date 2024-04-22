import {React, Component} from 'react'
import './App.css';
import Header from './Components/Navigation/header.jsx';
import Category from './Components/categoryPage/category.jsx';

const Products = [
  {
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
  },
  {
      "__typename": "Product",
      "attributes": [
          {
              "__typename": "AttributeSet",
              "id": "Size",
              "items": [
                  {
                      "__typename": "Attribute",
                      "displayValue": "Small",
                      "id": "Small",
                      "value": "S"
                  },
                  {
                      "__typename": "Attribute",
                      "displayValue": "Medium",
                      "id": "Medium",
                      "value": "M"
                  },
                  {
                      "__typename": "Attribute",
                      "displayValue": "Large",
                      "id": "Large",
                      "value": "L"
                  },
                  {
                      "__typename": "Attribute",
                      "displayValue": "Extra Large",
                      "id": "Extra Large",
                      "value": "XL"
                  }
              ],
              "name": "Size",
              "type": "text"
          }
      ],
      "brand": "Canada Goose",
      "category": "clothes",
      "description": "<p>Awesome winter jacket</p>",
      "gallery": [
          "https://images.canadagoose.com/image/upload/w_480,c_scale,f_auto,q_auto:best/v1576016105/product-image/2409L_61.jpg",
          "https://images.canadagoose.com/image/upload/w_480,c_scale,f_auto,q_auto:best/v1576016107/product-image/2409L_61_a.jpg",
          "https://images.canadagoose.com/image/upload/w_480,c_scale,f_auto,q_auto:best/v1576016108/product-image/2409L_61_b.jpg",
          "https://images.canadagoose.com/image/upload/w_480,c_scale,f_auto,q_auto:best/v1576016109/product-image/2409L_61_c.jpg",
          "https://images.canadagoose.com/image/upload/w_480,c_scale,f_auto,q_auto:best/v1576016110/product-image/2409L_61_d.jpg",
          "https://images.canadagoose.com/image/upload/w_1333,c_scale,f_auto,q_auto:best/v1634058169/product-image/2409L_61_o.png",
          "https://images.canadagoose.com/image/upload/w_1333,c_scale,f_auto,q_auto:best/v1634058159/product-image/2409L_61_p.png"
      ],
      "id": "jacket-canada-goosee",
      "inStock": true,
      "name": "Jacket",
      "prices": [
          {
              "__typename": "Price",
              "amount": 518.47,
              "currency": {
                  "__typename": "Currency",
                  "label": "USD",
                  "symbol": "$"
              }
          }
      ]
  },
  {
      "__typename": "Product",
      "attributes": [
          {
              "__typename": "AttributeSet",
              "id": "Color",
              "items": [
                  {
                      "__typename": "Attribute",
                      "displayValue": "Green",
                      "id": "Green",
                      "value": "#44FF03"
                  },
                  {
                      "__typename": "Attribute",
                      "displayValue": "Cyan",
                      "id": "Cyan",
                      "value": "#03FFF7"
                  },
                  {
                      "__typename": "Attribute",
                      "displayValue": "Blue",
                      "id": "Blue",
                      "value": "#030BFF"
                  },
                  {
                      "__typename": "Attribute",
                      "displayValue": "Black",
                      "id": "Black",
                      "value": "#000000"
                  },
                  {
                      "__typename": "Attribute",
                      "displayValue": "White",
                      "id": "White",
                      "value": "#FFFFFF"
                  }
              ],
              "name": "Color",
              "type": "swatch"
          },
          {
              "__typename": "AttributeSet",
              "id": "Capacity",
              "items": [
                  {
                      "__typename": "Attribute",
                      "displayValue": "512G",
                      "id": "512G",
                      "value": "512G"
                  },
                  {
                      "__typename": "Attribute",
                      "displayValue": "1T",
                      "id": "1T",
                      "value": "1T"
                  }
              ],
              "name": "Capacity",
              "type": "text"
          }
      ],
      "brand": "Sony",
      "category": "tech",
      "description": "<p>A good gaming console. Plays games of PS4! Enjoy if you can buy it mwahahahaha</p>",
      "gallery": [
          "https://images-na.ssl-images-amazon.com/images/I/510VSJ9mWDL._SL1262_.jpg",
          "https://images-na.ssl-images-amazon.com/images/I/610%2B69ZsKCL._SL1500_.jpg",
          "https://images-na.ssl-images-amazon.com/images/I/51iPoFwQT3L._SL1230_.jpg",
          "https://images-na.ssl-images-amazon.com/images/I/61qbqFcvoNL._SL1500_.jpg",
          "https://images-na.ssl-images-amazon.com/images/I/51HCjA3rqYL._SL1230_.jpg"
      ],
      "id": "ps-5",
      "inStock": false,
      "name": "PlayStation 5",
      "prices": [
          {
              "__typename": "Price",
              "amount": 844.02,
              "currency": {
                  "__typename": "Currency",
                  "label": "USD",
                  "symbol": "$"
              }
          }
      ]
  },
  {
      "__typename": "Product",
      "attributes": [
          {
              "__typename": "AttributeSet",
              "id": "Color",
              "items": [
                  {
                      "__typename": "Attribute",
                      "displayValue": "Green",
                      "id": "Green",
                      "value": "#44FF03"
                  },
                  {
                      "__typename": "Attribute",
                      "displayValue": "Cyan",
                      "id": "Cyan",
                      "value": "#03FFF7"
                  },
                  {
                      "__typename": "Attribute",
                      "displayValue": "Blue",
                      "id": "Blue",
                      "value": "#030BFF"
                  },
                  {
                      "__typename": "Attribute",
                      "displayValue": "Black",
                      "id": "Black",
                      "value": "#000000"
                  },
                  {
                      "__typename": "Attribute",
                      "displayValue": "White",
                      "id": "White",
                      "value": "#FFFFFF"
                  }
              ],
              "name": "Color",
              "type": "swatch"
          },
          {
              "__typename": "AttributeSet",
              "id": "Capacity",
              "items": [
                  {
                      "__typename": "Attribute",
                      "displayValue": "512G",
                      "id": "512G",
                      "value": "512G"
                  },
                  {
                      "__typename": "Attribute",
                      "displayValue": "1T",
                      "id": "1T",
                      "value": "1T"
                  }
              ],
              "name": "Capacity",
              "type": "text"
          }
      ],
      "brand": "Microsoft",
      "category": "tech",
      "description": "\n<div>\n    <ul>\n        <li><span>Hardware-beschleunigtes Raytracing macht dein Spiel noch realistischer</span></li>\n        <li><span>Spiele Games mit bis zu 120 Bilder pro Sekunde</span></li>\n        <li><span>Minimiere Ladezeiten mit einer speziell entwickelten 512GB NVMe SSD und wechsle mit Quick Resume nahtlos zwischen mehreren Spielen.</span></li>\n        <li><span>Xbox Smart Delivery stellt sicher, dass du die beste Version deines Spiels spielst, egal, auf welcher Konsole du spielst</span></li>\n        <li><span>Spiele deine Xbox One-Spiele auf deiner Xbox Series S weiter. Deine Fortschritte, Erfolge und Freundesliste werden automatisch auf das neue System übertragen.</span></li>\n        <li><span>Erwecke deine Spiele und Filme mit innovativem 3D Raumklang zum Leben</span></li>\n        <li><span>Der brandneue Xbox Wireless Controller zeichnet sich durch höchste Präzision, eine neue Share-Taste und verbesserte Ergonomie aus</span></li>\n        <li><span>Ultra-niedrige Latenz verbessert die Reaktionszeit von Controller zum Fernseher</span></li>\n        <li><span>Verwende dein Xbox One-Gaming-Zubehör -einschließlich Controller, Headsets und mehr</span></li>\n        <li><span>Erweitere deinen Speicher mit der Seagate 1 TB-Erweiterungskarte für Xbox Series X (separat erhältlich) und streame 4K-Videos von Disney+, Netflix, Amazon, Microsoft Movies &amp; TV und mehr</span></li>\n    </ul>\n</div>",
      "gallery": [
          "https://images-na.ssl-images-amazon.com/images/I/71vPCX0bS-L._SL1500_.jpg",
          "https://images-na.ssl-images-amazon.com/images/I/71q7JTbRTpL._SL1500_.jpg",
          "https://images-na.ssl-images-amazon.com/images/I/71iQ4HGHtsL._SL1500_.jpg",
          "https://images-na.ssl-images-amazon.com/images/I/61IYrCrBzxL._SL1500_.jpg",
          "https://images-na.ssl-images-amazon.com/images/I/61RnXmpAmIL._SL1500_.jpg"
      ],
      "id": "xbox-series-s",
      "inStock": false,
      "name": "Xbox Series S 512GB",
      "prices": [
          {
              "__typename": "Price",
              "amount": 333.99,
              "currency": {
                  "__typename": "Currency",
                  "label": "USD",
                  "symbol": "$"
              }
          }
      ]
  },
  {
      "__typename": "Product",
      "attributes": [
          {
              "__typename": "AttributeSet",
              "id": "Capacity",
              "items": [
                  {
                      "__typename": "Attribute",
                      "displayValue": "256GB",
                      "id": "256GB",
                      "value": "256GB"
                  },
                  {
                      "__typename": "Attribute",
                      "displayValue": "512GB",
                      "id": "512GB",
                      "value": "512GB"
                  }
              ],
              "name": "Capacity",
              "type": "text"
          },
          {
              "__typename": "AttributeSet",
              "id": "With USB 3 ports",
              "items": [
                  {
                      "__typename": "Attribute",
                      "displayValue": "Yes",
                      "id": "Yes",
                      "value": "Yes"
                  },
                  {
                      "__typename": "Attribute",
                      "displayValue": "No",
                      "id": "No",
                      "value": "No"
                  }
              ],
              "name": "With USB 3 ports",
              "type": "text"
          },
          {
              "__typename": "AttributeSet",
              "id": "Touch ID in keyboard",
              "items": [
                  {
                      "__typename": "Attribute",
                      "displayValue": "Yes",
                      "id": "Yes",
                      "value": "Yes"
                  },
                  {
                      "__typename": "Attribute",
                      "displayValue": "No",
                      "id": "No",
                      "value": "No"
                  }
              ],
              "name": "Touch ID in keyboard",
              "type": "text"
          }
      ],
      "brand": "Apple",
      "category": "tech",
      "description": "The new iMac!",
      "gallery": [
          "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/imac-24-blue-selection-hero-202104?wid=904&hei=840&fmt=jpeg&qlt=80&.v=1617492405000"
      ],
      "id": "apple-imac-2021",
      "inStock": true,
      "name": "iMac 2021",
      "prices": [
          {
              "__typename": "Price",
              "amount": 1688.03,
              "currency": {
                  "__typename": "Currency",
                  "label": "USD",
                  "symbol": "$"
              }
          }
      ]
  },
  {
      "__typename": "Product",
      "attributes": [
          {
              "__typename": "AttributeSet",
              "id": "Capacity",
              "items": [
                  {
                      "__typename": "Attribute",
                      "displayValue": "512G",
                      "id": "512G",
                      "value": "512G"
                  },
                  {
                      "__typename": "Attribute",
                      "displayValue": "1T",
                      "id": "1T",
                      "value": "1T"
                  }
              ],
              "name": "Capacity",
              "type": "text"
          },
          {
              "__typename": "AttributeSet",
              "id": "Color",
              "items": [
                  {
                      "__typename": "Attribute",
                      "displayValue": "Green",
                      "id": "Green",
                      "value": "#44FF03"
                  },
                  {
                      "__typename": "Attribute",
                      "displayValue": "Cyan",
                      "id": "Cyan",
                      "value": "#03FFF7"
                  },
                  {
                      "__typename": "Attribute",
                      "displayValue": "Blue",
                      "id": "Blue",
                      "value": "#030BFF"
                  },
                  {
                      "__typename": "Attribute",
                      "displayValue": "Black",
                      "id": "Black",
                      "value": "#000000"
                  },
                  {
                      "__typename": "Attribute",
                      "displayValue": "White",
                      "id": "White",
                      "value": "#FFFFFF"
                  }
              ],
              "name": "Color",
              "type": "swatch"
          }
      ],
      "brand": "Apple",
      "category": "tech",
      "description": "This is iPhone 12. Nothing else to say.",
      "gallery": [
          "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-pro-family-hero?wid=940&amp;hei=1112&amp;fmt=jpeg&amp;qlt=80&amp;.v=1604021663000"
      ],
      "id": "apple-iphone-12-pro",
      "inStock": true,
      "name": "iPhone 12 Pro",
      "prices": [
          {
              "__typename": "Price",
              "amount": 1000.76,
              "currency": {
                  "__typename": "Currency",
                  "label": "USD",
                  "symbol": "$"
              }
          }
      ]
  },
]


class App extends Component {
  render() {
    return (
      <>
        <Header />
        <Category Products={Products} />
      </>
    );
  }
}

export default App;