import React, { useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import { Box, CardMedia, Fab, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useDispatch, useSelector } from "react-redux";
import Typography from "@material-ui/core/Typography";
import {
  deleteAccount,
  getAuthorizationCaptain,
  outputCaptain,
} from "../../redux/features/captain";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import { Link, useHistory } from "react-router-dom";
import EditIcon from "@material-ui/icons/Edit";
import EditProfile from "./EditProfile";

const useStyles = makeStyles({
  avatar: {
    marginLeft: "100px",
    width: "300px",
    height: "300px",
    borderRadius: "50%",
  },
  area: {
    justifyContent: "space-around",
    paddingTop: 30,
  },
  data: {
    marginBottom: "40px",
    color: "black",
  },
  delete: {
    fontSize: "18px",
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
    justifyContent: "start",
    marginTop: "30px",
    width: "500px",
    height: "348px",
  },
});

const PersonalCaptain = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  const captain = useSelector((state) => state.captain.captain);

  const [open, setOpen] = React.useState(false);

  useEffect(() => {
    dispatch(getAuthorizationCaptain());
  }, []);

  const handleDelete = () => {
    dispatch(deleteAccount());
    history.push("/");
  };
  const handleOutput = () => {
    dispatch(outputCaptain());
  };
  const handleClickOpen = () => setOpen(!open);

  return (
    <Container>
      <Grid className={classes.area} container spacing={5}>
        <Grid item={6}>
          <CardMedia
            component="img"
            className={classes.avatar}
            image={captain?.avatar}
          />
        </Grid>
        <Box className={classes.paperData}>
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
          <Button
            onClick={handleDelete}
            variant="contained"
            color="secondary"
            size="large"
            className={classes.delete}
          >
            Удалить
          </Button>
          <Fab
            style={{
              width: "60px",
              margin: "0 20px",
              backgroundColor: "inherit",
              color: "#1c191a",
            }}
            aria-label="edit"
          >
            <EditIcon onClick={handleClickOpen} style={{ padding: 16 }} />
          </Fab>
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
        </Box>
      </Grid>
      <EditProfile state={open} onClose={handleClickOpen} />
    </Container>
  );
};

export default PersonalCaptain;
