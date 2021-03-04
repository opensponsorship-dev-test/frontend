import {Grid} from "@material-ui/core";
import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import * as athleteActions from "../store/actions/athleteActions";
import moment from "moment";
const AthleteDisplay = () => {
  const athleteState = useSelector(state => state.athlete);
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      await dispatch(athleteActions.getAthletes());
    })();
  }, [dispatch]);

  if (athleteState.loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <Grid>
      <Grid item xs={12}>
        {athleteState.loading ? (
          <h1>Loading...</h1>
        ) : (
          athleteState.athletes.map(athlete => (
            <>
              <div
                key={athlete._id}
                style={{
                  backgroundColor: "lightGray",
                  padding: "10px",
                  marginTop: "25px",
                  outline: ".5px solid black",
                }}>
                <img src={athlete.image} alt="<Athlete Image>" height={100} width={75} />
                <p>Name: {athlete.name}</p>
                <p>Date of birth: {moment(athlete.dateOfBirth).format("LL")}</p>
                <p>Gender: {athlete.gender}</p>
                <p>Sports: {athlete.sports}</p>
                <p>About: {athlete.about}</p>
                <p>Interests: {athlete.interests}</p>
                <p>Location: {athlete.location}</p>
              </div>
            </>
          ))
        )}
      </Grid>
    </Grid>
  );
};

export default AthleteDisplay;
