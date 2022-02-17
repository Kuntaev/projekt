import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Dialog,
  DialogActions, DialogContent, DialogTitle,
  TextField,
  Typography,
} from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { editTeam, loadOneMyTeam } from "../../redux/features/team";
import { makeStyles } from "@material-ui/core/styles";
import HeaderBlack from "../header/HeaderBlack";
import Players from "../player/Players";
import CreatePlayer from "./CreatePlayer";

const useStyles = makeStyles({
  main: {
    display: "flex",
  },
  image: {
    width: 400,
  },
  teamName: {
    fontSize: 40,
  },
  name: {
    marginLeft: 350,
    fontSize: 40,
    justifyContent: "space-between",
  },
  button: {
    display: "flex",
  },
  paperPlayer: {
    textAlign: "center",
    backgroundColor: "rgba(101,101,105,0.28)",
    width: "300px",
    height: "160px",
  },
  buttons: {
    textAlign: "center",
    marginLeft: 200,
    marginTop: 60,
  },
  boxs: {
    textAlign: "center",
    marginLeft: 200,
  },
  btnsh: {
    display: "flex",
  },
  btnsh2: {
    marginLeft: 20,
  },
  btnSave: {
    marginBottom: 20,
    marginTop: 5,
  },
});

const MyTeamId = () => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const { id } = useParams();

  const [open, setOpen] = React.useState(false);

  const [openAdd, setOpenAdd] = React.useState(false);

  const [text, setText] = useState("");
  const [image, setImage] = useState("");
  const [textError, setTextError] = useState(false);
  const [imageError, setImageError] = useState(false);

  const { loadOneMyT } = useSelector((state) => state.team);

  useEffect(() => {
    dispatch(loadOneMyTeam(id));
  }, [id, dispatch, open]);

  useEffect(() => {
    dispatch(editTeam(id));
  }, []);

  const handleClickSave = () => {

    if (text == "") {
      setTextError(true);
    }
    if (image == "") {
      setImageError(true);
    }
    if (id && text && image) {
      dispatch(editTeam(id, text, image));
      setOpen(false);
    }

  };

  const handleEditName = (e) => {
    setText(e.target.value);
  };

  const handleEditImage = (e) => {
    setImage(e.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleClickEdit = () => {
    setOpen(true);
  };

  const handleClickAdd = () => {
    setOpenAdd(true);
  };

  const handleClickOpen = () => {
    setOpenAdd(false);
  };

  return (
    <>
      <div>
        <HeaderBlack />
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>Введите пожалуйста новые данные</DialogTitle>
              <DialogContent>
                <form noValidate autoComplete="off" onSubmit={handleClickSave}>
                    <TextField
                      id="outlined-multiline-static"
                      margin="dense"
                      autoFocus
                      label="Введите название команды"
                      value={text}
                      onChange={handleEditName}
                      variant="outlined"
                      required
                      error={textError}
                      fullWidth
                    />
                    <TextField
                      id="outlined-multiline-static"
                      margin="dense"
                      label="Вставте ссылку аватарки"
                      value={image}
                      onChange={handleEditImage}
                      variant="outlined"
                      required
                      error={imageError}
                      fullWidth
                    />
                </form>
              </DialogContent>
            <DialogActions>
                  <Button
                    onClick={handleClickSave}
                    variant="contained"
                    color="primary"
                  >
                    Сохранить
                  </Button>
                <Button
                  onClick={handleClose}
                  variant="contained"
                  color="primary"
                >
                  Закрыть
                </Button>
            </DialogActions>
        </Dialog>
        <Box className={classes.main}>
          <Box className={classes.boxs}>
            <img className={classes.image} src={loadOneMyT?.image} />
            <Typography className={classes.teamName}>
              {loadOneMyT?.name}
            </Typography>
          </Box>
          <Box className={classes.name}>
            <Players />
          </Box>
        </Box>
        <Box className={classes.buttons}>
          <Button onClick={handleClickEdit}>Изменить</Button>
          <Button onClick={handleClickAdd}>Добавить игрока</Button>
        </Box>
        <CreatePlayer state={openAdd} onClose={handleClickOpen} />
      </div>
    </>
  );
};

export default MyTeamId;
