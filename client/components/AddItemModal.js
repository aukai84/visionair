import React, {Component} from 'react';
import {Button, Modal, ModalHeader, ModalBody, ModalFooter, Input, Label, Form, FormGroup} from 'reactstrap';

class AddItemModal extends Component {
    constructor(props){
        super(props);
        this.state = {
            modal: false,
            backdrop: true
        }
        this.toggle = this.toggle.bind(this);
    }

    toggle(){
        this.setState({
            modal: !this.state.modal 
        })
    }

    changeBackdrop(e){
        let value = e.target.value;
        if(value !== 'static'){
            value = JSON.parse(value);
        }
        this.setState({
            backdrop: value
        })
    }
}
