import Layout from "./components/Layout";

import Form from "./components/Forms/Form";
import {MuiPickersUtilsProvider} from "@material-ui/pickers";
import MomentUtils from "@date-io/moment";
import {applyMiddleware, combineReducers, createStore, compose} from "redux";
import ReduxThunk from "redux-thunk";
import {Provider} from "react-redux";
import athleteReducer from "./store/reducers/athleteReducer";

const rootReducer = combineReducers({
  athlete: athleteReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(ReduxThunk)));
function App() {
  return (
    <Provider store={store}>
      <MuiPickersUtilsProvider utils={MomentUtils}>
        <div>
          <Layout>
            <Form />
          </Layout>
        </div>
      </MuiPickersUtilsProvider>
    </Provider>
  );
}

export default App;
