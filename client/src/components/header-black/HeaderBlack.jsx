import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { NavLink, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { outputCaptain } from "../../redux/features/captain";
import "./HeaderBlack.css";
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
    color: "black",
    fontSize: 16,
    fontFamily: "Roboto",
    fontWeight: "bold",
    outline: "none",
  },
  personalArea: {
    color: "black",
    fontWeight: "bold",
    fontFamily: "Roboto",
    fontSize: "16px",
    textDecoration: "none",
  },
});

export const HeaderBlack = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const token = useSelector((state) => state.captain.token);

  const isActive = useMediaQuery("(max-width: 640px)");

  const main = classNames(!isActive ? classes.main : "headerBlackMain");
  const content = classNames(
    !isActive ? classes.content : "headerBlackContent"
  );
  const navBar = classNames(!isActive ? classes.navBar : "headerBlackNavBar");
  const logo = classNames(!isActive ? classes.logo : "headerBlackLogo");
  const personalArea = classNames(
    !isActive ? classes.personalArea : "headerBlackPersonalArea"
  );

  const handleOutput = () => {
    dispatch(outputCaptain());
  };
  return (
    <>
      <div className={main}>
        <div className={content}>
          <NavLink to="/" className={classes.navBar}>
            <img
              src="https://i.postimg.cc/pVFgPJv5/fdfdf.png"
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
          <NavLink to="/sign-in" style={{ color: "black", fontSize: 24 }}>
            <i className="fas fa-user" />
          </NavLink>
        )}
      </div>
    </>
  );
};
