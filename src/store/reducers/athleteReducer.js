import {ATHELTE_LOADING, FETCH_ATHLETES, SAVE_ATHLETE} from "../actions/athleteActions";

const initialState = {
  athletes: [],
  loading: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ATHLETES:
      return {
        ...state,
        athletes: action.payload,
      };
    case SAVE_ATHLETE:
      return {
        ...state,
        athletes: [action.payload, ...state.athletes],
      };
    case ATHELTE_LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    default:
      return {...state};
  }
};
