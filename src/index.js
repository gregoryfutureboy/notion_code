import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Person from './components/Person/Person';

class App extends Component {

  state = {
    persons: [
      { name: 'Max', age: 28 },
      { name: 'Manu', age: 29 },
      { name: 'Stephanie', age: 26 }
    ],
    showPersons: false,
  }

  handleToggleList = () => {
    this.setState({
      showPersons: !this.state.showPersons
    })
  }

  handleInputValue = (event) => {
    this.setState({
      persons: [
        {name: event.target.value}
      ]
    })
  }

  render() {

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        this.state.persons.map((person) => {
          return <Person 
                    name={person.name}
                    age={person.age}
                    onchange={this.handleInputValue}
                  />
        })
      )
    }

    return (
      <div>
        <button
          onClick={this.handleToggleList}
        >Toggle List</button>
        {persons}
      </div>
    )
  }
}




ReactDOM.render(<App />, document.getElementById('root'));
