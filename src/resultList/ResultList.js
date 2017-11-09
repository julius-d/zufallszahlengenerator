import React, {Component} from 'react';
import "./ResultList.css";


export default class ResultList extends Component {

  render() {
    const numberOfResults = this.props.randomNumbers.length;
    return (
      <div className="Results">
        {this.props.randomNumbers.map((randomNumber, i) =>
          <div key={numberOfResults - i}>
            <strong className={i === 0 ? "newest-result" : ""}>{randomNumber}</strong>
          </div>)}
      </div>
    );
  }

}
