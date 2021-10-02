import React from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';

function Nav(){
    return(
        <Navbar dark color="dark">
            <div className="container">
                <NavbarBrand href="/">Highhpriest Design</NavbarBrand>
            </div>
        </Navbar>
    )
}

export default Nav;