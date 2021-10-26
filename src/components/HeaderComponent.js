import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

const Header = () => {
    const [collapsed, setCollapsed] = useState(true);

    const toggleNavbar = () => setCollapsed(!collapsed);
        return (
            <React.Fragment>
                <Navbar color="faded" light>
                    <NavbarBrand href="./HomeComponent" className="mr-auto">HighhPriest Design</NavbarBrand>
                    <NavbarToggler onClick={toggleNavbar} className="mr-2" />
                <Collapse isOpen={!collapsed} navbar>
                <Nav navbar>
                    <NavItem>
                        <NavLink href="/components/home">HOME</NavLink>
                    </NavItem>
            <NavLink href="/components/shop">SHOP</NavLink>
            <NavItem>
                <NavLink href="/components/about">ABOUT US</NavLink>
            </NavItem>
            <NavItem>
                <NavLink href="/components/contact">CONTACT US</NavLink>
            </NavItem>
            </Nav>
        </Collapse>
        </Navbar>
    </React.Fragment>
        );
    }

export default Header;