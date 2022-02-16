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
    color: "white",
    fontSize: 16,
    fontFamily: "Roboto",
    fontWeight: "bold",
    outline: "none",
  },
  personalArea: {
    color: "white",
    fontWeight: "bold",
    fontSize: "19px",
    textDecoration: "none",
  },
});

function Header() {
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
              src="https://i.postimg.cc/D0V74z05/logo.png"
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
          <NavLink to="/sign-in" style={{ color: "white", fontSize: 24 }}>
            <i className="fas fa-user" />
          </NavLink>
        )}
        {/*{token ? (*/}
        {/*  // <Link  className={classes.personalArea} id="personalArea" to="/">*/}
        {/*  //   <div  onClick={handleOutput}>Выход</div>*/}
        {/*  // </Link>*/}
        {/*) : (*/}
        {/*  ""*/}
        {/*)}*/}
          </div>
    </>
  );
}

export default Header;
