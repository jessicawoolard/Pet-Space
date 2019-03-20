import React, {Component} from 'react';
import '../App.css';

class UpdateForm extends Component {

    constructor(props) {
        super(props);

        this.state = {};

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this)
    }

    handleSubmit(event) {
        event.preventDefault();
        if(this.state.first_name) {
            this.props.onUpdate(this.state);
        }
    }

    handleChange(event) {
        if(this.props.updateUser[event.target.name]){
            this.setState(this.props.updateUser);
        }
        this.setState({[event.target.name]: event.target.value});
    }

    render() {
        let user = this.props.updateUser != null ? this.props.updateUser : {};

        return (
            <form onSubmit={this.handleSubmit} ref="form" >
                <div><input type="text" name="first_name" onChange={this.handleChange} defaultValue={user.first_name} placeholder={'First name'}/></div>
                <div><input type="text" onChange={this.handleChange} name="last_name" defaultValue={user.last_name} placeholder={'Last name'}/></div>
                <div><input type="text" onChange={this.handleChange} name="phone_number" defaultValue={user.phone_number} placeholder={'Phone number'}/></div>
                <div><input type="text" onChange={this.handleChange} name="street_address" defaultValue={user.street_address} placeholder={'Street address'}/></div>
                <div><input type="text" onChange={this.handleChange} name="street_address_2" defaultValue={user.street_address_2} placeholder={'Street address cont'}/></div>
                <div><input type="text" onChange={this.handleChange} name="city" defaultValue={user.city} placeholder={'City'}/></div>
                <div><input type="text" onChange={this.handleChange} name="state" defaultValue={user.state} placeholder={'State'}/></div>
                <div><input type="text" onChange={this.handleChange} name="zip_code" defaultValue={user.zip_code} placeholder={'Zip code'}/></div>
                <input type="submit" defaultValue="Update"/>
            </form>
        );
    }
}

export default UpdateForm;
