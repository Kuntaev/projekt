import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  main: {
    padding: "0px 150px",
    display: "flex",
    justifyContent: "space-between",
  },
  contentOne: {
    width: "30%",
    paddingTop: 50,
  },

  addTodo: {
    display: "block",
    backgroundColor: "green",
    color: "white",
    width: "100%",
    "&:hover": {
      backgroundColor: "darkgreen",
    },
  },
  todo: {
    paddingTop: 30,
  },
  box: {
    display: "flex",
    justifyContent: "space-between",
    backgroundColor: "yellow",
  },
  boxOne: {
    display: "flex",
    justifyContent: "space-between",
  },
  maps: {
    paddingTop: 50,
  },
  signIn: {
    display: "block",
    color: "white",
    textDecoration: "none",
  },
});

export default useStyles;
