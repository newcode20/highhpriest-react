import React from 'react'; 
import Home from './HomeComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import About from './AboutComponent';
import Contact from "./ContactComponent";
import { Switch, Route } from 'react-router-dom';

function Main() {
    return (
        <div>
            <Header />
            <Switch>
                <Route exact path='/'>
                    <Home/>
                </Route>
                <Route path='/about'>
                    <About/>
                </Route>
                <Route path='/contact'>
                    <Contact />
                </Route>
                <Route path='/shop'></Route>
                
            </Switch>
            <Footer />
        </div>
        );
}

export default Main;