import { Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Copyright = () => {
  return (
  <>
  <center>
  <Typography variant="subtitle" color="text.primary">
    <i>"Goodbyes hurt the most when people leave <br />
    without saying them."</i>
  </Typography>
  <br></br>
  <br></br>
  <Typography variant="subtitle" color="text.primary">
    <Link to="/" color="inherit">
      <b>Words will help</b>
    </Link>
  </Typography>
  </center>
  </>
  );
};

export default Copyright;
