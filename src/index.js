import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Person from './components/Person/Person';

class App extends Component {

  state = {
  }

  render() {
    return (
      <div>
        <Person />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
