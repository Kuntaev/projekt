import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { NavLink, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { outputCaptain } from '../../redux/features/captain';

const useStyles = makeStyles({
  main: {
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
});

function Header() {
  const classes = useStyles();
  const dispatch = useDispatch()

  const token = useSelector((state) => state.captain.token);


  const handleOutput = () => {
    dispatch(outputCaptain())
  }
  return (
    <div className={classes.main}>
      <div className={classes.content}>
        <NavLink to="/" className={classes.navBar}>
          <img
            src="https://i.postimg.cc/D0V74z05/logo.png"
            className={classes.logo}
            alt=""
          />
        </NavLink>
        <NavLink to="/" className={classes.navBar}>
          Главная
        </NavLink>
        <NavLink to="/teams" className={classes.navBar}>
          Команды
        </NavLink>
        <NavLink to="/my-teams" className={classes.navBar}>
          Мои команды
        </NavLink>
        <NavLink to="/play" className={classes.navBar}>
          Назначить игру
        </NavLink>
      </div>

      {token ? (
        <Link variant="body2" color="secondary" to="/personal/captain">
         Личный кабинет
        </Link>
      ) : (
        <NavLink to="/sign-in" style={{ color: "white", fontSize: 24 }}>
          <i className="fas fa-user"></i>
        </NavLink>
      )}
      {token ? (<Link to="/">
         <div onClick={handleOutput}>Выход</div>
          </Link>) : ("")}
    </div>
  );
}

export default Header;
