import React from 'react';
import { Navbar } from 'react-bootstrap';
const Footer = () => {
    return (
        <Navbar>
            <Navbar.Brand href="#">Movie searcher</Navbar.Brand>
            <Navbar.Text>
                Come...learn about movies...
                </Navbar.Text>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
                <Navbar.Text>
                    Signed by Aswin
                </Navbar.Text>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Footer;