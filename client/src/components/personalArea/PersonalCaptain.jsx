import React, { useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import { CardMedia }   from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch, useSelector } from 'react-redux';
import Typography from '@material-ui/core/Typography';
import { getAuthorizationCaptain } from '../../redux/features/captain';

const useStyles = makeStyles({
avatar: {
  width: "250px",
  height: "250px",
  borderRadius: "15px"
},
  img: {
  backgroundImage:  "URL(https://images.pexels.com/photos/54567/pexels-photo-54567.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=700&w=1140)",
    width: "1000px",
    height: "700px"
  }
});

const PersonalCaptain = () => {
  const classes = useStyles()
  const dispatch = useDispatch()

  const captain  = useSelector((state) => state.captain.captain)

  useEffect(() => {
    dispatch(getAuthorizationCaptain())
  }, [])
  console.log(captain)
    return (
        <Grid container spacing={4}>
       <Grid item={6}>
         <CardMedia className={classes.avatar} image="https://seeding.com.ua/wp-content/uploads/2017/04/%D0%B0%D0%B2%D0%B0%D1%82%D0%B0%D1%80%D0%BA%D0%B0-%D0%B4%D0%BB%D1%8F-%D0%BE%D1%82%D0%B7%D1%8B%D0%B2%D0%BE%D0%B2.jpg"/>
       </Grid>
          <Grid item={6}>
            <Typography gutterBottom variant="h5" component="p">
              <b>Фамилия</b>:{captain?.surname}
            </Typography>
            <Typography gutterBottom variant="h5" component="p">
              <b>Имя</b>: {captain?.name}
            </Typography>
            <Typography gutterBottom variant="h5" component="p">
              <b>Почта</b>:{captain?.mail}
            </Typography>
          </Grid>
        </Grid>
    );
};

export default PersonalCaptain;