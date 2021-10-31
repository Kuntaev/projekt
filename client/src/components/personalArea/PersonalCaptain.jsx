import React, { useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";
import {
  Backdrop,
  CardMedia,
  Fab,
  Fade,
  Modal,
  Paper,
  TextField,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useDispatch, useSelector } from "react-redux";
import Typography from "@material-ui/core/Typography";
import {
  deleteAccount,
  editCaptainById,
  getAuthorizationCaptain,
  outputCaptain,
} from "../../redux/features/captain";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import { Link, useHistory } from "react-router-dom";
import EditIcon from "@material-ui/icons/Edit";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles({
  avatar: {
    marginLeft: "100px",
    width: "300px",
    height: "350px",
    borderRadius: "50px",
  },
  img: {
    backgroundImage:
      "URL(https://oir.mobi/uploads/posts/2021-03/1616582404_5-p-chernii-fon-gradient-6.jpg)",
    borderRadius: "10px",
    width: "1430px",
    height: "678px",
  },
  area: {
    alignItems: "center",
    textAlign: "center",
  },
  data: {
    marginBottom: "40px",
    color: "black",
  },
  delete: {
    fontSize: "18px",
    marginTop: "10px",
    marginLeft: "60px",
    color: "white",
  },
  dataRemove: {
    display: "flex",
    color: "black",
  },
  text: {
    color: "white",
  },
  next: {
    marginTop: "10px",
    fontSize: "19px",
  },
  personalArea: {
    textDecoration: "none",
    color: "white",
    fontWeight: "bold",
  },
  paperData: {
    backgroundColor: "grey",
    borderRadius: "10px 50px 10px 50px",
    marginTop: "30px",
    width: "500px",
    height: "348px",
  },
  save: {
    fontSize: "18px",
    color: "white",
    backgroundColor: "green",
  },
  BoxSave: {
    display: "flex",
    justifyContent: "space-evenly",
    marginTop: "20px",
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
  modalProfile: {
    margin: "162px 525px 100px ",
  },
  close: {
    fontSize: "18px",
    color: "white",
    backgroundColor: "grey",
  },
});

const PersonalCaptain = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  const captain = useSelector((state) => state.captain.captain);

  const [open, setOpen] = React.useState(false);
  const [name, setName] = useState(captain.name);
  const [surname, setSurname] = useState(captain.surname);
  const [mail, setMail] = useState(captain.mail);
  const [avatar, setAvatar] = useState("");

  useEffect(() => {
    dispatch(getAuthorizationCaptain());
  }, []);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleCloseButton = () => setOpen(false);

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
  const handleDelete = () => {
    dispatch(deleteAccount());
    history.push("/");
  };
  const handleOutput = () => {
    dispatch(outputCaptain());
  };
  const handleEditAvatar = (e) => {
    setAvatar(e.target.value);
  };
  return (
    <Container className={classes.img}>

      <Grid className={classes.area} container spacing={5}>
        <Grid item={6}>
          <Typography className={classes.text} variant="h5" component="span">
            <b style={{ marginLeft: "80px" }}>Аватарка</b>
          </Typography>
          <CardMedia
            component="img"
            className={classes.avatar}
            image={captain?.avatar}
          />
        </Grid>
        <Paper className={classes.paperData} elevation={5}>
          <Grid item={6}>
            <Typography
              className={classes.data}
              gutterBottom
              variant="h5"
              component="p"
            >
              <b>Фамилия</b>: {captain?.surname}
            </Typography>
            <Typography
              className={classes.data}
              gutterBottom
              variant="h5"
              component="p"
            >
              <b>Имя</b>: {captain?.name}
            </Typography>
            <Typography
              className={classes.data}
              gutterBottom
              variant="h5"
              component="p"
            >
              <b>Почта</b>: {captain?.mail}
            </Typography>
            <Typography
              className={classes.dataRemove}
              gutterBottom
              variant="h5"
              component="p"
            >
              <Typography component="p" variant="h5">
                <Button
                  onClick={handleDelete}
                  variant="contained"
                  color="secondary"
                  size="large"
                  className={classes.delete}
                >
                  Удалить
                </Button>
              </Typography>
              <Fab
                style={{
                  width: "60px",
                  margin: "0 20px",
                  backgroundColor: "inherit",
                  color: "#1c191a",
                }}
                aria-label="edit"
                // onClick={() => setIsEditing(true)}
              >
                <EditIcon onClick={handleOpen} />
              </Fab>
              <Typography
                className={classes.textNext}
                component="p"
                variant="h5"
              >
                <Link className={classes.personalArea} to="/">
                  <Button
                    className={classes.next}
                    onClick={handleOutput}
                    size="large"
                    variant="contained"
                    color="primary"
                  >
                    Выход
                  </Button>
                </Link>
              </Typography>
            </Typography>
          </Grid>
        </Paper>
      </Grid>

      <Modal
        className={classes.modalProfile}
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 100,
        }}
      >
        <Fade in={open}>
          <Paper className={classes.editPaper}>
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
                className={classes.save}
                onClick={handleEdit}
              >
                Сохранить
              </Button>
              <Button
                variant="contained"
                className={classes.close}
                onClick={handleCloseButton}
              >
                Закрыть
              </Button>
            </Box>
          </Paper>
        </Fade>
      </Modal>
    </Container>
  );
};

export default PersonalCaptain;
