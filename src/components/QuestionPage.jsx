import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { questions } from "./Quiz";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";

const radioOptions = [
  {
    value: 1,
    label: "Strongly disagree",
  },
  {
    value: 2,
    label: "Disagree",
  },
  {
    value: 3,
    label: "Neither agree nor disagree",
  },
  {
    value: 4,
    label: "Agree",
  },
  {
    value: 5,
    label: "Strongly agree",
  },
];

class QuestionPage extends React.Component {
  constructor(props) {
    super(props);

    //   // set state using this.state
    //   console.log("1. constructor");

    this.state = {
      emoji: null,
      answers: [],
      currRadioValue: null
    };

    this.handleNextButton = this.handleNextButton.bind(this);
    this.handleRadioChange = this.handleRadioChange.bind(this);

  }

  getRandomEmoji() {
    const randomEmojis = ["👺", "🐣", "🦋", "🚳", "🌮", "🐤", "🐯"];
    let randomIndex = Math.floor(Math.random() * randomEmojis.length);
    console.log("getRandomEmoji=", randomEmojis[randomIndex]);
    return randomEmojis[randomIndex];
  }

  componentDidMount() {
    // console.log("3. componentDidMount")
    // this.forceUpdate();
    let randomEmoji = this.getRandomEmoji();
    this.setState({
      emoji: randomEmoji,
    });
  }

  componentDidUpdate(prevProps, prevState) {
    // console.log("4. componentDidUpdate");
    let randomEmoji = this.getRandomEmoji();

    if (prevState.emoji !== randomEmoji) {
      this.setState({
        emoji: randomEmoji,
      });
    }
  }

  componentWillUnmount() {
    // console.log("5. componentWillUnmount")
  }

  handleNextButton() {
    this.props.incrementNumber();

    // Save answers

    this.setState(function (prevState, props) {
      return {
        answers: [...prevState.answers, prevState.currRadioValue],
      };
    });
  }

  handleRadioChange(event, value) {
    // console.log("Radio button on change:", event, value);
    // let currentValue = event.target.value;
    let currentValue = value;
    this.setState({
      currRadioValue: currentValue,
      
    })
  }

  render() {
    // console.log("2. render")
    return (
      <Box sx={{ border: "1px dashed grey" }}>
        <Typography>{this.state.emoji}</Typography>

        <Typography>
          Question {this.props.questionNumber} / {questions.length}
        </Typography>


        {this.props.questionNumber < questions.length && (
          
          <div>
            <Typography>{questions[this.props.questionNumber]}</Typography>

            <RadioGroup onChange={this.handleRadioChange}>
              {radioOptions.map((option) => (
                <FormControlLabel
                key={option.value}
                  value={option.value}
                  control={<Radio />}
                  label={option.label}
                />
              ))}

            </RadioGroup>

            <Typography>Answers: {this.state.answers} </Typography>
            <Typography>
              Current Radio Value: {this.state.currRadioValue}{" "}
            </Typography>

            <Button variant="outlined" onClick={this.handleNextButton}>
              Next
            </Button>
          </div>
        )}
      </Box>
    );
  }
}

export default QuestionPage;
