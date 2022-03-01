import { makeStyles } from "@material-ui/core/styles";
import image from "../../image/myTeams.jpeg";

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
    marginLeft: "155%",
    width: "110%",
    borderColor: "white",
    textDecoration: "none",
    outline: "none",
    display: "inline-block",
    padding: "20px 30px",
    margin: "10px 20px",
    position: "relative",
    color: "white",
    border: " 1px solid rgba(255, 255, 255, 0.4)",
    background: "none",
    fontWeight: 300,
    fontFamily: "'Montserrat', sans-serif",
    textTransform: "uppercase",
    letterSpacing: "2px",
    "&:hover": {
      backgroundColor: "rgba(255, 255, 255, .2)",
    },
    "&:active": {
      backgroundColor: "rgba(33 32 32 / 42%)",
    },
  },
  auth: {
    width: "110%",
    borderColor: "white",
    textDecoration: "none",
    outline: "none",
    display: "inline-block",
    padding: "20px 30px",
    margin: "auto",
    position: "relative",
    color: "white",
    border: " 1px solid rgba(255, 255, 255, 0.4)",
    background: "none",
    fontWeight: 300,
    fontFamily: "'Montserrat', sans-serif",
    textTransform: "uppercase",
    letterSpacing: "2px",
    "&:hover": {
      backgroundColor: "rgba(255, 255, 255, .2)",
    },
    "&:active": {
      backgroundColor: "rgba(33 32 32 / 42%)",
    },
  },
  btn1: {
    height: 330,
    display: "flex",
    flexWrap: "wrap",
  },
  btn: {
    display: "block",
    padding: "0 150px",
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
    width: "100%",
    height: "40%",
    textAlign: "left",
    backgroundImage: `URL(${image})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    borderRadius: 20,
    marginBottom: 40,
  },
  text: {
    color: "white",
    fontSize: 16,
    lineHeight: "2em",
    width: 600,
    padding: "30px 50px",
  },
  link: {
    color: "white",
    textDecoration: "none",
  },
  logo: {
    width: 170,
    margin: 0,
    marginTop: 10,
    paddingLeft: "25%",
  },
  content: {
    display: "flex",
    alignItems: "center",
  },

  cardContent: {
    margin: "0px 150px",
  },

  nameTeam: {
    padding: 16,
  },
  deleted: {
    padding: 8,
  },
  playersBlock: {
    height: 600,
  },
});

export default useStyles;
