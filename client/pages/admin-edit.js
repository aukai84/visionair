import React, {Component} from 'react';
import withAuth from '../utils/withAuth.js';
import {Button} from 'reactstrap';
import EditItemModal from '../components/EditItemModal.js';
import AddItemModal from '../components/AddItemModal.js';
import Layout from '../components/Layout.js';
import {Modal, ModalBody, ModalFooter} from 'reactstrap';

class Dashboard extends Component {
    constructor(props){
        super(props)
        this.state = {
            response: '',
            deletedItem: {},
            items: [],
            modal: false
        }
        this.toggle = this.toggle.bind(this);
        this.logout = this.logout.bind(this);
        this.reloadItems = this.reloadItems.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
        this.editItem = this.editItem.bind(this);
        this.addItem = this.addItem.bind(this);
    }

    toggle(){
        this.setState({
            modal: !this.state.modal
        })
    }

    logout(){
        this.props.auth.logout();
        this.props.url.replace('/admin-login')
    }

    deleteItem(deletedItem){
        this.setState({
            deletedItem,
            items: this.state.items.filter(item => {
                return item._id != deletedItem._id 
            })
        })
        this.toggle();
    }

    editItem(newItem){
        this.setState({
            items: this.state.items.map(item => {
                if(item._id === newItem._id){
                    item = newItem;
                    return item;
                }
                return item;
            })
        })
    }

    addItem(newItem){
        this.setState({
            items: this.state.items.concat(newItem)
        })
    }

    reloadItems(){
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
        const user = this.props.auth.getProfile()
        const message = this.state.response
        return (
            <Layout> 
                <h1>This is the admin page</h1>
                <p>Current user: {user}</p>
                <p>Authenticated message: {message}</p>
                <Button color="primary" onClick={this.logout}>Logout</Button>
                <AddItemModal addItem={this.addItem} reloadItems={this.reloadItems} {...this.props}/>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className="delete-modal">
                    <ModalBody>
                        Successfully deleted item {this.state.deletedItem._id}
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={this.toggle}>Close</Button>
                    </ModalFooter>
                </Modal>
                {this.state.items.map(item => (
                <EditItemModal reloadItems={this.reloadItems} deleteItem={this.deleteItem} editItem={this.editItem} {...this.props} item={item}/>
                ))} 
            </Layout>
        )
    }   
}

export default withAuth(Dashboard);
