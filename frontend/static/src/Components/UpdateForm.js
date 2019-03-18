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
        this.props.updateUser({
            first_name: this.state.first_name,
            last_name: this.state.last_name,
            phone_number: this.state.phone_number,
            street_address: this.state.street_address,
            street_address_2: this.state.street_address_2,
            city: this.state.city,
            state: this.state.state,
            zip_code: this.state.zip_code,
        });
        this.setState({data: ''});
        this.refs.form.reset();

    }
      handleInput(event) {

    }
  render() {
    return (
        <div>

        <form onSubmit={event => {event.preventDefault(); }} ref="form" autoComplete={'off'}>
            <input type='text' name='first_name' placeholder={'First name'} />
            <input type='text' name='last_name' placeholder={'Last name'}/>
            <input type='text' name='phone_number' placeholder={'Phone number'}/>
            <input type='text' name='street_address' placeholder={'Street address'}/>
            <input type='text' name='street_address_2' placeholder={'Street address cont'}/>
            <input type='text' name='city' placeholder={'City'}/>
            <input type='text' name='state' placeholder={'State'}/>
            <input type='text' name='zip_code' placeholder={'Zip code'}/>
            <input type='button' onClick={this.handleSubmit} value='Update'/>
        </form>
        </div>
    );
  }
}

export default UpdateForm;
