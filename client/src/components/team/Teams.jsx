import React, { useEffect, useState } from "react";
import { loadingTeams, loadOneTeam } from "../../redux/features/team";
import { useDispatch, useSelector } from "react-redux";
import { Box, Container, Grid } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import { NavLink } from 'react-router-dom';
import HeaderBlack from '../header/HeaderBlack';

const useStyles = makeStyles({
  container: {
  },
  main: {
    flexGrow: 0,
    flexBasis: 33.3333,
    paddingLeft: 15,
    paddingRight: 15,
    paddingBottom: 15,
  },
  inner: {
    border: 'solid',
    padding: 20,
    "&:hover": {
      backgroundColor: "black",
      cursor: "pointer"
    }
  },
  image: {
    textAlign: "center",
    height: 180,
    width: 230
  },
  name: {
    fontSize: 20,
    color: 'red',
    textAlign: 'center'
  },
  modal: {

  }

})

const Teams = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadingTeams());
  }, [dispatch]);

  const { loadTeam } = useSelector((state) => state.team);

  const classes = useStyles()

  return (
    <>
      <HeaderBlack/>
      <Container className={classes.container}>
        <Grid container className={classes.main} spacing={5}>
          {loadTeam?.map((item) => {
            return (
              <Grid item xs={3}>
                <NavLink to={`/team/${item._id}`}>
                  <Box  variant="outlined" className={classes.inner}>
                    <Box className={classes.image}>
                      <img className={classes.image} src={item.image}/>
                    </Box>
                    <Box className={classes.name}>{item.name}</Box>
                  </Box>
                </NavLink>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </>
  );
};

export default Teams;
