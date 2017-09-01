import React, {Component} from 'react';
import Link from 'next/link';
import Layout from '../components/Layout.js';
import fetch from 'isomorphic-unfetch';
import {Container, Collapse, Row, Col} from 'reactstrap';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Button, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import AuthService from '../utils/AuthService.js';

const auth = new AuthService('http://localhost:80800');

class Product extends Component {
    constructor(props){
        super(props)
        this.state = {
            sizeDropDown: false,
            materialDropDown: false,
            size: '',
            material: '',
            quantity: ''
        }
        this.toggleSize = this.toggleSize.bind(this);
        this.toggleMaterial = this.toggleMaterial.bind(this);
        this.handleSize = this.handleSize.bind(this);
        this.handleMaterial = this.handleMaterial.bind(this);
        this.handleQuantity = this.handleQuantity.bind(this);
        this.addToCart = this.addToCart.bind(this);
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

    handleSize(e){
        console.log(e.target.value)
        this.setState({
            size: e.targer.value
        })
    }

    handleMaterial(e){
        this.setState({
            material: e.target.value
        })
    }

    handleQuantity(e){
        this.setState({
            quantity: e.target.value
        })
    }

    addToCart(){
        auth.fetch(`${auth.fetch}`)
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
                            <div className="product-">
                                <h6>$ {this.props.item.price}</h6> 
                                <h2>{this.props.item.title}</h2>
                                <p>{this.props.item.location}</p>
                                <div id="select-size-container">
                                    <p>SIZE</p>
                                    <select onChange={this.handleSize}>
                                        <option value="small">Small</option>
                                        <option value="medium">Medium</option>
                                        <option value="large">Large</option>
                                    </select>
                                </div>
                                <div id="select-material-container">
                                    <p>MATERIAL</p>
                                    <select onChange={this.handleMaterial}>
                                        <option value="canvas">Canvas</option>
                                        <option value="metalic">Metalic</option>
                                        <option value="paper">Fine Art Paper</option>
                                    </select>
                                </div>
                                <div id="select-quantity-container">
                                    <p>QUANTITY</p>
                                    <select onChange={this.handleQuantity}>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                    </select>
                                </div>
                                <Button onClick={this.addtoCart}>ADD TO CART</Button>
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
