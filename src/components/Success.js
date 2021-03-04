import React from "react";
import Button from "@material-ui/core/Button";

const Success = props => {
  return (
    <div>
      <h1>Thank you for registering, {props.values.name}</h1>
      <Button variant="contained" color="primary" onClick={props.resetStep} style={{marginTop: "20px"}}>
        Start again
      </Button>
    </div>
  );
};

export default Success;
