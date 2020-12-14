import logo from './logo.svg';
import './App.css';
import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    }
  }
  countIncrement = () => {
    var {counter} = this.state;
    if (counter == 10) {
      this.setState({counter: 0})
    }
    else {
      this.setState({counter: counter + 1})
    }
    
  }
  countDecrement = () => {
    var {counter} = this.state;
    if (counter == -10) {
      this.setState({counter: 0})
    }
    else {
      this.setState({counter: counter - 1})
    }
  }
  render() {
    return (
      <>
      <label>counter:</label>
      <button onClick={this.countDecrement}>-</button>
      {this.state.counter}
      <button onClick={this.countIncrement}>+</button>
      </>
    );
  }
}


export default App;
