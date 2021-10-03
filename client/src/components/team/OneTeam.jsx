import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadOneTeam } from '../../redux/features/team';
import { useParams } from "react-router-dom"
import { Box, CardMedia, Table } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import HeaderBlack from '../header/HeaderBlack';
import Players from '../player/Players';

const useStyles = makeStyles({
  main: {
    display: 'flex'
  },
  image: {
    marginTop: 10,
    marginLeft: 220,
    width: 350,
  },
  teamName: {
    fontSize: 100,
    marginLeft: 150,
    marginTop: 30
  },
  captain: {
    color: 'red',
    marginLeft: 300
  },
  name: {
    marginRight: 5,
    fontSize: 40,

  },
  players: {
    color: 'black',
    fontSize: 30
  },
  box: {
    display: 'flex'
  }

})

const OneTeam = (props) => {

  const classes = useStyles()

  const [open, setOpen] = React.useState(false);

  const dispatch = useDispatch();

  const { loadOneT } = useSelector((state) => state.team);
  console.log(loadOneT)
  const { player } = useSelector((state) => state.player);

  const { id } = useParams();

  useEffect(() => {
    dispatch(loadOneTeam(id));
  }, [id, dispatch]);

  return (
    <div>
      <HeaderBlack/>
      <Box className={classes.main}>
        <Box>
          <img className={classes.image} src={loadOneT?.image}/>
          <Typography className={classes.teamName}>
            {loadOneT?.name}
          </Typography>
        </Box>
      <Box className={classes.captain}>
        <Box className={classes.box}>
          <Typography className={classes.name}>
          CAP: {loadOneT?.captain.name}
        </Typography>


          <Typography className={classes.name}>
            {loadOneT?.captain.surname}
          </Typography>
        </Box>
        <Box className={classes.players}>
          {player.map((item) => {
            return (
                <>
                  <Typography component="div" variant="h6">{item.name}</Typography>
                  <Typography component="span" variant="h6">{item.lastname}</Typography>
                </>
            )
          })}
        </Box>
      </Box>
      </Box>
    </div>
  );
};

export default OneTeam;