import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@material-ui/core";
import { addTeam } from "../../redux/features/team";
import { useDispatch, useSelector } from "react-redux";

function CreateTeam({ state, onClose }) {
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [open, setOpen] = React.useState(false);

  const handleAddTeam = () => {
    setOpen(false);
    dispatch(addTeam(name, image));
    setName("");
    setImage("");
  };
  const handleAddName = (e) => {
    setName(e.target.value);
  };
  const handleAddImage = (e) => {
    setImage(e.target.value);
  };

  return (
    <Dialog open={state} onClose={onClose}>
      <DialogTitle>Заполните поля, чтобы создать команду...</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          id="name"
          label="Название команды"
          type="name"
          onChange={handleAddName}
          fullWidth
          variant="standard"
        />
        <TextField
          autoFocus
          margin="dense"
          label="Ссылка логотипа"
          id="name"
          type="url"
          fullWidth
          variant="standard"
          onChange={handleAddImage}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Закрыть</Button>
        <Button onClick={handleAddTeam}>Подтвердить</Button>
      </DialogActions>
    </Dialog>
  );
}

export default CreateTeam;
