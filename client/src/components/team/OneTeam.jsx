import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadOneTeam } from '../../redux/features/team';
import { useParams } from "react-router-dom"
import { Box, CardMedia } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  image: {
    width: 200,

  }
})

const OneTeam = (props) => {

  const classes = useStyles()

  const dispatch = useDispatch();
  const { loadOneT } = useSelector((state) => state.team);

  const { id } = useParams();

  useEffect(() => {
    dispatch(loadOneTeam(id));
  }, [id, dispatch]);

  return (
    <div>
          <Box>
            <img className={classes.image} src={loadOneT?.image}/>
          </Box>
          <Typography>
            {loadOneT?.name}
          </Typography>
    </div>
  );
};

export default OneTeam;