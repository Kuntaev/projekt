import React, { useState } from "react";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { addEvents } from '../../redux/features/event';
import { useDispatch, useSelector } from 'react-redux';
import { Collapse, List, ListItem, ListItemText } from '@material-ui/core';
import { ExpandLess, ExpandMore } from '@material-ui/icons';
import { loadMyTeam } from '../../redux/features/team';
import { Link } from 'react-router-dom';

export default function FormDialog({state, onClose}) {

  const dispatch = useDispatch();

  const { myTeam } = useSelector((state) => state.team);

  const [width, setWidth ] = useState("");
  const [longs, setLongs ] = useState("");
  const [date, setDate ] = useState("");
  const [time, setTime ] = useState("");
  const [name, setName ] = useState("");
  const [teamId, setTeamId] = useState("")
  const [open, setOpen] = React.useState(false);

  let div;

  const handleChangedName = (e) => {
    setName(e.target.value)
  }
  const handleChangeTeam = (e) => {
    setTeamId(e.target.value)
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
  const handleClick = () => {
    setOpen(!open);
  }
  const EvAdd = () => {
    if (name===""){
      return div = "введите текcт"
    }else if(width === "" && longs === ""){
      return div = "нужно указать локацию"
    }else if(date === ""){
      return div = "определите дату"
    }else if (time === ""){
      return div = "определите время"
    } else{
      dispatch(addEvents( name, width, time, date, longs, teamId ))
    }

  }

  return (
    <div>
      <Dialog open={state} onClose={onClose}>
        <DialogTitle>Заполните поля, чтобы назначить матч...</DialogTitle>
        <DialogContent>
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
          <ListItem button onClick={handleClick}>
            <ListItemText primary="Выбрать команду" />
            {open ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem button>
                {myTeam?.map((item) => {
                  console.log(item.name)
                  return (
                    <Button
                    onChange={handleChangeTeam}
                    >{item.name}</Button>
                  )})}
              </ListItem>
              </List>
          </Collapse>
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose}>Закрыть</Button>
          <Button onClick={EvAdd}>Подтвердить</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
