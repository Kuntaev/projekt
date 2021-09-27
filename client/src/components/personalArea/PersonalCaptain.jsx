import React, { useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import { CardMedia }   from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch, useSelector } from 'react-redux';
import Typography from '@material-ui/core/Typography';
import { deleteAccount, getAuthorizationCaptain } from '../../redux/features/captain';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles({
avatar: {
  marginLeft: "250px",
  width: "300px",
  height: "350px",
  borderRadius: "15px"
},
  img: {
    backgroundImage: "URL(https://images.pexels.com/photos/54567/pexels-photo-54567.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=700&w=1140)",
    width: "1000px",
    height: "690px"
  },
  area: {
    alignItems: "center",
    textAlign: "center"
  },
  data: {
  color: "white"
  },
  delete: {
  fontSize: "18px",
  marginTop: "10px",
    color: "white"
  },
  dataRemove: {
   color: "white",
   marginTop: "30px"
  },
  text: {
    color: "white",

  }
});

const PersonalCaptain = () => {
  const classes = useStyles()
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getAuthorizationCaptain())
  }, [])

  const captain  = useSelector((state) => state.captain.captain)
  console.log(typeof captain)
  const  history = useHistory()


  const handleDelete = () => {
    dispatch(deleteAccount());
    history.push('/')
  };
    return (
      <Container className={classes.img}>
        {captain.map((captain)=> {
          return (
            <Grid className={classes.area} container spacing={5}>
            <Grid item={6}>
              <Typography className={classes.text} variant="h5" component="span">
                <b>Аватарка</b>
              </Typography>
              <CardMedia className={classes.avatar} image={captain.avatar}/>
            </Grid>
            <Grid item={6}>
              <Typography   className={classes.data} gutterBottom variant="h5" component="p">
                <b>Фамилия</b>:{captain?.surname}
              </Typography>
              <Typography  className={classes.data} gutterBottom variant="h5" component="p">
                <b>Имя</b>: {captain?.name}
              </Typography>
              <Typography  className={classes.data} gutterBottom variant="h5" component="p">
                <b>Почта</b>:{captain?.mail}
              </Typography>
              <Typography  className={classes.dataRemove} gutterBottom variant="h5" component="p">
                <Typography component="p" variant="h5"><b>Удалить аккаунт</b></Typography>
                <Button onClick={handleDelete} variant="contained" color="secondary" size="large" className={classes.delete}>
                  Удалить
                </Button>
              </Typography>

            </Grid>
          </Grid>
          )
        })}

      </Container>

    );
};

export default PersonalCaptain