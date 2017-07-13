import React from 'react';
import {Button} from 'reactstrap';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import Layout from '../components/Layout.js';

export default class Home extends React.Component {
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
            <Layout>
                <Navbar color="faded" light toggleable>
                  <NavbarToggler right onClick={this.toggle} />
                  <NavbarBrand href="/">React Boostrap Test with Next(Home)</NavbarBrand>
                  <Collapse isOpen={this.state.isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                      <NavItem>
                        <NavLink href="/components/">Shop All</NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink href="https://github.com/reactstrap/reactstrap">Cart</NavLink>
                      </NavItem>
                    </Nav>
                  </Collapse>
              </Navbar>
          </Layout>
      </div>
    );
  }
}
