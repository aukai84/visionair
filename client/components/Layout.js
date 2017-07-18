import React, {Component} from 'react';
import Head from 'next/head'
import { Container } from 'reactstrap'
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import {Dropdown, DropdownMenu} from 'reactstrap';
import Link from 'next/link';

export default class Layout extends Component {
  constructor(props) {
    super(props);
    this.toggleNav = this.toggleNav.bind(this);
    this.toggleLink = this.toggleLink.bind(this);
    this.state = {
        isOpen: false,
        dropdownOpen: false
    };
  }

  toggleNav() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
    
    toggleLink(){
        console.log('toggle link...')
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        })
    }

  render() {
    return (
        <div>
            <Head>
                <title>PairHub</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <link rel="stylesheet" href="/static/css/bootstrap.min.css" />
            </Head>
                <Navbar color="black" height="15%" light toggleable>
                  <NavbarToggler right onClick={this.toggleNav} />
                  <NavbarBrand href="/">Visionair</NavbarBrand>
                  <Collapse isOpen={this.state.isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                      <NavItem> 
                          <Link margin="10px" href="/">Home</Link>
                      </NavItem>
                      <NavItem>
                          <Link href="/shop-all">Shop All</Link>
                      </NavItem>
                      <NavItem>
                          <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggleLink}>
                              <span onMouseEnter={this.toggleLink} onMouseLeave={this.toggleLink} data-toggle="dropdown" aria-haspopup="true" aria-expanded={this.state.dropdownOpen}>
                                  <Link href="/info">Info</Link>
                              </span>
                              <DropdownMenu>
                                  <div>link 1</div>
                                  <div>link 2</div>
                                </DropdownMenu>
                            </Dropdown>
                      </NavItem>
                      <NavItem>
                          <Link href="/locations">Locations</Link>
                      </NavItem>
                      <NavItem>
                          <Link href="/cart">Cart</Link>
                      </NavItem>
                    </Nav>
                  </Collapse>
                </Navbar>
                <Container>
                    {this.props.children}
                </Container> 
          </div>
    );
  }
}

