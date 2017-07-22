import Layout from '../components/Layout.js';
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';
import { Container, Row, Col } from 'reactstrap';

const Index = (props) => {
    console.log(props);
    return (
      <Layout>
            <div className="home-image-aspect"> 
                <img className="home-image" width="100%" src="/static/images/home.jpg"/>
            </div>
            <Container>
                <div className="home-page-wrapper">
                    <Row>
                        <Col className="home-page-info">Welcome to Visionair</Col>
                    </Row>
                    <Row>
                        <Col className="home-page-info">Kaneohe, HI</Col>
                    </Row>
                    <Row>
                        <Col className="home-page-info">Drone shots..shotsshotsshots</Col>
                    </Row>
                    <Row>
                        <Col className="home-page-info">Wedding videoss..videossoss</Col>
                    </Row>
                    <Row>
                        <Col className="home-page-info">Beachy Stuff...Vision air</Col>
                    </Row>
                </div>
                <Row>
                {props.items.map(item => (
                <Col className="thumbnail-container" xs="12" sm="6" md="6" lg="6">
                    <Link href={`/product?id=${item._id}`}>
                        <div className="thumbnail-aspect"> 
                            <img className="thumbnail-image" width="100%" src={item.imagePath}/>
                        </div>
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
