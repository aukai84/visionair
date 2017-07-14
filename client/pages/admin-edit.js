import React, {Component} from 'react';
import withAuth from '../utils/withAuth.js';
import {Button} from 'reactstrap';

class Dashboard extends Component {
    constructor(props){
        super(props)
    }

    logout = () => {
        console.log('component logging out')
        console.log('auth props', this.props)
        this.props.auth.logout();
        this.props.url.replace('/admin-login')
    }

    render(){
        
        const user = this.props.auth.getProfile()
        return (
            <div>
                <h1>This is the admin page</h1>
                <p>Current user: {user}</p>
                <Button color="primary" onClick={this.logout}>Logout</Button>
           </div>
        )
    }   
}

export default withAuth(Dashboard);
