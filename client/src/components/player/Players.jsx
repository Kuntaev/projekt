import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadPlayers, playerDelete } from "../../redux/features/player";
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  useMediaQuery,
} from "@material-ui/core";
import { useParams } from "react-router-dom";
import useStyles from "../my-team/StyleMyTeam";
import Button from "@material-ui/core/Button";
import classNames from "classnames";

export const Players = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const { id } = useParams();

  useEffect(() => {
    dispatch(loadPlayers(id));
  }, [id, dispatch]);

  const { player } = useSelector((state) => state.player);

  const isActive = useMediaQuery("(max-width: 640px)");

  const playersBlock = classNames(
    !isActive ? classes.playersBlock : "players-block"
  );

  const handleDeletePlayer = (id) => {
    dispatch(playerDelete(id));
  };
  return (
    <Box className={playersBlock} overflow="auto">
      <TableContainer>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell>Имя</TableCell>
              <TableCell>Фамилия</TableCell>
              <TableCell align="right">Номер</TableCell>
              <TableCell align="right"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {player?.map((item) => {
              return (
                <TableRow
                  key={item.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {item.name}
                  </TableCell>
                  <TableCell>{item.lastname}</TableCell>
                  <TableCell align="right">{item.room}</TableCell>
                  <TableCell>
                    <Button
                      onClick={() => handleDeletePlayer(item?._id)}
                      variant="contained"
                      color="secondary"
                      size="small"
                    >
                      Удалить
                    </Button>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};
