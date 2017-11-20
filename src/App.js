import React, { Component } from "react";
import "./App.css";
import {
  Button,
  Checkbox,
  Col,
  ControlLabel,
  FormControl,
  FormGroup,
  Grid,
  Row
} from "react-bootstrap";
import ResultList from "./resultList/ResultList";

class App extends Component {
  constructor() {
    super();
    this.state = {
      randomNumbers: [],
      minValue: 1,
      maxValue: 32,
      lotto: false
    };
  }

  static getRandomInt(min, max) {
    max = max + 1;
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

  generateRandomNumbers() {
    let newRandom;
    let tryCount = 0;
    do {
      tryCount++;
      newRandom = App.getRandomInt(this.state.minValue, this.state.maxValue);
    } while (
      this.state.lotto &&
      tryCount < 10000 &&
      this.state.randomNumbers.indexOf(newRandom) >= 0
    );
    this.setState({
      randomNumbers: [newRandom, ...this.state.randomNumbers]
    });
  }

  handleInputChange(event) {
    const target = event.target;
    let value = target.value;
    value = parseInt(value, 10);
    if (isNaN(value) || value < 0) {
      value = "";
    }

    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  onChangeLotto(event) {
    const target = event.target;
    const value = target.checked;

    this.setState({
      lotto: value
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Zufallszahlengenerator</h1>
        </header>

        <Grid>
          <Row>
            <Col xs={4}>
              <FormGroup controlId="min" bsSize="large">
                <ControlLabel>Min</ControlLabel>{" "}
                <FormControl
                  name="minValue"
                  type="number"
                  value={this.state.minValue}
                  onChange={this.handleInputChange.bind(this)}
                />
              </FormGroup>
            </Col>
            <Col xs={4}>
              <FormGroup controlId="max" bsSize="large">
                <ControlLabel>Max</ControlLabel>{" "}
                <FormControl
                  name="maxValue"
                  type="number"
                  value={this.state.maxValue}
                  onChange={this.handleInputChange.bind(this)}
                />
              </FormGroup>
            </Col>
            <Col xs={4}>
              <FormGroup controlId="lotto" bsSize="large">
                <ControlLabel>Jede Zahl nur einmal</ControlLabel>{" "}
                <Checkbox
                  id="lotto"
                  value={this.state.lotto}
                  onChange={this.onChangeLotto.bind(this)}
                />
              </FormGroup>
            </Col>
            <Col xs={12}>
              <Button
                onClick={this.generateRandomNumbers.bind(this)}
                bsStyle="primary"
                bsSize="large"
                block
              >
                {this.state.lotto ? "Zahl ziehen" : "Würfeln"}
              </Button>
            </Col>
          </Row>
        </Grid>
        <ResultList randomNumbers={this.state.randomNumbers} />
      </div>
    );
  }
}

export default App;
