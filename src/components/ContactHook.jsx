/////// 1 step; import useState from React
 //{useState} is to use Hooks

import React, { useState } from "react";
//this.state は　Hooks では使えない

//same as below
// function ContactHook(){

// }

const ContactHook = () => {
  /////// step 2; make initial variable
  const initialContactFormData = {
    name: "",
    message: "",
    email: "",
    userMessage: "",
  };


  /////// step 3; useState syntax
  // syntax of useState 'const [state, setState] = useState(initialState: from step 2)'
  // contactFormData: store contact data so that we can access the data from here like `contactFormData.message`
  // in class it is like `this.state.message` 
  // setContactFormData: method to uspdate state
  const [contactFormData, setContactFormData] = useState(
    initialContactFormData
  );



  function handleOnChange(event) {
    setContactFormData({
      // destructuring to get form data
      // square brackets means that it's a key we're setting state with
      ...contactFormData, // this is already here ( data already stored )
      [event.target.name]: event.target.value // overwriting
    })
  }


  function handleSubmit (event){
    event.preventDefault();
    // console.log("Submitted!");
    console.log(!isNaN(parseInt(contactFormData.message)));
    // console.log(this.state.message.toLowerCase().split(' ').join())
    if (contactFormData.name.length === 0) {
      setContactFormData({
        ...contactFormData,
        userMessage: "Name must be provided",
      });
    } else if (contactFormData.message.length === 0) {
      setContactFormData({
        ...contactFormData,
        userMessage: "Message must be provided.",
      });
    } else if (!isNaN(parseInt(contactFormData.message))) {
      setContactFormData({
        ...contactFormData,
        userMessage: "Message must not be a number",
      });
    } else if (contactFormData.email.length === 0) {
      setContactFormData({
        ...contactFormData,
        userMessage: "Email must be provided.",
      });
    } else if (
      contactFormData.message.toLowerCase().split(" ").join("").includes("moist")
    ) {
      setContactFormData({
        ...contactFormData,
        userMessage: "Please refrain from such language.",
      });
    } else {
      setContactFormData({
        ...contactFormData,
        userMessage: "All is okay!",
      });
    }
  };


  return (
    <section id="contact">
      <div>
        <h2>Contact</h2>
        <a href="#top">Top</a>
      </div>
      <h3>Contact me!</h3>

      <div>
        <form>
          <label>Name: </label>
          <input
            type="text"
            name="name"
            value={contactFormData.name}
            onChange={handleOnChange}
          ></input>
          <br></br>
          <label>Message:</label>
          <textarea
            type="textarea"
            name="message"
            rows="5"
            cols="33"
            value={contactFormData.message}
            onChange={handleOnChange}
          ></textarea>
          <br></br>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={contactFormData.email}
            onChange={handleOnChange}
          ></input>
          <button onClick={handleSubmit}>Submit</button>
        </form>

        <p style={{ color: "blue" }}>
          <b>{contactFormData.userMessage}</b>
        </p>
      </div>

      <div>
        <h4>This is what you have entered:</h4>
        <p>Name: {contactFormData.name}</p>
        <p>Message: {contactFormData.message}</p>
        <p>Email: {contactFormData.email}</p>
      </div>
    </section>
  );
};

export default ContactHook;
