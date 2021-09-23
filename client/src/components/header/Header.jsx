import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { NavLink } from 'react-router-dom';

const useStyles = makeStyles({
  main:{
    display:'flex',
    alignItems: 'center',
    justifyContent:'space-between'
  },
  content:{
    display:'flex',
    alignItems: 'center',
    width:740,
    justifyContent:'space-between'
  },
  logo:{
    width:80
  },
  navBar:{
    textDecoration:'none',
    color: 'white',
    fontSize:16,
    fontFamily:"Roboto",
    fontWeight:"bold",
    outline:'none'
  }
})

function Header() {
  const classes = useStyles()
  return (
    <div className={classes.main}>
      <div className={classes.content}>
        <NavLink to="/" className={classes.navBar}>
      <img src="https://i.postimg.cc/D0V74z05/logo.png" className={classes.logo}/>
        </NavLink>
      <NavLink to="/" className={classes.navBar}>Главная</NavLink>
      <NavLink to="/teams" className={classes.navBar}>Команды</NavLink>
      <NavLink to="/team" className={classes.navBar}>Моя команда</NavLink>
      <NavLink to="/play" className={classes.navBar}>Назначить игру</NavLink>
      </div>
      <NavLink to='/authorization' style={{color:'white', fontSize: 24}}>
        <i className="fas fa-user"></i>
      </NavLink>
    </div>
  );
}

export default Header;