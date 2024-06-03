

import React from 'react';

class PersonForm extends React.Component {
    render() {

        console.log('hi');
        return (
            <div className='row'>
                <div className='col-md-6 offset-md-2'>
                    <input type='text'
                        value={this.props.FirstName}
                        onChange={this.props.onFirstNameChange}
                        className='form-control'
                        placeholder='Enter First Name...' />
                </div>
                <br/>
                <div className='col-md-6 offset-md-2'>
                    <input type='text'
                        value={this.props.LastName}
                        onChange={this.props.onLastNameChange}
                        className='form-control'
                        placeholder='Enter Last Name...' />
                </div>
                <br />
                <div className='col-md-6 offset-md-2'>
                    <input type='text'
                        value={this.props.Age}
                        onChange={this.props.onAgeChange}
                        className='form-control'
                        placeholder='Enter Age...' />
                </div>
                <div className='col-md-1'>
                    <button className='btn btn-dark w-100' onClick={this.props.onAddingClick}>Add</button>
                </div>
                <div className='col-md-1'>
                    <button className='btn btn-warning w-100' onClick={this.props.onClearClick}>Clear</button>
                </div>
            </div>

        )
    }

}

export default PersonForm;
