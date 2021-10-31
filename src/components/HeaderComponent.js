import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem } from 'reactstrap';
import { Container } from "react-bootstrap";
import mainLogo from "../img/mainLogo.png";
import { NavLink } from 'react-router-dom';

const Header = () => {
    const [collapsed, setCollapsed] = useState(true);

    const toggleNavbar = () => setCollapsed(!collapsed);
        return (
            <React.Fragment>
            <Container>
                <Navbar color="faded" light>
                    <NavLink to="/" className="navbar-brand"><img style={{height: "4rem", marginLeft: "2rem" }} src={mainLogo} alt="Logo" title="Logo"></img></NavLink>
                    <NavLink to='/' style={{textDecoration:'none'}}>
                    <NavbarBrand className="ml" >HighhPriest Design</NavbarBrand> 
                    </NavLink>
                    <NavbarToggler onClick={toggleNavbar} className="mr-2" />
                    <Collapse isOpen={!collapsed} navbar>
                    <Nav navbar>
                        <NavItem>
                            <NavLink to='/'>HOME</NavLink>
                        </NavItem>
                    <NavItem>
                        <NavLink to='/shop'>SHOP</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to='/about'>ABOUT US</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to='/contact'>CONTACT US</NavLink>
                    </NavItem>
                    </Nav>
                </Collapse>
                </Navbar>
            </Container>
        </React.Fragment>
        );
    }

export default Header;