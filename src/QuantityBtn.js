import React, { useContext, useState } from 'react'
import { CartContext } from './CartContext';

export default function QuantityBtn({productInfo}) {
    const {cartItems, setCartItems} = useContext(CartContext);
    let productIndexInCart = cartItems.findIndex((element)=>{
        return element.id === productInfo.id
    });
    //console.log(productIndexInCart);
    let [numInCart, setNumInCart] = useState(
        (productIndexInCart === -1) ? 0 : cartItems[productIndexInCart].quantity
    );
    const handelClickAdd = () => {
        if(productIndexInCart === -1)
        {
            setCartItems(
                [{
                    id : productInfo.id,
                    name:productInfo.name,
                    image:productInfo.image,
                    price:productInfo.price,
                    description:productInfo.description,
                    quantity:1
                }, 
                ...cartItems]
            )
        }
        else
        {
            let newCartArray = [...cartItems];
            newCartArray[productIndexInCart].quantity++
            setCartItems(newCartArray);
        }
        setNumInCart(numInCart+1);
    }
    const handelClickMinus = () => {
        if(cartItems[productIndexInCart].quantity === 1)
        {
            let newCartArray = [...cartItems];
            newCartArray.splice(productIndexInCart, 1);
            setCartItems(newCartArray);
        }
        else
        {
            let newCartArray = [...cartItems];
            newCartArray[productIndexInCart].quantity--
            setCartItems(newCartArray);
        }
        setNumInCart(numInCart-1);
    }
    return (
        <div>
            {
                (numInCart === 0) ?
                <button onClick={handelClickAdd}>Add {productInfo.name} To Cart</button> :
                // <div>Add To Cart</div> :
                <div>
                    <button onClick={handelClickMinus}>-</button>
                    {/* <span>| - </span> */}
                    {numInCart}
                    {/* <span> + |</span> */}
                    <button onClick={handelClickAdd}>+</button>
                </div>
            }
        </div>
    )
}
