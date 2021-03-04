import axios from "axios";
import moment from "moment";

export const FETCH_ATHLETES = "FETCH_ATHLETES";
export const SAVE_ATHLETE = "SAVE_ATHLETE";
export const ATHELTE_LOADING = "ATHELTE_LOADING";

export const getAthletes = () => {
  return async dispatch => {
    dispatch({type: "ATHELTE_LOADING", payload: true});
    try {
      const res = await axios.get(`https://os-dev-test.herokuapp.com/api/athletes`);

      let {data, success} = res.data;

      if (success) {
        dispatch({type: "FETCH_ATHLETES", payload: data});
        dispatch({type: "ATHELTE_LOADING", payload: false});
      }
    } catch (err) {
      dispatch({type: "ATHELTE_LOADING", payload: false});
      throw new Error(`Error (${err.response.data.error})`);
    }
  };
};

export const saveAthlete = athleteData => {
  return async dispatch => {
    dispatch({type: "ATHELTE_LOADING", payload: true});

    try {
      let {about, dateOfBirth, gender, image, interests, location, sport, name, team} = athleteData;
      console.log(sport.split(","));
      const res = await axios.post(`https://os-dev-test.herokuapp.com/api/athletes`, {
        about,
        dateOfBirth,
        gender: gender.toLowerCase(),
        image,
        interests,
        location,
        sports: sport.split(","),
        name,
        team,
      });

      let {athlete, success} = res.data;
      console.log(res.data);
      if (success) {
        console.log(athlete);
        dispatch({type: "SAVE_ATHLETE", payload: athlete});
        dispatch({type: "ATHELTE_LOADING", payload: false});
      }
    } catch (err) {
      dispatch({type: "ATHELTE_LOADING", payload: false});
      throw new Error(`Error (${err.response.data.error})`);
    }
  };
};
