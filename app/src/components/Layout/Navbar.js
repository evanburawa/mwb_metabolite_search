import React, { Component} from "react";
import { Navbar, Nav, NavDropdown, Button, Form, FormControl } from 'react-bootstrap';


class Footer extends Component{
  render(){
    return(
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="#home">Metabolomics Work Bench</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
            { /*
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>
            */
            }

            </Nav>
            <Form inline>

              <img src='/fructose.png' height="40px;"/> 

            </Form>
          </Navbar.Collapse>
        </Navbar>
    );
  }
}

export default Footer;