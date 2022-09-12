import AnswerPage from "./AnswerPage";
import QuestionPage from "./QuestionPage";
import React from "react";

export const questions = [
  "You like books",
  "You like to do coding",
  "You are cat",
  "I know a lot about Pokemon",
  "You prefer to write with pencils rather than pens",
];

class Quiz extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      number: 0,
    };

    this.incrementNumber = this.incrementNumber.bind(this);
  }

  incrementNumber() {
    this.setState((state, props) => ({
      number: this.state.number + 1,
    }));
  }

  render() {
        return (
      <div id="quiz">
        <h1>
          ✨ Your fate relies on the Pokemon that will help you win the most
          battles ✨
        </h1>
        <a href="#top">Top</a>
        <h2>Complete the quiz below to find out your fate.</h2>

        {/* <QuestionPage questionNumber={this.state.number} /> */}

        {this.state.number >= questions.length ? (
          <AnswerPage />
        ) : (
          <QuestionPage
            questionNumber={this.state.number}
            incrementNumber={this.incrementNumber}
          />
        )}
      </div>
    );
  }
}

export default Quiz;
