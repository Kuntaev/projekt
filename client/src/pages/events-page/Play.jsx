import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loadEvents } from "../../redux/features/event";
import { Box, Button, Typography, useMediaQuery } from "@material-ui/core";
import { HeaderBlack } from "../../components/header-black";
import AddPlay from "./AddPlay";
import Maps from "../../components/map/Maps";
import useStyles from "./Style";
import "./Play.css";
import classNames from "classnames";

export const Play = () => {
  const dispatch = useDispatch();
  const classes = useStyles();

  const [open, setOpen] = useState(false);
  const [current, setCurrent] = useState(null);
  const [zoom, setZoom] = useState(10);
  const [coordinate, setCoordinate] = useState([
    45.694020705321996, 43.31769325294912,
  ]);

  const eventes = useSelector((state) => state.event.events);
  const token = useSelector((state) => state.captain.token);

  const isActive = useMediaQuery("(max-width: 640px)");

  const main = classNames(!isActive ? classes.main : "event-play-main");
  const contentOne = classNames(
    !isActive ? classes.contentOne : "event-play-contentOne"
  );
  const addTodo = classNames(
    !isActive ? classes.addTodo : "event-play-addTodo"
  );
  const signIn = classNames(!isActive ? classes.signIn : "event-play-signIn");
  const todo = classNames(!isActive ? classes.todo : "event-play-todo");
  const box = classNames(!isActive ? classes.box : "event-play-box");
  const boxOne = classNames(!isActive ? classes.boxOne : "event-play-boxOne");
  const maps = classNames(!isActive ? classes.maps : "event-play-maps");
  const mainText = classNames(isActive && "event-play-mainText");
  const miniText = classNames(isActive && "event-play-miniText");

  useEffect(() => dispatch(loadEvents()), []);

  const handleClickOpen = () => setOpen(!open);
  const handleSelectEvent = (event) => {
    setCurrent(event._id);
    setZoom(15);
    setCoordinate([event.width, event.longs]);
  };
  return (
    <>
      <HeaderBlack />
      <Box className={main}>
        <Box className={contentOne} overflow="auto">
          {token ? (
            <Button
              onClick={handleClickOpen}
              variant="contained"
              className={addTodo}
              fullWidth
            >
              Назначить игру
            </Button>
          ) : (
            <Button variant="contained" className={addTodo} fullWidth>
              <NavLink to="/sign-in" className={signIn}>
                Авторизоваться
              </NavLink>
            </Button>
          )}

          <Box overflow="auto" maxHeight={300} className={todo}>
            {eventes?.map((event) => {
              return (
                <Box
                  key={event.id}
                  onClick={() => handleSelectEvent(event)}
                  className={event._id === current ? box : boxOne}
                >
                  <Typography variant="h5" className={mainText}>
                    {event.name}
                  </Typography>
                  <Typography variant="body1" className={mainText}>
                    {event.teamId}
                  </Typography>
                  <Box>
                    <Typography className={miniText}>{event.date}</Typography>
                    <Typography className={miniText}>{event.time}</Typography>
                  </Box>
                </Box>
              );
            })}
          </Box>
        </Box>
        <Box className={maps}>
          <Maps
            handleSelectEvent={handleSelectEvent}
            zoom={zoom}
            coordinate={coordinate}
          />
        </Box>
      </Box>
      <AddPlay state={open} onClose={handleClickOpen} />
    </>
  );
};
