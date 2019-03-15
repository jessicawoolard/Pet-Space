import React, { Component } from 'react';
import './App.css';

class UpdateUserForm extends Component {
    constructor(props) {
        super(props);

        this.state = {

        };
        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInput(event){
        event.preventDefault();
    }

    handleSubmit(event){

    }


    render(){
        return (
            <form onSubmit={event => {event.preventDefault();}}>

            </form>
        );
    }
}
export default UpdateUserForm;