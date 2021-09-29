import React, { useEffect } from 'react';
import { Box, Button } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { loadOneMyTeam } from '../../redux/features/team';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  image: {
    width: 200,
  }
})

const MyTeamOne = () => {

  const classes = useStyles()

  const dispatch = useDispatch()
  const { loadOneMyT } = useSelector((state) => state.team )
  const {id} = useParams()

  useEffect(() => {
    dispatch(loadOneMyTeam(id));
  }, [id, dispatch]);

  return (
    <div>
      <Box>
        <img className={classes.image} src={loadOneMyT?.image}/>
      </Box>
      <Typography>
        {loadOneMyT?.name}
      </Typography>
      <Button>
        Добавить игрока
      </Button>
    </div>
  );
};

export default MyTeamOne;