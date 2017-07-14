import React, {Component} from 'react';
import withAuth from '../utils/withAuth.js';

class Dashboard extends Component {
    logout(){
        console.log('component logging out')
        this.props.auth.logout();
        this.props.url.replaceTo('/admin-login')
    }

    render(){
        const user = this.props.auth.getProfile()
        return (
            <div>
                <h1>This is the admin page</h1>
                <p>Current user: {user.profile}</p>
                <form onSubmit={this.logout}>
                    <input type="submit" value="Logout"/>
                </form>
            </div>
        )
    }   
}

export default withAuth(Dashboard);
