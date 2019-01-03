import React, { Component } from 'react';
import P5Wrapper from './components/P5Wrapper';
import example from './sketches/example';

class App extends Component {
  updateStateHandler = (newState, callback) => this.setState(newState, callback);

  render() {
    return (
      <div>
        <P5Wrapper sketch={example} updateStateHandler={this.updateStateHandler} />
      </div>
    );
  }
}

export default App;
