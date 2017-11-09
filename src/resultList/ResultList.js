import React, {Component} from 'react';


export default class ResultList extends Component {

  render() {
    return (
      <div className="Results">
        {this.props.randomNumbers.map((randomNumber, i) => <div key={i}><strong>{randomNumber}</strong></div>)}
      </div>
    );


  }
}
