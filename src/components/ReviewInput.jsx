import { React, useState } from "react";

function ReviewInput(props) {
    const [value, setValue] = useState("");
    const handleOnChange = (e) => {
      // console.log("handleOnChange")
      setValue(e.target.value);
    };
  
    const handleOnClick = (e) => {
      console.log("Clicked!")
    }
  
    return (
      <div>
        <h3>Write me a review</h3>
        <textarea onChange={handleOnChange} rows="4" cols="50"></textarea>
        <p>Character count: {value.length}</p>
        {/* <p>Word count: {value.trim().split(" ").length}</p> */}
        <p>Word count (using regex): {(value.match(/\w+/g)||[]).length}</p>
        <p>Value: {value}</p>
        <button onClick={()=> props.addReviews(value)}>Add review</button>
      </div>
    );
  }
  
  export default ReviewInput;
  