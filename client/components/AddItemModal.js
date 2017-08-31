import React, {Component} from 'react';
import {Button, Modal, ModalHeader, ModalBody, ModalFooter, Input, Label, Form, FormGroup} from 'reactstrap';

class AddItemModal extends Component {
    constructor(props){
        super(props);
        this.state = {
            modal: false,
            successModal: false,
            successMessage: '',
            newItem: {},
            fullImage: {},
            thumbnail: {}
        }
        this.toggle = this.toggle.bind(this);
        this.toggleSuccess = this.toggleSuccess.bind(this);
        this.addItem = this.addItem.bind(this);
        this.handleImageUpload = this.handleImageUpload.bind(this);
        this.handleThumbnailUpload = this.handleThumbnailUpload.bind(this);
    } 
    toggle(){
        this.setState({
            modal: !this.state.modal 
        })
    }

    toggleSuccess(){
        this.setState({
            successModal: !this.state.successModal
        })
    }

    addItem(e){
        e.preventDefault();
        let images = new FormData();
        images.append('fullImage', this.state.fullImage)
        images.append('thumbnail', this.state.thumbnail)
        this.props.auth.fetch(`${this.props.auth.domain}/admin/edit-shop/upload-item`, {
            method: 'POST',
            enctype: 'multipart/form-data',
            body: images 
        })
            .then(res => {
                this.props.auth.fetch(`${this.props.auth.domain}/admin/edit-shop/new-item`, {
                    method: 'POST',
                    body: JSON.stringify({
                    title: this.title.value,
                    location: this.location.value,
                    price: this.price.value,
                    inventory: this.inventory.value,
                    imagePath: `/static/images/${res.fullImageName}`,
                    thumbnailPath: `static/images/${res.thumbnailName}`
            })
        })
            .then(res => {
                this.setState({
                    successMessage: res.message,
                    newItem: res.createdItem
                })
                this.props.addItem(res.createdItem);
            })

            })

        this.toggleSuccess();
        this.toggle();
    }

    handleImageUpload(e){
        const reader = new FileReader();
        const fullImage = e.target.files[0];
        reader.onload = () => {
            this.setState({
                fullImage 
            })
        }
        reader.readAsDataURL(fullImage);
    }

    handleThumbnailUpload(e){
        const reader = new FileReader();
        const thumbnail = e.target.files[0];
        reader.onload = () => {
            this.setState({
                thumbnail
            })
        }
        reader.readAsDataURL(thumbnail);
    }

    render(){
        console.log('upload items state...', this.state)
        return(
            <div>
                <Button color="primary" onClick={this.toggle}>Add +</Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                    <ModalHeader toggle={this.toggle}>Add Item</ModalHeader>
                    <ModalBody>
                        <Form>
                            <FormGroup>
                                <Label for="add-modal">Title:</Label>
                                <Input type="text" getRef={input=>this.title=input}/>
                            </FormGroup>
                            <FormGroup>
                                <Label for="add-modal">Location:</Label>
                                <Input type="text" getRef={input=>this.location=input}/>
                            </FormGroup>
                            <FormGroup>
                                <Label for="add-modal">Price:</Label>
                                <Input type="number" getRef={input=>this.price=input}/>
                            </FormGroup>
                            <FormGroup>
                                <Label for="add-modal">Inventory:</Label>
                                <Input type="number" getRef={input=>this.inventory=input}/>
                            </FormGroup>
                           <FormGroup> 
                                <Label for="add-modal">Upload Image</Label>
                                <Input type="file" name="fullImage" accept="image/*" onChange={this.handleImageUpload}/>
                            </FormGroup>
                            <FormGroup>
                                <Label for="add-moadl">Upload Thumbnail</Label>
                                <Input type="file" name="thumbnail" accept="image/*" onChange={this.handleThumbnailUpload}/>
                            </FormGroup>
                            {this.state.imageUrl ? (<img width="60%" height="60%" src={this.state.imagePreviewUrl}/>) : (<p>Image Preview</p>)}
                        </Form>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={this.addItem}>Add</Button>
                        <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                    </ModalFooter>
                </Modal>
                <Modal isOpen={this.state.successModal} toggle={this.toggleSuccess} className="add-item-success">
                    <ModalHeader>New Item Added</ModalHeader>
                    <ModalBody>
                        <img src={this.state.newItem.imagePath} width="60%" height="60%"/>
                        <p>{this.state.newItem.title}</p>
                        <p>{this.state.newItem.location}</p>
                        <p>${this.state.newItem.price}</p>
                        <p>{this.state.newItem.inventory}</p>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={this.toggleSuccess}>Close</Button>
                    </ModalFooter>
                </Modal>
            </div>
        )
    }

}

export default AddItemModal;
