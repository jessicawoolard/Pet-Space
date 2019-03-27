import React, {Component} from 'react';
import '../App.css';
import {Button, Card} from 'react-bootstrap';


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

        return (
            <div className='current_profile'>
            <Card style={{width: '18rem'}} border="info">
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        <table>
                            <tbody>
                            <tr>
                                <td className='current_info'>First Name</td>
                                <td className='current_info'>{this.state.first_name}</td>
                            </tr>
                            <tr>
                                <td className='current_info'>Last Name</td>
                                <td className='current_info'>{this.state.last_name}</td>
                            </tr>
                            <tr>
                                <td className='current_info'>Phone Number</td>
                                <td className='current_info'>{this.state.phone_number}</td>
                            </tr>
                            <tr>
                                <td className='current_info'> Street Address</td>
                                <td className='current_info'>{this.state.street_address}</td>
                            </tr>
                            <tr>
                                <td className='current_info'>Street Address 2</td>
                                <td className='current_info'>{this.state.street_address_2}</td>
                            </tr>
                            <tr>
                                <td className='current_info'>City</td>
                                <td className='current_info'>{this.state.city}</td>
                            </tr>
                            <tr>
                                <td className='current_info'>State</td>
                                <td className='current_info'>{this.state.state}</td>
                            </tr>
                            <tr>
                                <td className='current_info'>Zip Code</td>
                                <td className='current_info'>{this.state.zip_code}</td>
                            </tr>
                            </tbody>
                        </table>
                    </Card.Text>
                    <div>
                    <a href="../../user_dashboard/"> <Button variant="success">Go back to dashboard</Button> </a>
                </div>

                </Card.Body>

            </Card>
            </div>
        );
    }
}

export default CurrentProfile;
