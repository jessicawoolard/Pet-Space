import React, {Component} from 'react';
import '../App.css';

class CurrentProfile extends Component {

    constructor(props) {
        super(props);

        this.state = {
  data: props.data
};
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
                <table>
                    <tr>
                        <td>First Name</td>
                        <td>{first_name}</td>
                    </tr>
                                        <tr>
                        <td>Last Name</td>
                        <td>{last_name}</td>
                    </tr>
                                        <tr>
                        <td>Phone Number</td>
                        <td>{phone_number}</td>
                    </tr>
                                        <tr>
                        <td>Street Address</td>
                        <td>{street_address}</td>
                    </tr>
                                        <tr>
                        <td>Street Address 2</td>
                        <td>{street_address_2}</td>
                    </tr>
                                        <tr>
                        <td>City</td>
                        <td>{city}</td>
                    </tr>
                                        <tr>
                        <td>State</td>
                        <td>{state}</td>
                    </tr>
                                        <tr>
                        <td>Zip Code</td>
                        <td>{zip_code}</td>
                    </tr>
                </table>
            </div>
        );
    }
}

export default CurrentProfile;
