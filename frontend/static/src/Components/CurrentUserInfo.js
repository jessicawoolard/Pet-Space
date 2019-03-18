import React, { Component } from 'react';
import '../App.css';

class CurrentUserInfo extends Component {
     constructor(props) {
         super(props);
     }
     render() {
         let _users = this.props.users;

         let users = _users.map(function (user) {
            return ([
                <p>{users}</p>
            ]);
        });
    return (
        <div>{users}</div>
    )
     }
}

export default CurrentUserInfo;
