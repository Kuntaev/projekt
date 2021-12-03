import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    width: 345,
    marginRight: 30,
    marginTop: 15,
  },
  main: {
    flexGrow: 0,
    flexBasis: 33.3333,
    paddingLeft: 15,
    paddingRight: 15,
    paddingBottom: 15,
    marginLeft: 50,
  },
  inner: {
    textAlign: "center",
    border: "solid",
    padding: 20,
    "&:hover": {
      backgroundColor: "black",
      cursor: "pointer",
    },
  },
  image: {
    height: 180,
    width: 230,
  },
  name: {
    fontSize: 20,
    color: "red",
    textAlign: "center",
  },
  cont: {
    height: "100vh",
    backgroundSize: "cover",
    background: "fixed",
    backgroundRepeat: "no-repeat",
    backgroundImage:
      "URL(https://www.m24.ru/b/d/nBkSUhL2hFMlm8i2Lr6BosSyyJ2gp8TrlnTclb7P73OHezeOWXiSxTZt4slI-BHBsdWR_G-JLsV0=UOJ9qPQfj6-RO_mxeQnIHg.jpg)",
  },
  createTeam: {
    marginTop: 30,
    marginLeft: 76,
  },
  btn1: {
    height: 320,
    display: "flex",
    flexWrap: "wrap",
  },
  btn: {
    display: "flex",
  },
  box: {
    height: 200,
    width: 500,
  },
  btnClose: {
    marginLeft: 50,
    marginTop: 30,
  },
  teamBox: {
    width: 330,
    height: 230,
    textAlign: "left",
    backgroundImage:
      "url(https://www.m24.ru/b/d/nBkSUhL2hFMlm8i2Lr6BosSyyJ2gp8TrlnTclb7P73OHezeOWXiSxTZt4slI-BHBsdWR_G-JLsV0=UOJ9qPQfj6-RO_mxeQnIHg.jpg)",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    borderRadius: 20,
    marginLeft: 250,
    marginBottom: 40,
  },
  text: {
    marginTop: 20,
    marginLeft: 40,
  },
  link: {
    color: "black",
    textDecoration: "none",
  },
  logo: {
    width: 170,
    margin: 0,
    paddingLeft: "25%",
  },
});

export default useStyles;
