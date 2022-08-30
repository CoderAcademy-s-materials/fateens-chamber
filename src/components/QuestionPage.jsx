import React from "react";

class QuestionPage extends React.Component {
  constructor(props) {
    super(props);

    // set state using this.state
    console.log("1. constructor");
  }

  componentDidMount() {
    console.log("3. componentDidMount");
  }

  componentDidUpdate() {
    console.log("4. componentDidUpdate");
  }

  componentWillUnmount() {
    console.log("5. componentWillUnmount");
  }

  render() {
    console.log("2. render");
    return (
      <div>
        <h1>Question Page</h1>
      </div>
    );
  }
}

export default QuestionPage;
