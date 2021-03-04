import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import FormGroup from "@material-ui/core/FormGroup";
import {makeStyles} from "@material-ui/core/styles";
import {KeyboardDatePicker} from "@material-ui/pickers";
import moment from "moment";

const useStyles = makeStyles(theme => ({
  input: {
    margin: "5px 0",
  },
}));

const BasicInfo = props => {
  const continueStep = e => {
    e.preventDefault();
    props.nextStep();
  };

  const classes = useStyles();
  return (
    <div>
      <FormGroup className={classes.formGroup}>
        <h1>Basic Info</h1>
        <TextField
          id="name"
          label="Name"
          name="name"
          className={classes.input}
          defaultValue={props.values.name}
          onChange={props.handleFieldChange("name")}
        />
        <TextField
          id="sport"
          label="Sports"
          name="sport"
          className={classes.input}
          helperText="e.g. Hockey, Football, Baseball"
          defaultValue={props.values.sport}
          onChange={props.handleFieldChange("sport")}
        />
        <TextField
          id="gender"
          label="Gender"
          helperText="Male, Female, Other or leave it blank"
          className={classes.input}
          defaultValue={props.values.gender.toLowerCase()}
          onChange={props.handleFieldChange("gender")}
        />
        <KeyboardDatePicker
          disableFuture
          variant="inline"
          format="MM/DD/yyyy"
          margin="normal"
          id="date-picker-inline"
          label="Date picker inline"
          value={props.values.dateOfBirth}
          onChange={props.handleFieldChange("dateOfBirth")}
          KeyboardButtonProps={{
            "aria-label": "change date",
          }}
        />
        <Button variant="contained" color="primary" onClick={continueStep} style={{marginTop: "20px"}}>
          Next
        </Button>
      </FormGroup>
    </div>
  );
};

export default BasicInfo;
