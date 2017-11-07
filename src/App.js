import React, {Component} from 'react';
import './App.css';
import {Button, ControlLabel, Form, FormControl, FormGroup} from "react-bootstrap";

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
    let value = target.value;
    value = parseInt(value, 10);
    if (isNaN(value) || value < 0) {
      value = '';
    }

    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Zufallszahlengeneratort</h1>
        </header>

        <Form inline>
          <FormGroup controlId="min" bsSize="large">
            <ControlLabel>Min</ControlLabel>
            {' '}
            <FormControl name="minValue" type="number" value={this.state.minValue}
                         onChange={this.handleInputChange.bind(this)}/>
          </FormGroup>
          {' '}
          <FormGroup controlId="max" bsSize="large">
            <ControlLabel>Max</ControlLabel>
            {' '}
            <FormControl name="maxValue" type="number" value={this.state.maxValue}
                         onChange={this.handleInputChange.bind(this)}/>
          </FormGroup>
          {' '}
          <Button onClick={this.generateRandomNumbers.bind(this)} bsStyle="primary" bsSize="large"
                  block>Würfeln</Button>
        </Form>
        {this.state.randomNumbers.map((randomNumber, i) => <div key={i}><strong>{randomNumber}</strong></div>)}
      </div>
    );
  }
}

export default App;
