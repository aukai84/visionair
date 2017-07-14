import React, {Component} from 'react';
import AuthService from './AuthService.js';
import Head from 'next/head';

export default function withAuth(AuthComponent) {
    const Auth = new AuthService('http://localhost:8080');
    return class Authenticated extends Component {
        constructor(props){
            super(props);
            this.state = {
                isLoading: true
            };
        }

        componentDidMount(){
            if(!Auth.loggedIn()){
                this.props.url.replace('/admin-edit')
            }
            this.setState({isLoading:false})
        } 
        
        render(){
            console.log('withauth props', this.props)
            return (
                <div>
                <Head>
                    <title>PairHub</title>
                    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css" />
                </Head>
                {this.state.isLoading? (<div>LOADING...</div>) : (
                    <AuthComponent {...this.props} auth={Auth} />
                    )}
                </div>
            )
        }
    }
}
