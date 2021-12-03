import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadOneTeam } from '../../redux/features/team';
import { useParams } from "react-router-dom"
import {
  Box,
  Table,
  TableBody,
  TableCell, TableContainer,
  TableHead,
  TableRow
} from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import HeaderBlack from '../header/HeaderBlack';
import { loadPlayers } from '../../redux/features/player';

const useStyles = makeStyles({
  main: {
    display: 'flex',
    justifyContent:'space-between'
  },
  image: {
    width: 200,
  },
  teamName: {
    fontSize: 40,
  },
  captain: {
    color: 'green',
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
  const { player } = useSelector((state) => state.player);


  useEffect(() => {
    dispatch(loadOneTeam(id));
  }, [id, dispatch]);

  return (
    <div>
      <HeaderBlack/>
      <Box sx={{ mx: 18 }} className={classes.main}>
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
          <Table size="small" aria-label="a dense table">
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