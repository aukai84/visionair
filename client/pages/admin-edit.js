import React, {Component} from 'react';
import withAuth from '../utils/withAuth.js';
import {Button} from 'reactstrap';
import EditItemModal from '../components/EditItemModal.js';
import AddItemModal from '../components/AddItemModal.js';
import Layout from '../components/Layout.js';
import {Container, Row, Col, Modal, ModalBody, ModalFooter} from 'reactstrap';

class Dashboard extends Component {
    constructor(props){
        super(props)
        this.state = {
            response: '',
            successMessage: '',
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
            successMessage: `Successfully deleted item ${deletedItem._id}`,
            items: this.state.items.filter(item => {
                return item._id != deletedItem._id 
            })
        })
        this.toggle();
    }

    editItem(editedItem){
        this.setState({
            successMessage: `Successfully edited item ${editedItem._id}`,
            items: this.state.items.map(item => {
                if(item._id === editedItem._id){
                    item = editedItem;
                    return item;
                }
                return item;
            })
        })
        this.toggle();
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
            <div>
                <Layout isLoggedIn={this.props.auth.loggedIn()}> 
                    <h3>This is the admin page</h3>
                    <p>Current user: {user}</p>
                    <p>Authenticated message: {message}</p>
                    <Button color="white" onClick={this.logout}>Logout</Button>
                    <AddItemModal addItem={this.addItem} reloadItems={this.reloadItems} {...this.props}/>
                    <Modal isOpen={this.state.modal} toggle={this.toggle} className="delete-modal">
                        <ModalBody>
                            {this.state.successMessage}
                        </ModalBody>
                        <ModalFooter>
                            <Button color="primary" onClick={this.toggle}>Close</Button>
                        </ModalFooter>
                    </Modal>
                    <Container>
                        <Row>
                            {this.state.items.map(item => (
                            <Col className="thumbnail-container" xs="12" sm="6" md="6" lg="4" xl="4">
                                <EditItemModal reloadItems={this.reloadItems} deleteItem={this.deleteItem} editItem={this.editItem} {...this.props} item={item}/>
                            </Col>
                            ))}
                        </Row>
                    </Container>
                </Layout>
            </div>
        )
    }   
}

export default withAuth(Dashboard);
