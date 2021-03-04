import React from "react";
import {Paper} from "@material-ui/core";
import {ThemeProvider} from "@material-ui/core/styles";
import Header from "./Header";
import {makeStyles, createMuiTheme} from "@material-ui/core/styles";
import {cyan} from "@material-ui/core/colors";
import AthleteDisplay from "./AthleteDisplay";

let theme = createMuiTheme({
  palette: {type: "dark", primary: cyan, secondary: cyan},
});

const useStyles = makeStyles(theme => ({
  root: {
    width: "auto",

    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 400,
      marginLeft: "auto",
      marginRight: "auto",
    },
    backgroundColor: theme.palette.background.default,
    color: theme.palette.text.primary,
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
  },
}));

const Layout = props => {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <div className={classes.root}>
        <Paper className={classes.paper}>{props.children}</Paper>
      </div>
      <div className={classes.paper}>
        <AthleteDisplay />
      </div>
    </ThemeProvider>
  );
};

export default Layout;
