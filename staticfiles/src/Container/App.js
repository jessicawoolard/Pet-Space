import React, {Component} from 'react';
import './../App.css';
import UpdateForm from "./../Components/UpdateForm";
import CurrentProfile from "../Components/CurrentProfile";
// import {Container} from 'react-bootstrap';
import {Row} from 'react-bootstrap';
import {Col} from 'react-bootstrap';


class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            user: null
        };

        this.updateUser = this.updateUser.bind(this);
    }

    updateUser(user) {
        console.log(JSON.stringify(this.state.user));
        fetch(`/api/update_profile/`, {
            method: 'PUT',
            body: JSON.stringify(user),
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
        }).then(response => response.json())
            .then(json => {
                // let updatedUser = json;
                this.setState({user: json});
                console.log('Success', json)

            })

            .catch(error => console.log('Error', error))
    }

    componentDidMount() {
        fetch('/api/update_profile/', {
            method: "GET",
            credentials: 'include',
        }).then(response => {
            if (response.status === 200) {
                return response.json();
            } else {
                throw new Error('something went wrong');
            }
        })
            .then(json => {
                // console.log('items', json);
                this.setState({user: json})
            })
            .catch(error => console.log(error))
    }

    render() {
        let user = this.state.user;
        return (
                <div className="App">
                    <div className="Container">
                    <Row className="col">
                        <Col sm={3}>
                            <CurrentProfile updateUser={user}/>
                        </Col>
                        <Col sm={9}>
                            <UpdateForm onUpdate={this.updateUser} updateUser={user}/>
                        </Col>
                    </Row>
                </div>
            </div>
        )
    }
}

export default App;
