import React, {Component} from 'react';
import Head from 'next/head'
import { Container } from 'reactstrap'
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import LinkDropDown from '../components/LinkDropDown.js';
import Link from 'next/link';

export default class Layout extends Component {
  constructor(props) {
    super(props);
    this.toggleNav = this.toggleNav.bind(this);
    this.state = {
        isOpen: false,
        dropdownItems: [
            {title: "Link 1", itemPath: "/link-1"},
            {title: "Link 2", itemPath: "/link-2"}
        ]
    };
  }

  toggleNav() {
    this.setState({
      isOpen: !this.state.isOpen
    });
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
                          <LinkDropDown dropdownItems={this.state.dropdownItems}>
                              <Link href="/info">Info</Link>
                          </LinkDropDown>
                      </NavItem>
                      <NavItem>
                          <LinkDropDown dropdownItems={this.state.dropdownItems}>
                              <Link href="/locations">Locations</Link>
                          </LinkDropDown>
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

