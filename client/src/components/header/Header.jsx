import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { NavLink, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { outputCaptain } from "../../redux/features/captain";
import "./Header.css";
import { useMediaQuery } from "@material-ui/core";
import classNames from "classnames";

const useStyles = makeStyles({
  main: {
    padding: "15px 150px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  content: {
    display: "flex",
    alignItems: "center",
    width: 740,
    justifyContent: "space-between",
  },
  logo: {
    width: 80,
  },
  navBar: {
    textDecoration: "none",
    color: "white",
    fontSize: 16,
    fontFamily: "Roboto",
    fontWeight: "bold",
    outline: "none",
  },
  personalArea: {
    color: "white",
    fontFamily: "Roboto",
    fontWeight: "bold",
    fontSize: 16,
    textDecoration: "none",
  },
});

export const Header = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const isActive = useMediaQuery("(max-width: 640px)");

  const main = classNames(!isActive ? classes.main : "headerMain");
  const content = classNames(!isActive ? classes.content : "headerContent");
  const navBar = classNames(!isActive ? classes.navBar : "headerNavBar");
  const logo = classNames(!isActive ? classes.logo : "headerLogo");
  const personalArea = classNames(
    !isActive ? classes.personalArea : "headerPersonalArea"
  );

  const token = useSelector((state) => state.captain.token);

  const handleOutput = () => {
    dispatch(outputCaptain());
  };
  return (
    <>
      <div className={main}>
        <div className={content}>
          <NavLink to="/" className={navBar}>
            <img
              src="https://i.postimg.cc/D0V74z05/logo.png"
              className={logo}
              alt=""
            />
          </NavLink>
          <NavLink to="/" className={navBar}>
            Главная
          </NavLink>
          <NavLink to="/team" className={navBar}>
            Команды
          </NavLink>
          <NavLink to="/my-teams" className={navBar}>
            Мои команды
          </NavLink>
          <NavLink to="/play" className={navBar}>
            Все матчи
          </NavLink>
        </div>

        {token ? (
          <NavLink className={personalArea} to="/personal/captain">
            Личный кабинет
          </NavLink>
        ) : (
          <NavLink to="/sign-in" style={{ color: "white", fontSize: 24 }}>
            <i className="fas fa-user" />
          </NavLink>
        )}
        {/*{token ? (*/}
        {/*  // <Link  className={classes.edit-profile} id="edit-profile" to="/">*/}
        {/*  //   <div  onClick={handleOutput}>Выход</div>*/}
        {/*  // </Link>*/}
        {/*) : (*/}
        {/*  ""*/}
        {/*)}*/}
      </div>
    </>
  );
};
