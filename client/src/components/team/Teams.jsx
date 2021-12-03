import React, { useEffect } from "react";
import { loadingTeams } from "../../redux/features/team";
import { useDispatch, useSelector } from "react-redux";
import {
  makeStyles,
  Box,
  TableCell,
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@material-ui/core";
import HeaderBlack from "../header/HeaderBlack";
import { NavLink } from 'react-router-dom';

const useStyles = makeStyles({
  image: {
    textAlign: "center",
    height: 40,
    width: 50,
  },
  table: {
    minWidth: 650,
  },
  heading: {
    fontWeight: "bold",
  },
  link:{
    color: 'darkred'
  }
});

const Teams = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const { loadTeam } = useSelector((state) => state.team);

  useEffect(() => {
    dispatch(loadingTeams());
  }, [dispatch]);

  return (
    <>
      <HeaderBlack />
      <Box maxHeight={580} overflow="auto" sx={{ mx: 18 }}>
        <TableContainer component={Paper}>
          <Table
            className={classes.table}
            size="small"
            aria-label="a dense table"
          >
            <TableHead>
              <TableRow>
                <TableCell className={classes.heading}>Логотип</TableCell>
                <TableCell align="right" className={classes.heading}>
                  Название
                </TableCell>
                <TableCell align="right" className={classes.heading}>
                  Капитан
                </TableCell>
                <TableCell align="right" className={classes.heading}>
                  Состав
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {loadTeam?.map((row) => (
                <TableRow key={row.name}>
                  <TableCell><img className={classes.image} src={row.image} /></TableCell>
                  <TableCell align="right">{row.name}</TableCell>
                  <TableCell align="right">{row.captain.name}</TableCell>
                  <TableCell align="right">
                <NavLink to={`/team/${row._id}`}
                 className={classes.link}>
                  <i className="fas fa-eye"></i>
                </NavLink>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </>
  );
};

export default Teams;
