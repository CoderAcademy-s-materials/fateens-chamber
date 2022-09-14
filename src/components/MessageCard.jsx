import React from "react";
import { Box, Typography, Card } from "@mui/material";


const MessageCard = (props) => {
    const { name, message, email, textColour, cardColour } = props //so we no need to write like props.name, props.message ....
  return (
    <Box>
      <Card 
      style={{ backgroundColor: cardColour }}
      sx={{maxWidth: 400, height:150, wordWrap:"break-word" }}>
        <Typography color={textColour} >
            Hi, Fateen,
            <br></br><br></br>
            {message}
            <br></br><br></br>
            From: {name} ({email})
        </Typography>
      </Card>
    </Box>
  );
};

export default MessageCard;
