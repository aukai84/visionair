import React, {Component} from 'react';
import AuthService from '../utils/AuthService.js';
import { Button, Form, FormGroup, Label, Input, FormFeedback, FormText } from 'reactstrap';
import Layout from '../components/Layout.js';

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
        auth.login(this.username.value, this.password.value)
            .then(res => {
                console.log("response from fetch", res)
                this.props.url.replace('/admin-edit')
            })
            .catch (e => console.log(e))
    }

    render(){
        return (
            <Layout>
            <Form onSubmit={this.handleSubmit}>
                <FormGroup>
                    <Input type="text" getRef={(input) => (this.username = input)} placeholder="Username"/>
                </FormGroup>
                {' '}
                <FormGroup>
                    <Input type="password" getRef={(input) => (this.password = input)} placeholder="Password"/>
                </FormGroup>
                {' '}
                <Input type="submit" value="Login"/>
            </Form>
        </Layout>
        )
    }
}

export default Login
