import { BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import Checkout from './Checkout';
import ProductList from './ProductList';
import ProductDetail from './ProductDetail';
import {CartContext} from './CartContext';
import { useState } from 'react';

function App() {
  const [cartItems, setCartItems] = useState([]);
  return (
    <BrowserRouter>
      {/* <a href='/checkout'>Shopping Cart</a> */}
      <CartContext.Provider value={{cartItems, setCartItems}}>

        <Link to='/'>Home</Link><br/>
        <Link to='/checkout'>Shopping Cart</Link><br/>
        {/* <Link to='/product'>Shopping Detail</Link> */}
        <p></p>

        <Routes>
          <Route>
            <Route path="/" element={<ProductList/>} />
            <Route path="/checkout" element={<Checkout/>} />

            <Route path="/product" element={<ProductDetail/>}>
              <Route path=":id" />
            </Route>

            <Route path="*" element={<p>No Found</p>} />
          </Route>
        </Routes>
      </CartContext.Provider>
    </BrowserRouter>
  );
}

export default App;
