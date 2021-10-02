import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadPlayers } from '../../redux/features/player';
import { Box, Grid, Typography } from '@material-ui/core';
import { useParams } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  player: {
    display: 'flex',
    justifyContent: 'space-between',
    width: 300
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
  console.log(player)

  return (
      <Box>
        {player?.map((item) => {
          return (
            <>
              <Box className={classes.player}>
                <Box>{item.name}</Box>
                <Box>{item.lastname}</Box>
                <Box>{item.room}</Box>
              </Box>
            </>
            );
        })}
      </Box>
  );
};

export default Players;