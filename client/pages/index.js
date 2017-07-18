import Layout from '../components/Layout.js';
import fetch from 'isomorphic-unfetch';

const Index = (props) => {
    console.log(props);
    return (
        <Layout>
            <div width="100%">
                <img width="100%" src="http://source.unsplash.com/t24k04BJAWg.com"/>
            </div>
            <ul>
                {props.items.map(item => (
                <li>
                    <p>Title: {item.title}</p>
                    <p>Location: {item.location}</p>
                    <p>Inventory: {item.inventory}</p>
                    <img src={item.imagePath}/>
                </li>
                ))}
            </ul>
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
