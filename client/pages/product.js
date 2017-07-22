import React, {Component} from 'react';
import Link from 'next/link';
import Layout from '../components/Layout.js';
import fetch from 'isomorphic-unfetch';
import {Container, Collapse, Row, Col} from 'reactstrap';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';

class Product extends Component {
    constructor(props){
        super(props)
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
                                <h5>$ {this.props.item.price}</h5> 
                                <h1>{this.props.item.title}</h1>
                                <p>{this.props.item.location}</p>
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
