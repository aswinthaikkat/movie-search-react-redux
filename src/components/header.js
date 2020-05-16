import { Navbar, Nav } from 'react-bootstrap';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilm } from '@fortawesome/free-solid-svg-icons';
const Header = () => {
    return (
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home">
                <FontAwesomeIcon icon={faFilm} />
                {' '}
      MOVIE SEARCHER
    </Navbar.Brand>

            <Nav className="justify-content-end" style={{ width: "100%" }}>
                <Nav.Link className="btn disabled">More deets</Nav.Link>
                <Nav.Link className="btn disabled">Dank memes </Nav.Link>
            </Nav>
        </Navbar>


    )
}
export default Header;