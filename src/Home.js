import React from 'react';
import './Home.css';
import Product from './Product';

function Home() {
    return (
            <div className="home">
                <div className="home_container">
                    <img src="https://www.salesforce.com/content/dam/blogs/ca/Blog%20Posts/2021/what-retailers-need-to-know-about-ecommerce-header.png" alt="" className="home_image" />
                    <div className="home_row">
                        <Product />
                        <Product />
                    </div>
                    <div className="home_row">
                        <Product />
                        <Product />
                        <Product />
                    </div>
                    <div className="home_row">
                        <Product />
                    </div>

                </div>
            </div>
    );
}

export default Home;