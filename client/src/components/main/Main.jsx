import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Header from '../header/Header';

const useStyles = makeStyles({
  main: {
    backgroundSize:'cover',
    backgroundImage: `url("https://i.postimg.cc/Y2grKQDP/xxx.jpg")`,
    background: 'no-repeat',
    minHeight:'100vh'
  },
  content:{
    paddingLeft:150,
    paddingRight:150,
    marginTop:150
  },
  text:{
    color:'white',
    fontFamily:'Roboto',
    fontWeight: 'bold'
  }

})

function Main() {
  const classes = useStyles()
  return (
    <div className={classes.main}>
      <Header />
      <div className={classes.content}>
        <h4 className={classes.text} style={{fontSize:30, marginBottom:10}}>В ФУТБОЛЕ НЕТ СЛОВА</h4>
        <h2 className={classes.text} style={{fontSize:64, marginTop:0}}>НЕВОЗМОЖНО</h2>
      </div>
    </div>
  );
}

export default Main;