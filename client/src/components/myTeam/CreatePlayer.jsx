import React, { useState } from "react";
import {
  makeStyles,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@material-ui/core";
import { captainPlayerAdd } from "../../redux/features/player";
import { useDispatch } from "react-redux";

const useStyles = makeStyles({
  backgroudPaper: {
    margin: "0px 500px 0px",
    width: "400px",
    height: "700px",
  },
  btn: {
    margin: "30px 0",
  },
});

function CreatePlayer({ state, onClose }) {
  const classes = useStyles();
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [room, setRoom] = useState("");

  const handleNameAdd = (e) => {
    setName(e.target.value);
  };
  const handleLastnameAdd = (e) => {
    setLastname(e.target.value);
  };
  const handleRoomAdd = (e) => {
    setRoom(e.target.value);
  };
  const handlePlayerAdd = () => {
    dispatch(captainPlayerAdd({ name, lastname, room }));
  };

  return (
    <div>
      <Dialog className={classes.backgroudPaper} open={state} onClose={onClose}>
        <DialogTitle>Заполните поля, чтобы добавить игрока...</DialogTitle>
        <DialogContent>
          <TextField
            onChange={handleNameAdd}
            id="outlined-multiline-static"
            label="Введите имя"
            multiline
            rows={1}
            variant="outlined"
          />
          <TextField
            className={classes.btn}
            onChange={handleLastnameAdd}
            id="outlined-multiline-static"
            label="Введите фамилию"
            multiline
            rows={1}
            variant="outlined"
          />
          <TextField
            onChange={handleRoomAdd}
            id="outlined-multiline-static"
            label="Введите номер игрока"
            multiline
            rows={1}
            variant="outlined"
          />
          <DialogActions>
            <Button onClick={handlePlayerAdd} variant="contained">
              Добавить
            </Button>
            <Button onClick={onClose} variant="contained">
              Закрыть
            </Button>
          </DialogActions>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default CreatePlayer;
