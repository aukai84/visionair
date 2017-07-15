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
    }
}
