import React from 'react';

export class Feedback extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  increaseGood = () => {
    this.setState(prevState => {
      return {
        good: prevState.good + 1,
      };
    });
  };

  increaseNeutral = () => {
    this.setState(prevState => {
      return {
        neutral: prevState.neutral + 1,
      };
    });
  };

  increaseBad = () => {
    this.setState(prevState => {
      return {
        bad: prevState.bad + 1,
      };
    });
  };

  render() {
    return (
      <div>
        <h2>Please leave feedback</h2>
        <div>
          <button onClick={this.increaseGood}>Good</button>
          <button onClick={this.increaseNeutral}>Neutral</button>
          <button onClick={this.increaseBad}>Bad</button>
        </div>
        <h2>Statistics</h2>
        <div>
          <p>Good {this.state.good}</p>
          <p>Neutral {this.state.neutral}</p>
          <p>Bad {this.state.bad}</p>
          <p>Total {this.state.good + this.state.neutral + this.state.bad}</p>
          <p>Positive feedback{}</p>
        </div>
      </div>
    );
  }
}
