import React, {Component} from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

class CrudComponent extends Component {
    constructor(props){
        super(props);
    }

    render(){
        console.log('crud props', this.props)
        return (
            <Form>
                <Input placeholder={this.props.item.title}/>
                <Input placeholder={this.props.item.location}/>
                <Input placeholder={this.props.item.inventory}/>
                <Input placeholder={this.props.item.location}/>
                <Input placeholder={this.props.item.price}/>
            </Form>
        )
    }
}

export default CrudComponent;
