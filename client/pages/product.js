import React, {Component} from 'react';
import Layout from '../components/Layout.js';
import fetch from 'isomorphic-unfetch';
import {Container, Collapse, Row, Col} from 'reactstrap';
class Product extends Component {
    constructor(props){
        super(props)
    }

    render(){
        return (
            <Layout>
                <Container className="product-page-container">
                    <Row>
                        <Col className="product-aspect" xs="12" sm="12" md="8" lg="8">
                            <img className="product-image" width="100%" src={this.props.item.imagePath}/>
                        </Col>
                        <Col xs="12" sm="12" md="4" lg="4">
                            <div className="product-info">
                                <h4>$ {this.props.item.price}</h4> 
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
