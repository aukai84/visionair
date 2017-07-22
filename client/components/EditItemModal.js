import React, {Component} from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Input, Label, Form, FormGroup } from 'reactstrap';

class EditItemModal extends Component {
    constructor(props){
        super(props);
        this.state = {
            modal: false,
        };
        this.toggle = this.toggle.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
        this.editItem = this.editItem.bind(this);
    }

    toggle(){
        this.setState({
            modal: !this.state.modal
        })
    }

    deleteItem(){
        this.props.auth.fetch(`${this.props.auth.domain}/admin/edit-shop/delete/${this.props.item._id}`, {method: 'DELETE'})
            .then(res => {
                this.props.deleteItem(res.item);
                this.toggle();
            })
    }

    editItem(e){
        e.preventDefault();
        this.props.auth.fetch(`${this.props.auth.domain}/admin/edit-shop/update/${this.props.item._id}`,{
            method: 'PUT',
            body: JSON.stringify({
                title: this.title.value,
                location: this.location.value,
                imagePath: this.imagePath.value,
                inventory: this.inventory.value,
                price: this.price.value,
            })
        })
            .then(res => {
                this.props.editItem(res.item);
                this.toggle();
            })
    }

    render(){
        return (
      <div>
          <img src={this.props.item.imagePath} onClick={this.toggle}/>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Edit Item</ModalHeader>
          <ModalBody>
              <img src={this.props.item.imagePath} width="60%" height="60%"/>
              <Form>
                  <FormGroup>
                      <Label for="edit-modal">Title</Label>
                      <Input type="text" defaultValue={this.props.item.title} getRef={input=>this.title=input}/>
                  </FormGroup>
                  <FormGroup>
                      <Label for="edit-modal">Location</Label>
                      <Input type="text" defaultValue={this.props.item.location} getRef={input=>this.location=input}/>
                  </FormGroup>
                  <FormGroup>
                      <Label for="editmodal">Price</Label>
                      <Input type="number" defaultValue={this.props.item.price} getRef={input=>this.price=input}/>
                  </FormGroup>
                  <FormGroup>
                      <Label for="edit-modal">Inventory</Label>
                      <Input type="number" defaultValue={this.props.item.inventory} getRef={input=>this.inventory=input}/>
                  </FormGroup>
                  <FormGroup>
                      <Label for="edit-moadl">Image</Label>
                      <Input type="link" defaultValue={this.props.item.imagePath} getRef={input=>this.imagePath=input}/>
                  </FormGroup>
              </Form>
          </ModalBody>
          <ModalFooter>
              <Button color="primary" onClick={this.editItem}>Submit</Button>
              <Button color="primary" onClick={this.deleteItem}>Delete</Button>
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
      </Modal>
     </div>
      );
    }
}

export default EditItemModal;
