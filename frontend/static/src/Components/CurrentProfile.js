import React, {Component} from 'react';
import '../App.css';

class CurrentProfile extends Component {

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
                zip_code: user.zip_code
            })
        }
    }

    render() {

        // if (this.props.updateUser) {
        //     first_name = this.props.updateUser.first_name;
        // } else {
        //     first_name = "";
        // }
        // let first_name = this.props.updateUser != null ? this.props.updateUser.first_name : "";
        // let last_name = this.props.updateUser != null ? this.props.updateUser.last_name : "";
        // let phone_number = this.props.updateUser != null ? this.props.updateUser.phone_number : "";
        // let street_address = this.props.updateUser != null ? this.props.updateUser.street_address : "";
        // let street_address_2 = this.props.updateUser != null ? this.props.updateUser.street_address_2 : "";
        // let city = this.props.updateUser != null ? this.props.updateUser.city : "";
        // let state = this.props.updateUser != null ? this.props.updateUser.state : "";
        // let zip_code = this.props.updateUser != null ? this.props.updateUser.zip_code : "";

        return (
            <table>
                <tbody>
                    <tr>
                        <td>First Name</td>
                        <td>{this.state.first_name}</td>
                    </tr>
                                        <tr>
                        <td>Last Name</td>
                        <td>{this.state.last_name}</td>
                    </tr>
                                        <tr>
                        <td>Phone Number</td>
                        <td>{this.state.phone_number}</td>
                    </tr>
                                        <tr>
                        <td>Street Address</td>
                        <td>{this.state.street_address}</td>
                    </tr>
                                        <tr>
                        <td>Street Address 2</td>
                        <td>{this.state.street_address_2}</td>
                    </tr>
                                        <tr>
                        <td>City</td>
                        <td>{this.state.city}</td>
                    </tr>
                                        <tr>
                        <td>State</td>
                        <td>{this.state.state}</td>
                    </tr>
                                        <tr>
                        <td>Zip Code</td>
                        <td>{this.state.zip_code}</td>
                    </tr>
                </tbody>
            </table>

        );
    }
}

export default CurrentProfile;
