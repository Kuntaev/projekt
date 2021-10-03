import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadOneTeam } from '../../redux/features/team';
import { useParams } from "react-router-dom"
import {
  Box,
  CardMedia,
  Table,
  TableBody,
  TableCell, TableContainer,
  TableHead,
  TableRow
} from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import HeaderBlack from '../header/HeaderBlack';
import Players from '../player/Players';
import { loadPlayers } from '../../redux/features/player';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
  main: {
    display: 'flex'
  },
  image: {
    width: 350,
  },
  teamName: {
    fontSize: 100,
  },
  captain: {
    color: 'green',
    marginLeft: 300,
  },
  name: {
    marginRight: 5,
    fontSize: 40,

  },
  players: {
    color: 'black',
    fontSize: 25
  },
  player: {
    fontSize: 25,
    color: 'grey'
  },
  box: {
    display: 'flex',
    marginLeft: 25,
    marginBottom: 25
  },
  boxs: {
    textAlign: 'center',
    marginLeft: 200
  }
})

const OneTeam = (props) => {

  const classes = useStyles()

  const [open, setOpen] = React.useState(false);

  const dispatch = useDispatch();


  const { id } = useParams();

  useEffect(() => {
    dispatch(loadPlayers(id));
  }, [id, dispatch]);

  const { loadOneT } = useSelector((state) => state.team);
  console.log(loadOneT)
  const { player } = useSelector((state) => state.player);


  useEffect(() => {
    dispatch(loadOneTeam(id));
  }, [id, dispatch]);

  return (
    <div>
      <HeaderBlack/>
      <Box className={classes.main}>
        <Box className={classes.boxs}>
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
        <TableContainer>
          <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
            <TableHead>
              <TableRow>
                <TableCell className={classes.player}>Имя</TableCell>
                <TableCell className={classes.player} >Фамилия</TableCell>
                <TableCell className={classes.player} align='right'>№</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {player?.map((item) => {
                return (
                  <TableRow
                    key={item.name}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell className={classes.players} component="th" scope="row">
                      {item.name}
                    </TableCell>
                    <TableCell className={classes.players} >{item.lastname}</TableCell>
                    <TableCell className={classes.players} align="right">{item.room}</TableCell>
                  </TableRow>
                )})}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
      </Box>
    </div>
  );
};

export default OneTeam;