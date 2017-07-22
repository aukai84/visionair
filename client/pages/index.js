import Layout from '../components/Layout.js';
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';
import { Container, Row, Col } from 'reactstrap';

const Index = (props) => {
    console.log(props);
    return (
        <Layout>
            <div width="100%">
                <img width="100%" src="/static/images/home.jpg"/>
            </div>
            <Container>
                <Row>
                    <Col>Welcome to Visionair</Col>
                </Row>
                <Row>
                    <Col>Kaneohe, HI</Col>
                </Row>
                <Row>
                    <Col>Drone shots..shotsshotsshots</Col>
                </Row>
                <Row>
                    <Col>Wedding videoss..videossoss</Col>
                </Row>
                <Row>
                    <Col>Beachy Stuff...Vision air</Col>
                </Row>
                <Row>
                {props.items.map(item => (
                <Col xs="12" sm="6" md="6" lg="6">
                    <Link href={`/product?id=${item._id}`}>
                        <img width="100%" src={item.imagePath}/>
                    </Link>
                        <p>{item.title}</p>
                        <p>{item.location}</p>
                        <p>{item.inventory}</p>
                    </Col>
                ))}
                </Row>
            </Container>
        </Layout>
    )
}

Index.getInitialProps = async function(){
    const res = await fetch('http://localhost:8080/shop');
    const data = await res.json();

    console.log(`Showing data from api.. ${data.length}`);

    return {
        items: data
    } 
    
}

export default Index;
