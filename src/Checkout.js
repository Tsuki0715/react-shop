import {Link} from 'react-router-dom';
import React, { useContext } from 'react'
import Title from './Title'
import QuantityBtn from './QuantityBtn';
import { CartContext } from './CartContext';

export default function Checkout() {
  /*let cartItem = 
  {
    "cartItems": 
    [
        {
            "id": 5,
            "name": "藍梅",
            "image": "blueberry.jpg",
            "price": 10,
            "description": "新鮮藍梅50克，補眼之寶",
            "quantity": 3
        },
        {
            "id": 4,
            "name": "西瓜",
            "image": "watermelon.jpg",
            "price": 20,
            "description": "新鮮西瓜2公斤，夏季必備",
            "quantity": 1
        }
    ]
  }*/
  let {cartItems} = useContext(CartContext);
  let cartEmpty = cartItems.length <= 0 ? true : false;
  let grandTotal = cartItems.reduce((total, product) =>{
    return total += product.price*product.quantity;
  },0)
  const freeShippingPrice = 99;
  return (
    <div>
        <Title mainTitle="Your shopping cart"/>
        {
          cartEmpty &&
          <div>
            No Items In Shopping Cart<br/>
            <Link to='/'>Shopping Page</Link>
          </div>
        }
        {
          !cartEmpty &&
          <div>
            <div id="cartSection">
              {
                cartItems.map((product) => (
                  <div key={product.id}>
                    <img src={process.env.PUBLIC_URL+'/img/'+product.image}/>
                    _Name:{product.name}
                    _Description:{product.description}
                    _Price:{product.price}
                    _Want To Buy:{product.quantity}
                    <QuantityBtn productInfo={product}/>
                  </div>
                ))
              }
            </div>
            <br/>
            <div id="checkOutSection">
              <div>Total Price:</div>
              <div>${grandTotal}</div>
              {
                grandTotal >= freeShippingPrice ? 
                <div>Ship For Free</div> :
                <div>Ship For Free with ${freeShippingPrice}<br/>
                Buy ${freeShippingPrice-grandTotal} more</div>
              }
            </div>
          </div>
        }
    </div>
  )
}
