import React from 'react';

export class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  increaseReaction = reaction => {
    this.setState(prevState => {
      return {
        [reaction]: prevState[reaction] + 1,
      };
    });
  };

  countTotalFeedback = () => {
    return Object.values(this.state).reduce(
      (total, value) => (total += value),
      0
    );
  };

  countPositiveFeedbackPercentage = totalFeedback => {
    return totalFeedback
      ? Math.round((this.state.good / totalFeedback) * 100)
      : 0;
  };

  render() {
    return (
      <div>
        <h2>Please leave feedback</h2>
        <div>
          {Object.keys(this.state).map(value => {
            return (
              <button
                key={value}
                type="button"
                onClick={() => this.increaseReaction(value)}
              >
                {value}
              </button>
            );
          })}
        </div>

        <h2>Statistics</h2>
        {this.countTotalFeedback() !== 0 && (
          <div>
            <p>Good: {this.state.good}</p>
            <p>Neutral: {this.state.neutral}</p>
            <p>Bad: {this.state.bad}</p>
            <p>Total: {this.countTotalFeedback()}</p>
            <p>
              Positive feedback:{' '}
              {this.countPositiveFeedbackPercentage(this.countTotalFeedback())}%
            </p>
          </div>
        )}

        {this.countTotalFeedback() === 0 && <p>There is no feedback</p>}
      </div>
    );
  }
}
