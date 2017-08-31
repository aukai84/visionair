import React, {Component} from 'react';
import Link from 'next/link';
import Layout from '../components/Layout.js';
import fetch from 'isomorphic-unfetch';
import {Container, Collapse, Row, Col} from 'reactstrap';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

class Product extends Component {
    constructor(props){
        super(props)
        this.state = {
            sizeDropDown: false,
            materialDropDown: false
        }
        this.toggleSize = this.toggleSize.bind(this);
        this.toggleMaterial = this.toggleMaterial.bind(this);
    }

    toggleSize(){
        this.setState({
            sizeDropDown: !this.state.sizeDropDown
        })
    }

    toggleMaterial(){
        this.setState({
            materialDropDown: !this.state.materialDropDown
        })
    }

    render(){
        return (
            <Layout>
                <Container className="product-page-container">
                    <Col className="breadcrumb-container" xs="12" sm="12" md="8" lg="8">
                        <Breadcrumb tag="nav">
                            <BreadcrumbItem><Link href="/">Home</Link></BreadcrumbItem>
                            <BreadcrumbItem><Link href="shop-all">Shop All</Link></BreadcrumbItem>
                        <BreadcrumbItem active tag="span">{this.props.item.title}</BreadcrumbItem>
                        </Breadcrumb>
                    </Col>
                    <Row>
                        <Col className="product-aspect" xs="12" sm="12" md="8" lg="8">
                            <img className="product-image" width="100%" src={this.props.item.imagePath}/>
                        </Col>
                        <Col xs="12" sm="12" md="4" lg="4">
                            <div className="product-info">
                                <h6>$ {this.props.item.price}</h6> 
                                <h2>{this.props.item.title}</h2>
                                <p>{this.props.item.location}</p>
                                <Dropdown width="100%" isOpen={this.state.sizeDropDown} toggle={this.toggleSize}>
                                    <DropdownToggle caret>
                                      SIZE 
                                    </DropdownToggle>
                                    <DropdownMenu className="dropdown-menu">
                                        <DropdownItem>Small</DropdownItem>
                                        <DropdownItem>Medium</DropdownItem>
                                        <DropdownItem>Large</DropdownItem>
                                    </DropdownMenu>
                                </Dropdown>
                                <Dropdown width="100%" isOpen={this.state.materialDropDown} toggle={this.toggleMaterial}>
                                    <DropdownToggle caret>
                                        MATERIAL
                                    </DropdownToggle>
                                    <DropdownMenu className="dropdown-meny">
                                        <DropdownItem>Canvas</DropdownItem>
                                        <DropdownItem>Fine Art Paper</DropdownItem>
                                        <DropdownItem>Metal</DropdownItem>
                                    </DropdownMenu>
                                </Dropdown>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Layout>
        )
    }
}

Product.getInitialProps = async function(context){
    console.log(context.query)
    let id = context.query.id
    const res = await fetch(`http://localhost:8080/shop/${id}`)
    const data = await res.json();
    return {item: data.item}
}

export default Product;
