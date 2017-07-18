import React, {Component} from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

class CrudComponent extends Component {
    constructor(props){
        super(props);
    }


    render(){
        console.log('crud props', this.props)
        return (
            <div>
                <img src={this.props.item.imagePath} width="50%" height="50%" />
                <Form>
                    <p>Title
                        <Input placeholder={this.props.item.title}/>
                    </p>
                    <p>Location
                        <Input placeholder={this.props.item.location}/>
                    </p>
                    <p>Inventory
                        <Input placeholder={this.props.item.inventory}/>
                    </p>
                    <p>Location
                        <Input placeholder={this.props.item.location}/>
                    </p>
                    <p>Price
                        <Input placeholder={this.props.item.price}/>
                    </p>
                    <p>Image
                        <Input type="file" name="file" id="imageFile"/>
                    </p>
                </Form>
        </div>
        )
    }
}

export default CrudComponent;
