import React, { Component } from 'react';
import './../App.css';
import UpdateForm from "./../Components/UpdateForm";

class App extends Component {
  constructor(props) {
      super(props);

      this.state = {
      users: [],
      first_name: '',
      last_name: '',
      phone_number: '',
      street_address: '',
      street_address_2: '',
      city: '',
      state: '',
      zip_code: '',
    };

    this.updateUser = this.updateUser.bind(this);
  }

  updateUser(user) {
        console.log(user);
        // let text = user.text;
        let first_name = user.first_name;
        let last_name = user.last_name;
        let phone_number = user.phone_number;
        let street_address = user.street_address;
        let street_address_2 = user.street_address_2;
        let city = user.city;
        let state = user.state;
        let zip_code = user.zip_code;

        let formData = new FormData();
        formData.append('first_name', first_name);
        formData.append('last_name', last_name);
        formData.append('phone_number', phone_number);
        formData.append('street_address', street_address);
        formData.append('street_address_2', street_address_2);
        formData.append('city', city);
        formData.append('state', state);
        formData.append('zip_code', zip_code);

        fetch(`${process.env.REACT_APP_API_HOST}/api/user/`, {
            method: 'POST',
            body: formData
        }).then(response => response.json())
            .then(json => {
                let updatedUsers = [...this.state.users];
                updatedUsers.push(json);
                this.setState({users: updatedUsers});
                console.log('Success', JSON.stringify(json))

            })

            .catch(error => console.log('Error', error))
    }

    componentDidMount() {
        fetch(`${process.env.REACT_APP_API_HOST}/api/user/`, {
            method: "GET"
        }).then(response => {
            if (response.status === 200) {
                return response.json();
            } else {
                throw new Error('something went wrong');
            }
        })
            .then(json => {
                console.log('items', json);
                this.setState({users: json})
            })
            .catch(error => console.log(error))
    }

  render() {
    return (
      <div className="App">
        <UpdateForm updateUser={this.updateUser}/>
      </div>
    );
  }
}

export default App;
