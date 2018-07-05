import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Person from './components/Person/Person';

class App extends Component {

  state = {
    showPersons: null,
  }

  handleToggleComponent = () => {
    this.setState({
      showPersons: !this.state.showPersons,
    })
  }

  render() {
    //Write the conditional expression within the render method because
    //React re-renders everything that is within this method. Hence, once
    //the conditional is met, it will re-render and you'll see the proper
    //JSX appear.

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <Person />
      )
    }

    return (
      <div>
        <button
          onClick={this.handleToggleComponent}
        >Toggle Component</button>
        {persons}
      </div>
    )
  }
}


ReactDOM.render(<App />, document.getElementById('root'));
