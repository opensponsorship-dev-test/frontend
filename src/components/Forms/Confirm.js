import React from "react";
import Button from "@material-ui/core/Button";
import FormGroup from "@material-ui/core/FormGroup";
import TextField from "@material-ui/core/TextField";
import {makeStyles} from "@material-ui/core/styles";
import moment from "moment";
import {useDispatch, useSelector} from "react-redux";
import * as athleteActions from "../../store/actions/athleteActions";
const useStyles = makeStyles(theme => ({
  input: {
    margin: "5px 0",
  },
}));
const Confirm = props => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const values = JSON.stringify(props.values);
  console.log(JSON.parse(values));
  return (
    <div>
      <FormGroup className={classes.formGroup}>
        <h1>Confirm and Sumbit</h1>
        <TextField
          label="Name"
          disabled
          className={classes.input}
          defaultValue={props.values.name}
          InputProps={{
            readOnly: true,
          }}
        />
        <TextField
          label="Gender"
          disabled
          className={classes.input}
          defaultValue={props.values.gender}
          InputProps={{
            readOnly: true,
          }}
        />
        <TextField
          label="Date of birth"
          disabled
          className={classes.input}
          defaultValue={moment(props.values.dateOfBirth).format("LL")}
          InputProps={{
            readOnly: true,
          }}
        />
        <TextField
          label="About"
          className={classes.input}
          defaultValue={props.values.about}
          disabled
          InputProps={{
            readOnly: true,
          }}
        />
        <TextField
          label="Location"
          disabled
          className={classes.input}
          defaultValue={props.values.location}
          InputProps={{
            readOnly: true,
          }}
        />
        <TextField
          label="Sport"
          disabled
          className={classes.input}
          defaultValue={props.values.sport}
          InputProps={{
            readOnly: true,
          }}
        />
        <TextField
          label="Interests"
          disabled
          className={classes.input}
          defaultValue={props.values.interests}
          InputProps={{
            readOnly: true,
          }}
        />
        <TextField
          label="Image"
          disabled
          className={classes.input}
          defaultValue={props.values.image}
          InputProps={{
            readOnly: true,
          }}
        />
        <Button
          variant="contained"
          color="primary"
          onClick={async () => {
            try {
              await dispatch(athleteActions.saveAthlete(props.values));

              props.nextStep();
            } catch (err) {
              alert(err.message);
            }
          }}
          style={{marginTop: "20px"}}>
          Submit
        </Button>
        <Button variant="contained" color="primary" onClick={props.prevStep} style={{marginTop: "20px"}}>
          Back
        </Button>
      </FormGroup>
    </div>
  );
};

export default Confirm;
