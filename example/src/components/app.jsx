import React, {Component} from 'react';
import Counter from './counter';
import StepManager from './step-manager';

class App extends Component {
  render(){
    return (
      <div className="App">
        <Counter />
        <StepManager />
      </div>
    );
  }
}

export default App;