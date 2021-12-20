import React from 'react';
import Product from '../Product/Product';

const Home = () => {
    return (
        <>
            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img height="450px" src="https://www.apple.com/v/iphone/buy/h/images/meta/og__c6pnqxxo9e6a.jpg?202109230656"  className="d-block w-100" alt="iPhone"/>
                    </div>
                    <div className="carousel-item">
                        <img height="450px" src="https://www.reviewgeek.com/p/uploads/2021/01/33a38fb0.jpg?width=1200" className="d-block w-100" alt="iPhone"/>
                    </div>
                    <div className="carousel-item">
                        <img height="450px" src="https://static.standard.co.uk/s3fs-public/thumbnails/image/2019/09/17/11/iphone-11-review-1709.jpg?width=968&auto=webp&quality=75&crop=968%3A645%2Csmart" className="d-block w-100" alt="iPhone"/>
                    </div>
                    <div className="carousel-item">
                        <img height="450px" src="https://www.cnet.com/a/img/SEtkPeF-QMfgzOf_BBXgPu9VUzA=/1200x675/2020/08/18/b7168aea-9f7e-47bb-9f31-4cb8ad92fbc7/lg-note-20-ultra-5g-iphone-11-se-google-pixel-4a-lg-velvet-6133.jpg" className="d-block w-100" alt="iPhone"/>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            <Product/>
        </>
    );
};

export default Home;