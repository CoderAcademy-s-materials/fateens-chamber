import React from "react";
import { Box, Typography } from "@mui/material";

const ColourChoicePanel = (props) => {
    const {setCardColour, setTextColour, textColour, cardColour} = props

  function handleChange(event) {
    console.log(event.target)
    console.log(event.target.value)


    let {name, value} = event.target;

    if(name === 'text-colour') {
        setTextColour(value)
    } else if (name === 'card-colour') {
        setCardColour(value)

    }
   
  }

  return (
    <Box>
      <Typography>Text Colour</Typography>
      <input type="color" name="text-colour" value={textColour} onChange={handleChange} />

      <Typography>Card Colour</Typography>
      <input type="color" name="card-colour" value={cardColour} onChange={handleChange} />
    </Box>
  );
};

export default ColourChoicePanel;
