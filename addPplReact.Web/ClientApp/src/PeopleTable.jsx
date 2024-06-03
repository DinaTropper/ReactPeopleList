import PersonRow from './PersonRow';
import PersonForm from './PersonForm';
import React from 'react';

class PeopleTable extends React.Component {

    state = {

        FirstName: '',
        LastName: '',
        Age: '',
        People: []
    }

    onFirstChange = e => {
        this.setState({ FirstName: e.target.value });
    }

    onLastChange = e => {
        this.setState({ LastName: e.target.value });
    }

    onAgeChange = e => {
        this.setState({ Age: e.target.value });
    }

    onClearClick = () => {
        this.setState({ FirstName: '', LastName: '', Age: '', People: [] });
    }

    onAddClick = () => {
        const Person = {
            FirstName: this.state.FirstName,
            LastName: this.state.LastName,
            Age: this.state.Age
        }

        const copy = [...this.state.People, Person];
        this.setState({ People: copy, FirstName :'', LastName : '', Age :'' });
    }
    fillTable = () => {
        if (this.state.People.length === 0) {
            return <h1>There are no people added to your list yet...</h1>;
        }
        return (

            <table className="table table-hover table-bordered">
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Age</th>
                    </tr>
                </thead>
                <tbody>
 
                    <PersonRow People={this.state.People} />
                </tbody>
            </table>

        );
    }

    render() {
        console.log('hello')
        console.log(this.state.People.length)
        return(
          <div className='Container'>
        <PersonForm
            FirstName={this.state.FirstName}
            LastName={this.state.LastName}
            Age={this.state.Age}

            onFirstNameChange={this.onFirstChange}
            onLastNameChange={this.onLastChange}
            onAgeChange={this.onAgeChange}
            onClearClick={this.onClearClick}
            onAddingClick={this.onAddClick}
              />

              <div className="container mt-3">
                  <div className="col-md-12">
                      {this.fillTable()}
                  </div>
              </div>
          </div>
        
        )
    }
}

export default PeopleTable;