import React, { Component } from 'react';
import FeedbackOptions from './FeedbackOptions';
import Statistics from './Statistics';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  incrementFeedback = number => {
    this.setState(prevState => {
      return {
        [number]: prevState[number] + 1,
      };
    });
  };

  countTotalFeedback = () =>
    Object.values(this.state).reduce((acc, number) => acc + number, 0);

  countPositiveFeedbackPercentage = () => {
    let positivePercent = Math.round(
      (this.state.good / this.countTotalFeedback()) * 100
    );
    return positivePercent ? positivePercent : 0;
  };

  render() {
    return (
      <div className="container">
        <h1>Please leave feedback</h1>
        <FeedbackOptions
          options={this.state}
          onLeaveFeedback={this.incrementFeedback}
        />
        <h2>Statistics</h2>
        <p>Good: {this.state.good}</p>
        <p>Neutral: {this.state.neutral}</p>
        <p>Bad: {this.state.bad}</p>
        <p>Total feedback: {this.countTotalFeedback()}</p>
        <p>
          All positive feedback:
          {this.countPositiveFeedbackPercentage()}
        </p>
      </div>
    );
  }
}
export default App;
