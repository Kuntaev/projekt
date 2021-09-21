import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

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
        <a href="/" className={classes.navBar}>
      <img src="https://i.postimg.cc/D0V74z05/logo.png" className={classes.logo}/>
        </a>
      <a href="/" className={classes.navBar}>Главная</a>
      <a href="/" className={classes.navBar}>Команды</a>
      <a href="/" className={classes.navBar}>Моя команда</a>
      <a href="/" className={classes.navBar}>Назначить игру</a>
      </div>
      <a href='/' style={{color:'white', fontSize: 24}}>
        <i className="fas fa-user" style={{color:'white', fontSize: 24}}></i>
      </a>
    </div>
  );
}

export default Header;