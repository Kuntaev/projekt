import React, { useState } from "react";
import {
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogTitle,
  DialogContent,
} from "@material-ui/core";
import { useDispatch } from "react-redux";
import { addEvents } from "../../redux/features/event";

export default function FormDialog({ state, onClose }) {
  const dispatch = useDispatch();

  const [width, setWidth] = useState("");
  const [longs, setLongs] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [name, setName] = useState("");
  const [widthError, setWidthError] = useState(false);
  const [longsError, setLongsError] = useState(false);
  const [dateError, setDateError] = useState(false);
  const [timeError, setTimeError] = useState(false);
  const [nameError, setNameError] = useState(false);

  const handleChangedName = (e) => {
    setName(e.target.value);
  };
  const handleChangedTime = (e) => {
    setTime(e.target.value);
  };
  const handleChangedDate = (e) => {
    setDate(e.target.value);
  };
  const handleChangedLong = (e) => {
    setLongs(e.target.value);
  };
  const handleChangedWidth = (e) => {
    setWidth(e.target.value);
  };

  const EvAdd = () => {
    if (name == "") {
      setNameError(true);
    }
    if (time == "") {
      setTimeError(true);
    }
    if (date == "") {
      setDateError(true);
    }
    if (longs == "" && longs < -90 && longs > 90) {
      setLongsError(true);
    }
    if (width == "" && width < -90 && width > 90) {
      setWidthError(true);
    }
    if (name && width && time && date && longs) {
      dispatch(addEvents(name, width, time, date, longs));
    }
  };

  return (
    <div>
      <Dialog open={state} onClose={onClose}>
        <DialogTitle>Заполните поля, чтобы назначить матч...</DialogTitle>
        <DialogContent>
          <form noValidate autoComplete="off" onSubmit={EvAdd}>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Название"
              type="name"
              onChange={handleChangedName}
              fullWidth
              variant="outlined"
              required
              error={nameError}
            />
            <TextField
              autoFocus
              margin="dense"
              id="date"
              type="date"
              fullWidt
              onChange={handleChangedDate}
              variant="outlined"
              required
              error={dateError}
            />
            <TextField
              autoFocus
              margin="dense"
              id="time"
              type="time"
              fullWidth
              onChange={handleChangedTime}
              variant="outlined"
              required
              error={timeError}
            />
            <TextField
              autoFocus
              margin="dense"
              id="longs"
              label="долгота"
              type="long"
              onChange={handleChangedLong}
              fullWidth
              variant="outlined"
              required
              error={longsError}
            />
            <TextField
              autoFocus
              margin="dense"
              id="width"
              label="ширина"
              type="width"
              onChange={handleChangedWidth}
              fullWidth
              variant="outlined"
              required
              error={widthError}
            />
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose} type="submit" variant="contained">
            Закрыть
          </Button>
          <Button onClick={EvAdd} type="submit" variant="contained">
            Подтвердить
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
