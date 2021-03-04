import React, {Component} from "react";

import BasicInfo from "./BasicInfo";
import About from "./About";
import Confirm from "./Confirm";
import Success from "../Success";
import moment from "moment";

export class Form extends Component {
  state = {
    step: 1,
    name: "",
    sport: "",
    gender: "",
    dateOfBirth: moment(),
    location: "",
    team: "",
    about: "",
    interests: "",
    image: "",
  };

  componentWillMount() {
    this.setState({
      step: 1,
      name: "",
      sport: "",
      gender: "",
      dateOfBirth: moment(),
      location: "",
      team: "",
      about: "",
      interests: "",
      image: "",
    });
  }
  resetStep = () => {
    this.setState({step: 1});
    this.setState({
      step: 1,
      name: "",
      sport: "",
      gender: "",
      dateOfBirth: moment(),
      location: "",
      team: "",
      about: "",
      interests: "",
      image: "",
    });
  };

  nextStep = () => {
    const {step} = this.state;
    this.setState({step: step + 1});
  };

  prevStep = () => {
    const {step} = this.state;
    this.setState({step: step - 1});
  };

  handleFieldChange = input => e => {
    //Check if field is a date
    if (e._d) {
      this.setState({["dateOfBirth"]: e._d});
    } else {
      this.setState({[input]: e.target.value});
    }
  };

  render() {
    const {step} = this.state;
    const {name, sport, gender, dateOfBirth, location, team, about, interests, image} = this.state;
    const values = {name, sport, gender, dateOfBirth, location, team, about, interests, image};

    switch (step) {
      case 1:
        return (
          <BasicInfo nextStep={this.nextStep} handleFieldChange={this.handleFieldChange} values={values} />
        );

      case 2:
        return (
          <About
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleFieldChange={this.handleFieldChange}
            values={values}
          />
        );

      case 3:
        return <Confirm prevStep={this.prevStep} nextStep={this.nextStep} values={values} />;

      case 4:
        return <Success values={values} resetStep={this.resetStep} />;

      default:
        break;
    }
  }
}

export default Form;
