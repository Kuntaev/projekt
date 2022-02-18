import React, { useState } from "react";
import {
  Backdrop,
  DialogTitle,
  Fade,
  Modal,
  Paper,
  TextField,
} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import { editCaptainById } from "../../redux/features/captain";
import { useDispatch, useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  modalProfile: {
    margin: "162px 525px 100px ",
  },
  editPaper: {
    borderRadius: "10px 50px 10px 50px",
    width: "500px",
    height: "348px",
  },
  modal: {
    marginLeft: "6px",
    alignItems: "center",
  },
  close: {
    fontSize: "18px",
    color: "white",
    backgroundColor: "grey",
  },
  BoxSave: {
    display: "flex",
    justifyContent: "space-evenly",
    marginTop: "20px",
  },
  save: {
    fontSize: "18px",
    color: "white",
    backgroundColor: "green",
  },
});

const EditProfile = ({ state, onClose }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const captain = useSelector((state) => state.captain.captain);

  const [name, setName] = useState(captain.name);
  const [surname, setSurname] = useState(captain.surname);
  const [mail, setMail] = useState(captain.mail);
  const [avatar, setAvatar] = useState(captain.avatar);

  const handleEditAvatar = (e) => {
    setAvatar(e.target.value);
  };

  const handleEditName = (e) => {
    setName(e.target.value);
  };
  const handleEditSurname = (e) => {
    setSurname(e.target.value);
  };
  const handleEditMail = (e) => {
    setMail(e.target.value);
  };
  const handleEdit = () => {
    dispatch(editCaptainById({ name, surname, mail, avatar }));
  };

  return (
    <Modal
      open={state}
      onClose={onClose}
      className={classes.modalProfile}
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 100,
      }}
    >
      <Fade in={state}>
        <Paper className={classes.editPaper}>
          <form noValidate autoComplete="off" onSubmit={handleEdit}>
            <DialogTitle>Заполните все поля</DialogTitle>
            <Grid className={classes.modal} container spacing={4}>
              <Grid item={3}>
                <TextField
                  onChange={handleEditName}
                  value={name}
                  variant="outlined"
                  required
                  label="Имя"
                />
              </Grid>
              <Grid item={3}>
                <TextField
                  onChange={handleEditSurname}
                  value={surname}
                  variant="outlined"
                  required
                  label="Фамилия"
                />
              </Grid>
              <Grid item={3}>
                <TextField
                  onChange={handleEditMail}
                  value={mail}
                  variant="outlined"
                  required
                  label="Почта"
                />
              </Grid>
              <Grid item={3}>
                <TextField
                  onChange={handleEditAvatar}
                  value={avatar}
                  variant="outlined"
                  required
                  label="фото"
                />
              </Grid>
            </Grid>
            <Box className={classes.BoxSave}>
              <Button
                variant="contained"
                type="submit"
                className={classes.save}
                onClick={handleEdit}
              >
                Сохранить
              </Button>
              <Button
                variant="contained"
                type="submit"
                className={classes.close}
                onClick={onClose}
              >
                Закрыть
              </Button>
            </Box>
          </form>
        </Paper>
      </Fade>
    </Modal>
  );
};

export default EditProfile;
