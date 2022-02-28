import React, { useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import { Box, CardMedia, Fab, Paper, useMediaQuery } from "@material-ui/core";
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
import EditProfile from "../../components/edit-profile/EditProfile";
import classNames from "classnames";
import "./personalCaptain.css";

const useStyles = makeStyles({
  avatar: {
    width: "250px",
    height: "250px",
    borderRadius: "50%",
  },
  area: {
    justifyContent: "space-around",
    paddingTop: 30,
    display: "flex",
  },
  data: {
    marginBottom: "40px",
    color: "black",
    fontSize: 22,
    fontFamily: "Roboto",
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
    marginTop: "70px",
    width: "500px",
    height: "348px",
  },
  imageAvatar: {
    marginLeft: 32,
  },
});

export const PersonalCaptain = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  const captain = useSelector((state) => state.captain.captain);

  const [open, setOpen] = React.useState(false);

  const isActive = useMediaQuery("(max-width: 640px)");

  const area = classNames(!isActive ? classes.area : "my-personal-area");
  const paperData = classNames(
    !isActive ? classes.paperData : "my-personal-paperData"
  );
  const data = classNames(!isActive ? classes.data : "my-personal-data");
  const deleted = classNames(
    !isActive ? classes.delete : "my-personal-deleted"
  );
  const personalArea = classNames(
    !isActive ? classes.personalArea : "my-personal-personalArea"
  );
  const next = classNames(!isActive ? classes.next : "my-personal-next");

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
      <Grid className={area} container spacing={5}>
        <Grid item={6} className={classes.imageAvatar}>
          <CardMedia
            component="img"
            className={classes.avatar}
            image={captain?.avatar}
          />
        </Grid>
        <Box className={paperData}>
          <p className={data}>
            <b>Фамилия</b>: {captain?.surname}
          </p>
          <p className={data}>
            <b>Имя</b>: {captain?.name}
          </p>
          <p className={data}>
            <b>Почта</b>: {captain?.mail}
          </p>
          <Box className="my-personal-buttons">
            <Button
              onClick={handleDelete}
              variant="contained"
              color="secondary"
              size="small"
              className={deleted}
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
            <Link className={personalArea} to="/">
              <Button
                className={next}
                onClick={handleOutput}
                size="small"
                variant="contained"
                color="primary"
              >
                Выход
              </Button>
            </Link>
          </Box>
        </Box>
      </Grid>
      <EditProfile state={open} onClose={handleClickOpen} />
    </Container>
  );
};
