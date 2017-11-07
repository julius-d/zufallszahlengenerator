import React, {Component} from 'react';
import './App.css';

class App extends Component {

  constructor() {
    super();
    this.state = {
      randomNumbers: [],
      minValue: 1,
      maxValue: 32
    }
  }

  static getRandomInt(min, max) {
    max = max + 1;
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

  generateRandomNumbers() {
    const newRandom = App.getRandomInt(this.state.minValue, this.state.maxValue);
    this.setState({
      randomNumbers: [newRandom, ...this.state.randomNumbers]
    });
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: parseInt(value, 10)
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Zufallszahlengeneratort</h1>
        </header>
        <div className="App-intro">
          <div>
            <label>Min</label>
            <input name="minValue" type="number" value={this.state.minValue}
                   onChange={this.handleInputChange.bind(this)}/>
          </div>
          <div>
            <label>Max</label>
            <input name="maxValue" type="number" value={this.state.maxValue}
                   onChange={this.handleInputChange.bind(this)}/>
          </div>
          <button onClick={this.generateRandomNumbers.bind(this)}>Würfeln</button>
          {this.state.randomNumbers.map((randomNumber, i) => <div key={i}><strong>{randomNumber}</strong></div>)}
        </div>
      </div>
    );
  }
}

export default App;
