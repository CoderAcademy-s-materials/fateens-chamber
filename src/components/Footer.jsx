import React from "react";
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

function Copyright() {
    return (
        <Typography variant="body2" color={"purple"} align="center">
            {"Copyright © Fateen "}
            {new Date().getFullYear()}
        </Typography>
    )
}

const Footer = (props) => {
  return (
    <Box sx={{bgcolor: 'blanchedalmond', py:6 }}>
        <Container maxWidth="lg">
            <Typography variant="h6" align="center" gutterBottom>
                {props.title}
            </Typography>

        <Typography variant="subtitle1" align="center" color={"skyblue"}>
            {props.description}
        </Typography>
        <Copyright />
        </Container>

    </Box>
  );
};

export default Footer;
