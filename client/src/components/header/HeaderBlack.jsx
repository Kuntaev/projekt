import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { NavLink, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { outputCaptain } from "../../redux/features/captain";
import "./Header.css";

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
    fontSize: "19px",
    textDecoration: "none",
  },
});

function HeaderBlack() {
  const classes = useStyles();
  const dispatch = useDispatch();

  const token = useSelector((state) => state.captain.token);

  const handleOutput = () => {
    dispatch(outputCaptain());
  };
  return (
    <>
      <div className={classes.main} id="main">
        <div className={classes.content} id="content">
          <NavLink to="/" className={classes.navBar}>
            <img
              src="https://i.postimg.cc/pVFgPJv5/fdfdf.png"
              className={classes.logo}
              id="logo"
              alt=""
            />
          </NavLink>
          <NavLink to="/" className={classes.navBar} id="navbar">
            Главная
          </NavLink>
          <NavLink to="/team" className={classes.navBar} id="navbar">
            Команды
          </NavLink>
          <NavLink to="/my-teams" className={classes.navBar} id="navbar">
            Мои команды
          </NavLink>
          <NavLink to="/play" className={classes.navBar} id="navbar">
            Все матчи
          </NavLink>
        </div>

        {token ? (
          <NavLink
            variant="body2"
            className={classes.personalArea}
            to="/personal/captain"
            id="personalArea"
          >
            Личный кабинет
          </NavLink>
        ) : (
          <NavLink
            to="/sign-in"
            style={{ color: "black", fontSize: 24 }}
            id="personalArea"
          >
            <i className="fas fa-user" />
          </NavLink>
        )}
      </div>
    </>
  );
}

export default HeaderBlack;
