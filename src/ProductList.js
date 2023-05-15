import {Link} from 'react-router-dom';
import {useState, useEffect} from 'react'; //react Hook
import React from 'react';
import styles from './ProductList.module.css';
import Title from './Title';
import QuantityBtn from './QuantityBtn';

export default function ProductList() {
    /*let productList = [
        {"id" : 1, "name" : "apple", "price" : 5, "image" : "apple.jpg"},
        {"id" : 2, "name" : "orange", "price" : 6, "image" : "orange.jpg"},
        {"id" : 3, "name" : "mango", "price" : 9, "image" : "mango.jpg"},
        {"id" : 4, "name" : "watermelon", "price" : 30, "image" : "watermelon.jpg"}
    ]*/
    let [productList, setProductList] = useState([]);

    useEffect(()=>{
        fetch('https://hoyinleung.github.io/demoapi/react-basic-product.json')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            setProductList(data);
            }
        );
    }, [])
    //let product = 'fruit';
    //const [product, setProduct] = useState('fruit');
    /*const [showProduct, setShowProduct] = useState(false);
    const handleShowClick = () => {
        setShowProduct(true);
        console.log(showProduct);
    }
    const handleHideClick = () => {
        setShowProduct(false);
        console.log(showProduct);
    }*/

    return (
    <>
        <Title mainTitle="Choose The fruit"/>
        {/* {product} <button onClick={handleClick}>Change State</button> */}
        {/* {!showProduct && <button onClick={handleShowClick}>Show</button>} */}
        {/* {showProduct && <button onClick={handleHideClick}>Hide</button>} */}
        {/* <h1 style={{backgroundColor:'orange', borderBottom:'5px solid red'}}>Please choose Button</h1> */}
        {/* <img src={process.env.PUBLIC_URL+'/img/apple.jpg'}/> */}
        <div>
            {
                // showProduct && productList.map((product) => {
                productList.map((product) => {
                    return (
                        <div className={styles.productBorder} key={product.id}>
                            Id:{product.id + " "}<br/>
                            Name:{product.name + " "}<br/>
                            Price:{product.price + " "}<br/>
                            <Link to={'/product/'+product.id}>
                            {/* <img src={process.env.PUBLIC_URL+'/img/'+product.name+'.jpg'}/><br/> */}
                            <img src={process.env.PUBLIC_URL+'/img/'+product.image} alt={product.name}/><br/>
                            </Link>
                            {product.description}<br/>
                            <QuantityBtn productInfo={product}/>
                        </div>
                    )
                })
            }
        </div>
    </>
    )  
}
