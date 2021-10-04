import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  loadEvents,
} from "../../redux/features/event";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Button, Typography } from "@material-ui/core";
import Header2 from "../header/HeaderBlack";
import AddPlay from "../play/AddPlay";
import Maps from "./Maps";
import { NavLink } from 'react-router-dom';


const useStyles = makeStyles({
  main:{
    padding: "0px 150px",
   display: "flex",
   justifyContent: "space-between"
  },
  contentOne: {
    width: "30%",
    paddingTop: 50,
  },

  addTodo: {
    display:'block',
    backgroundColor: "green",
    color: "white",
    width: "100%",
    "&:hover": {
      backgroundColor: "darkgreen",
    },
  },
  todo: {
    paddingTop: 30,
  },
  box: {
    display:'flex',
    justifyContent:'space-between',
    backgroundColor: "yellow",
  },
  boxOne:{
    display: 'flex',
    justifyContent:'space-between'
  },
  maps:{
    paddingTop:50,
  },
  signIn:{
    display:'block',
    color:'white',
    textDecoration:'none'
  }
});

function Play() {
  const dispatch = useDispatch();
  const classes = useStyles();

  const [open, setOpen] = useState(false);
  const [current, setCurrent] = useState(null);
  const [zoom, setZoom] = useState(10);
  const [coordinate, setCoordinate] = useState([45.694020705321996, 43.31769325294912]);

  const events = useSelector((state) => state.events.events);
  const token = useSelector((state) => state.captain.token);

  useEffect(() => dispatch(loadEvents()), []);

  const handleClickOpen = () => setOpen(!open);
  const handleSelectEvent = (event) => {
    setCurrent(event._id);
    setZoom(15);
    setCoordinate([event.width, event.longs]);
  }
  return (
    <>
      <Header2 />
      <Box className={classes.main}>
        <Box className={classes.contentOne}>
          {token ?
            <Button
              onClick={handleClickOpen}
              variant="contained"
              className={classes.addTodo}
              fullWidth
            >
              Назначить игру
            </Button>:
            <Button
              variant="contained"
              className={classes.addTodo}
              fullWidth
            >
              <NavLink to="/sign-in" className={classes.signIn}>
              Авторизоваться
              </NavLink>
            </Button>
          }

          <Box className={classes.todo}>
            {events.map((event) => {
              return(
                <Box
                  onClick={() => handleSelectEvent(event)}
                  className={event._id === current ? classes.box : classes.boxOne}
                >
                  <Typography variant="h5">{event.name}</Typography>
                  <Typography variant="p">{event.teamId}</Typography>
                  <Box>
                    <Typography>{event.date}</Typography>
                    <Typography>{event.time}</Typography>
                  </Box>
                </Box>
              )
            })}
          </Box>
        </Box>
        <Box className={classes.maps}>
          <Maps handleSelectEvent={handleSelectEvent} zoom={zoom} coordinate={coordinate}/>
        </Box>
      </Box>
      <AddPlay state={open} onClose={handleClickOpen} />
    </>
  );
}

export default Play;