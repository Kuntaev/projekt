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
  useMediaQuery,
} from "@material-ui/core";
import { NavLink } from "react-router-dom";
import classNames from "classnames";
import "./Teams.css";
import { HeaderBlack } from "../../components/header-black";

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
  link: {
    color: "darkred",
  },
  main: {
    maxHeight: 580,
    overflow: "auto",
    margin: "0px 150px",
  },
});

export const Teams = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const { loadTeam } = useSelector((state) => state.team);

  const isActive = useMediaQuery("(max-width: 640px)");

  const image = classNames(!isActive ? classes.image : "teams-image");
  const main = classNames(!isActive ? classes.main : "teams-main");
  const table = classNames(!isActive ? classes.table : "teams-table");
  const heading = classNames(!isActive ? classes.heading : "teams-heading");
  const link = classNames(!isActive ? classes.link : "teams-link");

  useEffect(() => {
    dispatch(loadingTeams());
  }, [dispatch]);

  return (
    <>
      <HeaderBlack />
      <Box className={main} overflow="auto">
        <TableContainer component={Paper}>
          <Table className={table} size="small" aria-label="a dense table">
            <TableHead>
              <TableRow>
                <TableCell>
                  <p className={heading}>Логотип</p>
                </TableCell>
                <TableCell align="right">
                  <p className={heading}>Название</p>
                </TableCell>
                <TableCell align="right" className={heading}>
                  <p className={heading}>Капитан</p>
                </TableCell>
                <TableCell align="right" className={heading}>
                  <p className={heading}>Состав</p>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {loadTeam?.map((row) => (
                <TableRow key={row.name}>
                  <TableCell>
                    <img className={image} src={row.image} />
                  </TableCell>
                  <TableCell align="right">
                    <p className={heading}>{row.name}</p>
                  </TableCell>
                  <TableCell align="right">
                    <p className={heading}>{row.captain.name}</p>
                  </TableCell>
                  <TableCell align="right">
                    <NavLink to={`/team/${row._id}`} className={link}>
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
