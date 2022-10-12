/////// 1 step; import useState from React
//{useState} is to use Hooks

import React, { useReducer } from "react";
import reducer from "../utils/ContactReducer";
import MessageCard from "./MessageCard";
import ColourChoicePanel from "./ColourChoicePanel";
import { useNavigate } from "react-router-dom";

//this.state は　Hooks では使えない

//same as below
// function ContactHook(){

// }

const ContactHook = () => {

  let navigate = useNavigate();

  /////// step 2; make initial variable
  // const initialContactFormData = {
  //   name: "",
  //   message: "",
  //   email: "",
  //   userMessage: "",
  // };

  /////// step 3; useState syntax
  // syntax of useState 'const [state, setState] = useState(initialState: from step 2)'
  // contactFormData: store contact data so that we can access the data from here like `contactFormData.message`
  // in class it is like `this.state.message`
  // setContactFormData: method to uspdate state

  // const [contactFormData, setContactFormData] = useState(
  //   initialContactFormData
  // );

  const initialState = {
    name: "",
    message: "",
    email: "",
    userMessage: "",
    textColour: "#123456",
    cardColour: "#000000",
  };

  const [store, dispatch] = useReducer(reducer, initialState); //reducer is in the utils folder
  const { name, message, email, userMessage, textColour, cardColour } = store;

  // function handleOnChange(event) {
  //   setContactFormData({
  //     // destructuring to get form data
  //     // square brackets means that it's a key we're setting state with
  //     ...contactFormData, // this is already here ( data already stored )
  //     [event.target.name]: event.target.value // overwriting
  //   })
  // }

  function handleOnChange(event) {
    dispatch({
      type: "setFormData",
      data: event.target,
    });
  }

  function setUserMessage(userMessage) {
    dispatch({
      type: "setUserMessage",
      data: userMessage,
    });
  }

  function setTextColour(colour) {
    dispatch({
      type: "setTextColour",
      data: colour,
    });
  }
  function setCardColour(colour) {
    dispatch({
      type: "setCardColour",
      data: colour,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    // console.log("Submitted!");
    // console.log(!isNaN(parseInt(message)));
    // console.log(this.state.message.toLowerCase().split(' ').join())
    if (name.length === 0) {
      setUserMessage("Name must be provided");
    } else if (message.length === 0) {
      setUserMessage("Message must be provided.");
    } else if (!isNaN(parseInt(message))) {
      setUserMessage("Message must not be a number");
    } else if (email.length === 0) {
      setUserMessage("Email must be provided.");
    } else if (message.toLowerCase().split(" ").join("").includes("moist")) {
      setUserMessage("Please refrain from such language.");
    } else {
      // setUserMessage("All is okay!")
      navigate("/thanks");
    }
  }

  return (
    <section id="contact">
      <div>
        <h2>Contact</h2>
      </div>
      <h3>White me a card!</h3>

      <div>
        <form>
          <label>Name: </label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={handleOnChange}
          ></input>
          <br></br>
          <label>Message:</label>
          <textarea
            type="textarea"
            name="message"
            rows="5"
            cols="33"
            value={message}
            onChange={handleOnChange}
          ></textarea>
          <br></br>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleOnChange}
          ></input>
        </form>
      </div>

      <div>
        <h4>This is what you have entered:</h4>
        {/* pass name, message, email to Message props */}
        <MessageCard
          name={name}
          message={message}
          email={email}
          textColour={textColour}
          cardColour={cardColour}
        />
        <ColourChoicePanel
          textColour={textColour}
          cardColour={cardColour}
          setCardColour={setCardColour}
          setTextColour={setTextColour}
        />
      </div>
      <p style={{ color: "blue" }}>
        <b>{userMessage}</b>
      </p>
      <button onClick={handleSubmit}>Submit</button>
    </section>
  );
};

export default ContactHook;
