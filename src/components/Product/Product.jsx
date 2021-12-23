import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import DATA from '../../Data';

const Product = () => {
    const [phones, setPhones] = useState([])

    useEffect(()=>{
        fetch('http://localhost:5000/phones')
        .then(result=> result.json())
        .then(data=>setPhones(data))
    },[])
    const cardItem = (item) => {
        return (
            <div className="card  my-5 py-4" key={item.id} style={{width: "18rem"}}>
                <img style={{width:"100%"}} src={item.img} className="card-img-top" alt={item.title}/>
                    <div className="card-body text-center">
                        <h5 className="card-title">{item.title}</h5>
                        <p className="lead">৳{item.price}</p>
                        <NavLink to={`/products/${item.id}`} className="btn btn-outline-primary">Buy Now</NavLink>
                    </div>
            </div>
        )
    }
    return (
        <>
            <div className="container py-5">
                <div className="row">
                    <div className="col-12 text-center">
                        <h1>Product</h1>
                        <hr />
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row justify-content-around">
                    {DATA.map(cardItem)}
                    {phones.map(cardItem)}
                </div>
            </div>
        </>
    );
};

export default Product;