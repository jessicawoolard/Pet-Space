import React, {Component} from 'react';
import '../App.css';
import {Button} from 'react-bootstrap';
import {Card} from 'react-bootstrap';

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
            zip_code: '',
            latitude: '',
            longitude: ''
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this)
    }

    componentDidUpdate(prevProps) {
        if (this.props.updateUser !== prevProps.updateUser) {
            let user = this.props.updateUser;
            this.setState({
                first_name: user.first_name,
                last_name: user.last_name,
                phone_number: user.phone_number,
                street_address: user.street_address,
                street_address2: user.street_address2,
                city: user.city,
                state: user.state,
                zip_code: user.zip_code,
                latitude: user.latitude,
                longitude: user.longitude
            })
        }
    }

    handleSubmit(event) {
        event.preventDefault();
        if (this.state.first_name) {
            this.props.onUpdate(this.state);
        }
    }

    handleChange(event) {
        this.setState({[event.target.name]: event.target.value});
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} ref="form">
                <Card style={{width: '18rem'}} border="info">
                    <Card.Body>
                            <Card.Title>Need to update your information?</Card.Title>
                            <Card.Text>

                        <div className='update_input'><input type="text" name="first_name" onChange={this.handleChange}
                                    value={this.state.first_name}
                                    placeholder={'First name'} autoCapitalize/></div>
                        <div className='update_input'><input type="text" onChange={this.handleChange} name="last_name"
                                    value={this.state.last_name}
                                    placeholder={'Last name'} autoCapitalize/></div>
                        <div className='update_input'><input type="text" onChange={this.handleChange} name="phone_number"
                                    value={this.state.phone_number}
                                    placeholder={'Phone number'}/></div>
                        <div className='update_input'><input type="text" onChange={this.handleChange} name="street_address"
                                    value={this.state.street_address} placeholder={'Street address'} autoCapitalize/>
                        </div>
                        <div className='update_input'><input type="text" onChange={this.handleChange} name="street_address_2"
                                    value={this.state.street_address_2} placeholder={'Street address cont'}
                                    autoCapitalize/></div>
                        <div className='update_input'><input type="text" onChange={this.handleChange} name="city" value={this.state.city}
                                    placeholder={'City'} autoCapitalize/></div>
                        <div className='update_input'>
                            <label htmlFor="state_select"> State</label>
                            <select name="state" id="state_select" value={this.state.state}
                                    onChange={this.handleChange}>
                                <option value=""> Choose your state</option>
                                <option value="AL">Alabama</option>
                                <option value="AK">Alaska</option>
                                <option value="AZ">Arizona</option>
                                <option value="AR">Arkansas</option>
                                <option value="CA">California</option>
                                <option value="CO">Colorado</option>
                                <option value="CT">Connecticut</option>
                                <option value="DE">Delaware</option>
                                <option value="FL">Florida</option>
                                <option value="GA">Georgia</option>
                                <option value="HI">Hawaii</option>
                                <option value="ID">Idaho</option>
                                <option value="IL">Illinois</option>
                                <option value="IN">Indiana</option>
                                <option value="IA">Iowa</option>
                                <option value="KS">Kansas</option>
                                <option value="KY">Kentucky</option>
                                <option value="LA">Louisiana</option>
                                <option value="ME">Maine</option>
                                <option value="MD">Maryland</option>
                                <option value="MA">Massachusetts</option>
                                <option value="MI">Michigan</option>
                                <option value="MN">Minnesota</option>
                                <option value="MS">Mississippi</option>
                                <option value="MO">Missouri</option>
                                <option value="MT">Montana</option>
                                <option value="NE">Nebraska</option>
                                <option value="NV">Nevada</option>
                                <option value="NH">New Hampshire</option>
                                <option value="NJ">New Jersey</option>
                                <option value="NY">New Mexico</option>
                                <option value="NY">New York</option>
                                <option value="NC">North Carolina</option>
                                <option value="ND">North Dakota</option>
                                <option value="OH">Ohio</option>
                                <option value="OK">Oklahoma</option>
                                <option value="OR">Oregon</option>
                                <option value="PA">Pennsylvania</option>
                                <option value="RI">Rhode Island</option>
                                <option value="SC">South Carolina</option>
                                <option value="SD">South Dakota</option>
                                <option value="TN">Tennessee</option>
                                <option value="TX">Texas</option>
                                <option value="UT">Utah</option>
                                <option value="VT">Vermont</option>
                                <option value="VA">Virginia</option>
                                <option value="WA">Washington</option>
                                <option value="WV">West Virginia</option>
                                <option value="WI">Wisconsin</option>
                                <option value="WY">Wyoming</option>
                            </select>
                        </div>
                        <div className='update_input'><input type="text" onChange={this.handleChange} name="zip_code" value={this.state.zip_code}
                                    placeholder={'Zip code'}/></div>
                            </Card.Text>

                        <Button variant="info" type="submit" size="sm">Update</Button>
                    </Card.Body>

                </Card>
            </form>
        );
    }
}

export default UpdateForm;
