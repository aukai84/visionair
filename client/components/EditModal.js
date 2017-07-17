import React, {Component} from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Input, Label, Form, FormGroup } from 'reactstrap';

class EditModal extends Component {
    constructor(props){
        super(props);
        this.state = {
            modal: false,
            backdrop:true
        };
        this.toggle = this.toggle.bind(this);
        this.changeBackdrop = this.changeBackdrop.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
    }

    toggle(){
        this.setState({
            modal: !this.state.modal
        })
    }

    deleteItem(){
        this.setState({
            modal: !this.state.modal
        })
    }

    changeBackdrop(e){
        let value = e.target.value;
        if(value !== 'static'){
            value = JSON.parse(value);
        }
        this.setState({backdrop: value})
    }

    render(){
        return (
      <div>
          <img src={this.props.link} color="danger" onClick={this.toggle}/>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className} backdrop={this.state.backdrop}>
          <ModalHeader toggle={this.toggle}>{this.props.buttonLabel}</ModalHeader>
          <ModalBody>
              {this.props.children}
          </ModalBody>
          <ModalFooter>
              <Button color="primary" onClick={this.toggle}>Submit</Button>{' '}
              <Button color="primary" onClick={this.deleteItem}>Delete</Button>
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
      );
    }
}

export default EditModal;
