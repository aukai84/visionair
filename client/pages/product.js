import React, {Component} from 'react';
import Layout from '../components/Layout.js';
import fetch from 'isomorphic-unfetch';

class Product extends Component {
    constructor(props){
        super(props)
    }

    render(){
        return (
            <Layout>
                {this.props.url.query.id}
                <img src={this.props.item.imagePath}/>
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
