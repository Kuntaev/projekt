import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addEvents,
  deleteEvents,
  loadEvents,
} from "../../redux/features/event";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import Header2 from "../header/HeaderBlack";
import AddPlay from "../play/AddPlay";
import Maps from "./Maps";

const useStyles = makeStyles({
  content1: {
    width: "30%",
    paddingTop: 50,
  },
  addTodo: {
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
    backgroundColor: "yellow",
  },
});

function Play() {
  const dispatch = useDispatch();
  const classes = useStyles();

  const [open, setOpen] = useState(false);
  const [current, setCurrent] = useState(null);
  const [zoom, setZoom] = useState(10);
  const [coordinate, setCoordinate] = useState([45.694020705321996, 43.31769325294912]);

  const events = useSelector((state) => state.events.events);

  useEffect(() => dispatch(loadEvents()), []);

  const handleClickOpen = () => setOpen(!open);
  const eventsRemoveButton = (id) => dispatch(deleteEvents(id));
  const handleSelectEvent = (event) => {
    setCurrent(event._id);
    setZoom(15);
    setCoordinate([event.width, event.longs]);
  }

  return (
    <div>
      <Header2 />
      <div
        style={{
          padding: "0px 150px",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div className={classes.content1}>
          <Button
            variant="contained"
            disableElevation
            className={classes.addTodo}
            onClick={handleClickOpen}
          >
            <span
              style={{
                backgroundColor: "white",
                color: "green",
                borderRadius: "50px",
                padding: "0px 8px",
              }}
            >
              +
            </span>
            ⠀назначить матч
          </Button>
          <div className={classes.todo}>
            {events.map((event) => {
              return (
                <div onClick={() => handleSelectEvent(event)}>
                  <div
                    className={event._id === current ? classes.box : ''}
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <div style={{ display: "flex" }}>
                      <div>
                        <h2 style={{ margin: 0 }}>{event.name}</h2>
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                          }}
                        >
                          <div
                            style={{ display: "flex", alignItems: "center" }}
                          >
                            <p>Дата:</p>
                            <h4>{event.date}</h4>
                          </div>
                          <div
                            style={{ display: "flex", alignItems: "center" }}
                          >
                            <p>Время:</p>
                            <h4>{event.time}</h4>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="actions">
                      <button
                        onClick={() => {
                          eventsRemoveButton(event._id);
                        }}
                      >
                        ✘
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div style={{ paddingTop: 50 }}>
          <Maps handleSelectEvent={handleSelectEvent} zoom={zoom} coordinate={coordinate}/>
        </div>
      </div>
      <AddPlay state={open} onClose={handleClickOpen} />
    </div>
  );
}

export default Play;