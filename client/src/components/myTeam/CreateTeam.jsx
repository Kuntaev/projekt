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
  const [nameError, setNameError] = useState(false);
  const [imageError, setImageError] = useState(false);
  const [open, setOpen] = React.useState(false);

  const handleAddTeam = () => {
    if (name == "") {
      setNameError(true);
    }
    if (image == "") {
      setImageError(true);
    }
    if (image && name) {
      setOpen(false);
      dispatch(addTeam(name, image));
      setName("");
      setImage("");
    }
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
        <form noValidate autoComplete="off" onSubmit={handleAddTeam}>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Название команды"
            type="name"
            onChange={handleAddName}
            fullWidth
            variant="outlined"
            required
            error={nameError}
          />
          <TextField
            margin="dense"
            label="Ссылка логотипа"
            id="name"
            type="url"
            fullWidth
            variant="outlined"
            onChange={handleAddImage}
            required
            error={imageError}
          />
        </form>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} type="submit" variant="contained">
          Закрыть
        </Button>
        <Button onClick={handleAddTeam} type="submit" variant="contained">
          Подтвердить
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default CreateTeam;
