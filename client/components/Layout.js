import React, {Component} from 'react';
import Head from 'next/head'
import { Container } from 'reactstrap'
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import Link from 'next/link';

export default class Layout extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
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
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css" />
            </Head>
                <Navbar color="faded" light toggleable>
                  <NavbarToggler right onClick={this.toggle} />
                  <NavbarBrand href="/">Visionair</NavbarBrand>
                  <Collapse isOpen={this.state.isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                      <NavItem>
                          <Link href="/shop-all">Shop All</Link>
                      </NavItem>
                      <NavItem>
                          <Link href="/info">Info</Link>
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

