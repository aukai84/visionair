import React, {Component} from 'react';
import withAuth from '../utils/withAuth.js';
import {Button} from 'reactstrap';
import EditModal from '../components/EditModal.js';

class Dashboard extends Component {
    constructor(props){
        super(props)
        this.state = {
            response: ''
        }
        this.logout = this.logout.bind(this);
    }

    logout(){
        this.props.auth.logout();
        this.props.url.replace('/admin-login')
    }

    componentDidMount(){
        this.props.auth.fetch(`${this.props.auth.domain}/admin/edit-shop`, {method: 'GET'})
            .then(res => {
                console.log('api res', res)
                this.setState({response: res.message})
            })
    }

    render(){
        console.log('profile', this.props.auth.getProfile())        
        const user = this.props.auth.getProfile()
        const message = this.state.response
        return (
            <div>
                <h1>This is the admin page</h1>
                <p>Current user: {user}</p>
                <p>Authenticated message: {message}</p>
                <EditModal buttonLabel="Item 1">This will contain the CRUD</EditModal>
                <Button color="primary" onClick={this.logout}>Logout</Button>
           </div>
        )
    }   
}

export default withAuth(Dashboard);
