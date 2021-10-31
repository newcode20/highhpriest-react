import React from 'react';
import { Link } from 'react-router-dom';


function Home(){
    return(
        <div>
            
            <div className="masthead" > 
                <div className="container h-100">
                    <div className="row h-100 justify-content-center align-items-center">
                        <div className="col-sm-7 col-xs-3 text-center" id="head">
                            <div>
                                <h1 className="font-weight-light">Uniquely Handcrafted Jewelry</h1>
                                <h3 className="lead">Made in Chattanooga, TN</h3>
                            </div>
                            <Link to='/shop'className="btn btn-light btn-lg" id="shopNow">Shop Now</Link>
                        </div>
        
                    </div>
                </div>
            </div>
    
            
        </div>
    )
}



export default Home;