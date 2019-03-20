import React, {Component} from 'react';
import '../App.css';

class UpdateForm extends Component {

    constructor(props) {
        super(props);

        this.state = {
            first_name: this.props.updateUser != null ? this.props.updateUser.first_name : null,
            last_name: this.props.updateUser != null ? this.props.updateUser.last_name : null,
            phone_number: this.props.updateUser != null ? this.props.updateUser.phone_number : null,
            street_address: this.props.updateUser != null ? this.props.updateUser.street_address : null,
            street_address_2: this.props.updateUser != null ? this.props.updateUser.street_address_2 : null,
            city: this.props.updateUser != null ? this.props.updateUser.city : null,
            state: this.props.updateUser != null ? this.props.updateUser.state : null,
            zip_code: this.props.updateUser != null ? this.props.updateUser.zip_code : null,
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
// these values are not getting the current state and they are all undefined
        console.log(this.state);
        let user = {
            first_name: this.state.first_name,
            last_name: this.state.last_name,
            phone_number: this.state.phone_number,
            street_address: this.state.street_address,
            street_address_2: this.state.street_address_2,
            city: this.state.city,
            state: this.state.state,
            zip_code: this.state.zip_code,
        };

        console.log("fittin' to submit");
        this.setState({user: user});
        this.props.onUpdate(user);

        // this.refs.form.reset();
    }

    handleChange(event) {
        if (event.target.name === "first_name") {
            this.setState({"first_name": event.target.value});
        } else if (event.target.name === "last_name") {
            this.setState({"last_name": event.target.value});
        } else if (event.target.name === "phone_number") {
            this.setState({"phone_number": event.target.value});
        } else if (event.target.name === "street_address") {
            this.setState({"street_address": event.target.value});
        } else if (event.target.name === "street_address_2") {
            this.setState({"street_address_2": event.target.value});
        } else if (event.target.name === "city") {
            this.setState({"city": event.target.value});
        } else if (event.target.name === "state") {
            this.setState({"state": event.target.value});
        } else if (event.target.name === "zip_code") {
            this.setState({"zip_code": event.target.value});
        }
    }

    render() {

        let first_name = this.props.updateUser != null ? this.props.updateUser.first_name : "";
        let last_name = this.props.updateUser != null ? this.props.updateUser.last_name : "";
        let phone_number = this.props.updateUser != null ? this.props.updateUser.phone_number : "";
        let street_address = this.props.updateUser != null ? this.props.updateUser.street_address : "";
        let street_address_2 = this.props.updateUser != null ? this.props.updateUser.street_address_2 : "";
        let city = this.props.updateUser != null ? this.props.updateUser.city : "";
        let state = this.props.updateUser != null ? this.props.updateUser.state : "";
        let zip_code = this.props.updateUser != null ? this.props.updateUser.zip_code : "";

        return (
            <div>
                <form onSubmit={event => {
                    event.preventDefault();
                }} ref="form" >
                    <div><input type="text" name="first_name" onChange={this.handleChange} defaultValue={first_name} placeholder={'First name'}/></div>
                    <div><input type="text" onChange={this.handleChange} name="last_name" defaultValue={last_name} placeholder={'Last name'}/></div>
                    <div><input type="text" onChange={this.handleChange} name="phone_number" defaultValue={phone_number} placeholder={'Phone number'}/></div>
                    <div><input type="text" onChange={this.handleChange} name="street_address" defaultValue={street_address} placeholder={'Street address'}/></div>
                    <div><input type="text" onChange={this.handleChange} name="street_address_2" defaultValue={street_address_2} placeholder={'Street address cont'}/></div>
                    <div><input type="text" onChange={this.handleChange} name="city" defaultValue={city} placeholder={'City'}/></div>
                    <div><input type="text" onChange={this.handleChange} name="state" defaultValue={state} placeholder={'State'}/></div>
                    <div><input type="text" onChange={this.handleChange} name="zip_code" defaultValue={zip_code} placeholder={'Zip code'}/></div>
                    <input type="button" onClick={this.handleSubmit} defaultValue="Update"/>
                </form>
            </div>
        );
    }
}

export default UpdateForm;
