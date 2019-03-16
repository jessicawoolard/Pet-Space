import React, { Component } from 'react';
import '../App.css';

class UpdateForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: null
        };
        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(event){
        event.preventDefault();
        this.props.submitForm({file: this.state.file, title: this.state.title});
        this.setState({data: ''});
        this.refs.form.reset();

    }
      handleInput(event) {

    }
  render() {
    return (
      <div className="App">

      </div>
    );
  }
}

export default UpdateForm;
