import React, { useEffect, useState } from "react";
import { addTeam, loadingTeams } from "../../redux/features/Team";
import { useDispatch, useSelector } from "react-redux";
import { Box, Container, Grid } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';

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

  },
  name: {
    fontSize: 20,
    color: 'red',
    textAlign: 'center'
  }

})

const MyTeam = () => {
  const [text, setText] = useState("");
  const { loadTeam } = useSelector((state) => state.team);
  const dispatch = useDispatch();

  const classes = useStyles()

  useEffect(() => {
    dispatch(loadingTeams());
  }, []);
  return (
    <>
      <Container className={classes.container}>
        <Grid container className={classes.main} spacing={5}>
      {loadTeam?.map((item) => {
        return (
              <Grid item xs={3} >
                <a href="https://www.fcbarcelona.com/en/">
                <Box className={classes.inner}>
                  <Box className={classes.image}>
                    <img className={classes.image} src={item.image}/>
                  </Box>
                  <Box className={classes.name}>{item.name}</Box>
                </Box>
                </a>
              </Grid>
        );
      })}
        </Grid>
      </Container>
    </>
  );
};

export default MyTeam;
