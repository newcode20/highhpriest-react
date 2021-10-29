import React from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import "./home.css";

function Home(){
    return(
        <div>
            <Header />
            <div className="masthead" > 
                <div className="container h-100">
                    <div className="row h-100 justify-content-center align-items-center">
                        <div className="col-sm-7 col-xs-3 text-center" id="head">
                            <div>
                                <h1 className="font-weight-light">Uniquely Handcrafted Jewelry</h1>
                                <h3 className="lead">Made in Chattanooga, TN</h3>
                            </div>
                            <a href="shop.html" className="btn btn-light btn-lg" id="shopNow">Shop Now</a>
                        </div>
        
                    </div>
                </div>
            </div>
    
            <Footer />
        </div>
    )
}



export default Home;