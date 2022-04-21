import React from 'react';
import { Statistics } from './Statistics/Statistics';

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

        {this.countTotalFeedback() !== 0 && (
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.countTotalFeedback()}
            positiveFeedbackPercentage={this.countPositiveFeedbackPercentage(
              this.countTotalFeedback()
            )}
          ></Statistics>
        )}

        {this.countTotalFeedback() === 0 && <p>There is no feedback</p>}
      </div>
    );
  }
}
