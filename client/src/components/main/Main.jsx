import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Header from "../header/Header";
import classNames from "classnames";
import "./Main.css";
import image from "../../image/e7c6e2df-765f-4cd1-b17c-e7aabc8ed0cf.png";

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
  },
  btn: {
    fontSize: 25,
    padding: 15,
    marginLeft: 1000,
  },
});

function Main() {
  const classes = useStyles();

  const main = classNames(classes.main, "adaptiveMain");
  const content = classNames(classes.content, "adaptiveContent");
  const text = classNames(classes.text, "adaptiveText");

  return (
    <div className={main}>
      <Header />
      <div className={content}>
        <h4 className={text} style={{ fontSize: 30, marginBottom: 10 }}>
          В ФУТБОЛЕ НЕТ СЛОВА
        </h4>
        <h2 className={text} style={{ fontSize: 64, marginTop: 0 }}>
          НЕВОЗМОЖНО
        </h2>
      </div>
    </div>
  );
}

export default Main;
