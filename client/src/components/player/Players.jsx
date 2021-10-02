import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadPlayers } from '../../redux/features/player';
import { Box, Grid, Typography } from '@material-ui/core';
import { useParams } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Button from "@material-ui/core/Button";

const useStyles = makeStyles({
  player: {
    margin: "50px 0",
    display: 'flex',
    justifyContent: 'space-between',
    width: "400px"
  }
})

const Players = () => {

  const classes = useStyles()
  const dispatch = useDispatch();

  const { id } = useParams();

  useEffect(() => {
    dispatch(loadPlayers(id));
  }, [id, dispatch]);

  const { player } = useSelector((state) => state.player);


  return (
      <Box>
        {player?.map((item) => {
          return (
            <>
              <Box className={classes.player}>
                <Box>{item.name}</Box>
                <Box> </Box>
                <Box>{item.lastname}</Box>
                <Button  variant="contained" color="secondary">Удалить</Button>
              </Box>
            </>
            );
        })}
      </Box>
  );
};

export default Players;