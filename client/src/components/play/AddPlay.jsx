import React, { useEffect, useState } from "react";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { addEvents, deleteEvents } from '../../redux/features/event';
import { useDispatch } from 'react-redux';

export default function FormDialog({state, onClose}) {

  const dispatch = useDispatch();

  const [width, setWidth ] = useState("")
  const [longs, setLongs ] = useState("")
  const [date, setDate ] = useState("")
  const [time, setTime ] = useState("")
  const [name, setName ] = useState("");

  // todo напомнить Ахмаду исправить
  const handleChangedName = (e) => {
    setName(e.target.value)
  }
  const handleChangedTime = (e) => {
    setTime(e.target.value)
  }
  const handleChangedDate = (e) => {
    setDate(e.target.value)
  }
  const handleChangedLong = (e) => {
    setLongs(e.target.value)
  }
  const handleChangedWidth = (e) => {
    setWidth(e.target.value)
  }
  const EvAdd = () => {
    dispatch(addEvents( name, width, time, date, longs ))
  }

  return (
    <div>
      <Dialog open={state} onClose={onClose}>
        <DialogTitle>Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your email address here. We
            will send updates occasionally.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Название"
            type="name"
            onChange={handleChangedName}
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            type="date"
            fullWidth
            variant="standard"
            onChange={handleChangedDate}
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            type="time"
            fullWidth
            variant="standard"
            onChange={handleChangedTime}
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="долгота"
            type="long"
            onChange={handleChangedLong}
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="ширина"
            type="width"
            onChange={handleChangedWidth}
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose}>Закрыть</Button>
          <Button onClick={EvAdd}>Подтвердить</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}