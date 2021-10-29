import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import { Container } from "react-bootstrap";
import mainLogo from "../img/mainLogo.png";

const Header = () => {
    const [collapsed, setCollapsed] = useState(true);

    const toggleNavbar = () => setCollapsed(!collapsed);
        return (
            <React.Fragment>
            <Container>
                <Navbar color="faded" light>
                    <a href="#" className="navbar-brand"><img style={{height: "4rem", marginLeft: "2rem" }} href="./HomeComponent" src={mainLogo} alt="Logo" title="Logo"></img></a>
                    <NavbarBrand className="ml" href="./HomeComponent">HighhPriest Design</NavbarBrand> 
                    <NavbarToggler onClick={toggleNavbar} className="mr-2" />
                    <Collapse isOpen={!collapsed} navbar>
                    <Nav navbar>
                        <NavItem>
                            <NavLink href="/components/home">HOME</NavLink>
                        </NavItem>
                    <NavLink href="./components/shop">SHOP</NavLink>
                    <NavItem>
                        <NavLink href="./components/about">ABOUT US</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="./components/contact">CONTACT US</NavLink>
                    </NavItem>
                    </Nav>
                </Collapse>
                </Navbar>
            </Container>
        </React.Fragment>
        );
    }

export default Header;