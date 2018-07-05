import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Person from './components/Person/Person';

class App extends Component {

  state = {
    persons: [
      { id: 1, name: 'Gregory', age: 24 },
      { id: 2, name: 'Philippe', age: 24 },
      { id: 3, name: 'Sacha', age: 25 }
    ],
    showPersons: false
  }

  handleToggleList = () => {
    this.setState({
      showPersons: !this.state.showPersons
    })
  }

  handleDeletePerson = (index) => {
    const personsToDelete = [...this.state.persons];
    personsToDelete.splice(index, 1)
    this.setState({
      persons: personsToDelete
    })
  }

  handleRefreshList = () => {
    this.setState({
      persons: [
        { id: 1, name: 'Gregory', age: 24 },
        { id: 2, name: 'Philippe', age: 24 },
        { id: 3, name: 'Sacha', age: 25 }
      ]
    })
  }

  render() {

    let persons = null;

    if(this.state.showPersons) {
      persons = (
        this.state.persons.map((person, index) => {
          return <Person
                    name={person.name}
                    age={person.age}
                    onclick={() => this.handleDeletePerson(index)}
                    key={person.id}
                  />
        })
      )
    }

    return (
      <div>
        <button
          onClick={this.handleToggleList}
        >Toggle List</button>
        <button
          onClick={this.handleRefreshList}
        >Refresh List</button>
        {persons}
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
