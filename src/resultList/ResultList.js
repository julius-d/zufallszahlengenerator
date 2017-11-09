import React, {Component} from 'react';


export default class ResultList extends Component {

  render() {
    const numberOfResults = this.props.randomNumbers.length;
    return (
      <div className="Results">
        {this.props.randomNumbers.map((randomNumber, i) => <div key={numberOfResults-i}> <strong>{randomNumber}</strong></div>)}
      </div>
    );


  }
}
