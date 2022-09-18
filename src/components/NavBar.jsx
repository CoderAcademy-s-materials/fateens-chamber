import * as React from "react";
import Toolbar from "@mui/material/Toolbar";
import { Typography } from "@mui/material";
// import Link from '@mui/material/Link';
import { Link } from "react-router-dom";

function NavBar(props) {
  const { title, sections } = props;

  return (
    <React.Fragment>
      <Toolbar sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Typography
          component="h2"
          variant="h5"
          color="inherit"
          align="center"
          noWrap
          sx={{ flex: 1 }}
        >
          <Link to="/">{title}</Link>
        </Typography>
      </Toolbar>

      <Toolbar
        component="nav"
        variant="dense"
        sx={{ justifyContent: "space-between", overflowX: "auto" }}
      >
        {sections.map((section, id) => (
          <Link key={id} to={section.url}>
            {section.title}
          </Link>
        ))}
      </Toolbar>
    </React.Fragment>
  );
}

export default NavBar;
