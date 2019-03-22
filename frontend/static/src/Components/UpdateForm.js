import React, {Component} from 'react';
import '../App.css';

class UpdateForm extends Component {

    constructor(props) {
        super(props);

        this.state = {
            first_name: '',
            last_name: '',
            phone_number: '',
            street_address: '',
            street_address2: '',
            city: '',
            state: '',
            zip_code: ''
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this)
    }

    componentDidUpdate(prevProps){
        if(this.props.updateUser !== prevProps.updateUser){
            let user = this.props.updateUser;
            this.setState({first_name: user.first_name, last_name: user.last_name, phone_number: user.phone_number, street_address: user.street_address, street_address2: user.street_address2, city: user.city, state: user.state, zip_code: user.zip_code })
        }
    }

    handleSubmit(event) {
        event.preventDefault();
        if(this.state.first_name) {
            this.props.onUpdate(this.state);
        }
    }

    handleChange(event) {
        this.setState({[event.target.name]: event.target.value});
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} ref="form" >
                <div><input type="text" name="first_name" onChange={this.handleChange} value={this.state.first_name} placeholder={'First name'}/></div>
                <div><input type="text" onChange={this.handleChange} name="last_name" value={this.state.last_name} placeholder={'Last name'}/></div>
                <div><input type="text" onChange={this.handleChange} name="phone_number" value={this.state.phone_number} placeholder={'Phone number'}/></div>
                <div><input type="text" onChange={this.handleChange} name="street_address" value={this.state.street_address} placeholder={'Street address'}/></div>
                <div><input type="text" onChange={this.handleChange} name="street_address_2" value={this.state.street_address_2} placeholder={'Street address cont'}/></div>
                <div><input type="text" onChange={this.handleChange} name="city" value={this.state.city} placeholder={'City'}/></div>
                <div><input type="text" onChange={this.handleChange} name="state" value={this.state.state} placeholder={'State'}/></div>
                <div><input type="text" onChange={this.handleChange} name="zip_code" value={this.state.zip_code} placeholder={'Zip code'}/></div>
                <input type="submit" value="Update"/>
            </form>
        );
    }
}

export default UpdateForm;
