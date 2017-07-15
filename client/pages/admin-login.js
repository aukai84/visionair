import React, {Component} from 'react';
import AuthService from '../utils/AuthService.js';

const auth = new AuthService('http://localhost:8080');

class Login extends Component {
    constructor(props){
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentDidMount(){
        if(auth.loggedIn()){
            this.props.url.replace('/admin-edit') //redirect if you are logged in
        }
    }

    handleSubmit(e){
        e.preventDefault()
        console.log(auth, "auth sevice") 
        auth.login(this.refs.username.value, this.refs.password.value)
            .then(res => {
                console.log("response from fetch", res)
                this.props.url.replace('/admin-edit')
            })
            .catch (e => console.log(e))
    }

    render(){
        return (
            <div>
                Login
                <form onSubmit={this.handleSubmit}>
                    <input type="text" ref="username"/>
                    <input type="password" ref="password"/>
                    <input type="submit" value="Login"/>
                </form>
            </div>
        )
    }
}

export default Login
