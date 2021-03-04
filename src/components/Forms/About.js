import React from "react";
import {Formik, Field, Form} from "formik";
import * as Yup from "yup";
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

const About = props => {
  const classes = useStyles();
  return (
    <div>
      <FormGroup className={classes.formGroup}>
        <h1>About</h1>
        <TextField
          id="location"
          label="Location"
          name="location"
          defaultValue={props.values.location}
          onChange={props.handleFieldChange("location")}
          className={classes.input}
        />
        <TextField
          id="team"
          label="Team"
          name="team"
          helperText="e.g. New York Islanders"
          defaultValue={props.values.team}
          onChange={props.handleFieldChange("team")}
        />
        <TextField
          id="about"
          label="About"
          defaultValue={props.values.about}
          multiline
          helperText="Write a few sentences about yourself"
          onChange={props.handleFieldChange("about")}
        />
        <TextField
          id="interests"
          label="Interests"
          multiline
          helperText="Write a few sentences about your interests"
          defaultValue={props.values.interests}
          onChange={props.handleFieldChange("interests")}
        />
        <TextField
          id="image"
          label="Image"
          helperText="Paste the link of your photo"
          defaultValue={props.values.image}
          onChange={props.handleFieldChange("image")}
        />
        <Button variant="contained" color="primary" onClick={props.nextStep} style={{marginTop: "20px"}}>
          Next
        </Button>
        <Button variant="contained" color="primary" onClick={props.prevStep} style={{marginTop: "20px"}}>
          Back
        </Button>
      </FormGroup>
    </div>
  );
};

export default About;
