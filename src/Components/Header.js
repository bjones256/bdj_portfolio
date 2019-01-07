import React, { Component } from 'react';
import { Button,Navbar,FormControl,FormGroup,NavItem, Nav} from 'react-bootstrap';
import { Link } from 'react-router-dom';

//Sticky Header

class Header extends Component {
  render() {
    return (
      <div className="header">
 

<Navbar>
            {/* <Navbar.Header>
            <Navbar.Brand>
                <Link to='/'>Portfolio</Link>
            </Navbar.Brand>
            <Navbar.Toggle/>
            </Navbar.Header>
            <Navbar.Collapse className="test">
            <Navbar.Form pullLeft>
            </Navbar.Form>
            <Nav pullRight class="pres">        
            <NavItem eventKey={1} href="#">
                
            </NavItem>
            <NavItem eventKey={2} href="#">
            <Link to='/Hire'>
                Hire
            </Link>
            <Link to='/Projects'>
                Projects
            </Link>
            <Link to='/Contact'>
                Contact
            </Link>
            </NavItem>
            <NavItem class="mobile-bottom">

            </NavItem>
            
            <NavItem class="mobile-bottom">
                <i class="fa fa-times" aria-hidden="true" onClick={this.logOut}></i>
            </NavItem>
            </Nav>
        </Navbar.Collapse> */}
      </Navbar>


      </div>
    );
  }
}

export default Header;
