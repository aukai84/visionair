import React, {Component} from 'react';
import withAuth from '../utils/withAuth.js';
import {Button} from 'reactstrap';
import EditModal from '../components/EditModal.js';
import CrudComponent from '../components/CrudComponent.js';
import Layout from '../components/Layout.js'

class Dashboard extends Component {
    constructor(props){
        super(props)
        this.state = {
            response: '',
            items: []
        }
        this.logout = this.logout.bind(this);
        this.loadItems = this.loadItems.bind(this);
    }

    logout(){
        this.props.auth.logout();
        this.props.url.replace('/admin-login')
    }

    loadItems(){
        this.props.auth.fetch(`${this.props.auth.domain}/shop`, {method: 'GET'})
            .then(res => {
                this.setState({
                    items: res
                })
            })
    }

    componentDidMount(){
        this.props.auth.fetch(`${this.props.auth.domain}/admin/edit-shop`, {method: 'GET'})
            .then(res => {
                console.log('api res', res)
                this.setState({response: res.message})
            })
        this.props.auth.fetch(`${this.props.auth.domain}/shop`, {method: 'GET'})
            .then(res => {
                console.log('db items', res)
                this.setState({
                    items: res
                })
            
            })
    }

    render(){
        console.log('db items', this.state.items)
        const user = this.props.auth.getProfile()
        const message = this.state.response
        return (
            <Layout> 
                <h1>This is the admin page</h1>
                <p>Current user: {user}</p>
                <p>Authenticated message: {message}</p>
                {this.state.items.map(item => (
                <EditModal loadItems={this.loadItems} {...this.props} buttonLabel={item.title} itemId={item._id} link={item.imagePath}>
                    <CrudComponent item={item}/> 
                </EditModal>
                ))} 
                <Button color="primary" onClick={this.logout}>Logout</Button>
            </Layout>
        )
    }   
}

export default withAuth(Dashboard);
