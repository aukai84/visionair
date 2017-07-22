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
                <link rel="stylesheet" href="/static/styles.css"/>
            </Head>
              <Navbar color="faded" full="true" light toggleable>
                  <NavbarToggler right onClick={this.toggleNav} />
                  <NavbarBrand href="/">Visionair</NavbarBrand>
                  <Collapse isOpen={this.state.isOpen} className="navbar-toggle" padding-right="1rem" navbar>
                    <Nav className="ml-auto" navbar>
                      <NavItem> 
                          <Link href="/"><a className="nav-link">Home</a></Link>
                      </NavItem>
                      <NavItem>
                          <Link href="/shop-all"><a className="nav-link">Shop All</a></Link>
                      </NavItem>
                      <NavItem>
                          <LinkDropDown dropdownItems={this.state.dropdownItems}>
                              <Link href="/info"><a className="nav-link">Info</a></Link>
                          </LinkDropDown>
                      </NavItem>
                      <NavItem>
                          <LinkDropDown dropdownItems={this.state.dropdownItems}>
                              <Link href="/locations"><a className="nav-link">Locations</a></Link>
                          </LinkDropDown>
                      </NavItem>
                      <NavItem>
                          <Link href="/cart"><a className="nav-link">Cart</a></Link>
                      </NavItem>
                    </Nav>
                  </Collapse>
                </Navbar>
                <Container style={{
                    margin: 0,
                    padding: 0,
                    width: "100%",
                }}>
                    {this.props.children}
                </Container> 
          </div>
    );
  }
}

