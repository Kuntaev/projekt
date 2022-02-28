import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import classNames from "classnames";
import "./Main.css";
import image from "../../image/e7c6e2df-765f-4cd1-b17c-e7aabc8ed0cf.png";
import { useMediaQuery } from "@material-ui/core";
import { Header } from "../../components/header";

const useStyles = makeStyles({
  main: {
    backgroundSize: "cover",
    backgroundImage: `URL(${image})`,
    background: "no-repeat",
    minHeight: "100vh",
    backgroundColor: "#454d35",
  },
  content: {
    paddingLeft: 150,
    paddingRight: 150,
    marginTop: 150,
  },
  text: {
    color: "white",
    fontFamily: "Roboto",
    fontWeight: "bold",
    fontSize: 30,
    marginBottom: 10,
  },
  text2: {
    color: "white",
    fontFamily: "Roboto",
    fontWeight: "bold",
    fontSize: 64,
    marginTop: 0,
  },
  btn: {
    fontSize: 25,
    padding: 15,
    marginLeft: 1000,
  },
});

export const Main = () => {
  const classes = useStyles();

  const isActive = useMediaQuery("(max-width: 640px)");

  const main = classNames(!isActive ? classes.main : "adaptiveMain");
  const content = classNames(!isActive ? classes.content : "adaptiveContent");
  const text = classNames(!isActive ? classes.text : "adaptiveText");
  const text2 = classNames(!isActive ? classes.text2 : "adaptiveText2");

  return (
    <div className={main}>
      <Header />
      <div className={content}>
        <h4 className={text}>В ФУТБОЛЕ НЕТ СЛОВА</h4>
        <h2 className={text2}>НЕВОЗМОЖНО</h2>
      </div>
    </div>
  );
};
