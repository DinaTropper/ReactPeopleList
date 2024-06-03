
import React from 'react';

class PersonRow extends React.Component {
    getClassName = (Age) => {
        if (Age > 65) {
            return "table-danger";
        }

        return '';
    }

    createRow = () => {

        return this.props.People.map(person => (
            <tr className={this.getClassName(person.Age)}>
                <td>{person.FirstName}</td>
                <td>{person.LastName}</td>
                <td>{person.Age}</td>
            </tr>)

        );
    }

    render() {
        return this.createRow();

    }
}

export default PersonRow;