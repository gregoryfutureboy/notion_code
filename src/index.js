import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class App extends Component {

  state = {
    showHello: false,
  }

  handleToggleHello = () => {
    this.setState({
      showPersons: !this.state.showPersons
    })
  }

  render() {
    return (
      <div>
        <button
          onClick={this.handleToggleHello}>Toggle Hello</button>
        {this.state.showPersons ? <h1>Hello</h1> : null}
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
