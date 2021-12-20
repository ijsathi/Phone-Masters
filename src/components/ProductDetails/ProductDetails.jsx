import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import DATA from '../../Data';
import { useDispatch } from 'react-redux';
import { addItem, deleteItem } from '../../redux/action/index';

const ProductDetails = () => {
    const [cartBtn, setCartBtn] = useState("Add to Cart");
    const productId = useParams();
    const ProductDetail = DATA.filter(x => x.id == productId.id);
    const product = ProductDetail[0];
    console.log(product);

    // we need to store useDispatch in a variable
    const dispatch = useDispatch()

    const handleCart = (product) =>{
        if(cartBtn === "Add to Cart"){
            dispatch(addItem(product))
            setCartBtn("Remove from Cart")
        }
        else{
            dispatch(deleteItem(product))
            setCartBtn("Add to Cart")
        }
    }

    return (
        <>
            <div className="container my-5 py-3">
                <div className="row">
                    <div className="col-md-6 d-flex justify-content-center mx-auto product">
                        <img height='400px' src={product.img} alt={product.title} />
                    </div>
                    <div className="col-md-6 d-flex flex-column justify-content-center">
                        <h1 className='display-5 fw-bold'>{product.title}</h1> <hr />
                        <h2 className='my-4'>৳{product.price}</h2>
                        <p className='lead'>{product.desc}</p>
                        <button onClick={() =>handleCart(product)} className="btn btn-outline-primary my-5">{cartBtn}</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProductDetails;