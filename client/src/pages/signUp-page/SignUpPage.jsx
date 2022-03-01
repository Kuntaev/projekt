import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Avatar,
  Box,
  Button,
  Container,
  CssBaseline,
  Grid,
  Link,
  Paper,
  TextField,
  Typography,
} from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { registrationCaptain } from "../../redux/features/captain";
import { useHistory } from "react-router-dom";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export const SignUpPage = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();

  const [name, setName] = useState("");
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [surname, setSurname] = useState("");
  const [mail, setMail] = useState("");
  const [avatar, setAvatar] = useState("");

  const loading = useSelector((state) => state.captain.loading);
  const message = useSelector((state) => state.captain.message);
  const registrationError = useSelector(
    (state) => state.captain.registrationError
  );

  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleLogin = (e) => {
    setLogin(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleSurname = (e) => {
    setSurname(e.target.value);
  };
  const handleMail = (e) => {
    setMail(e.target.value);
  };
  const handleAvatar = (e) => {
    setAvatar(e.target.value);
  };
  const handleSubmit = () => {
    dispatch(
      registrationCaptain({ name, login, password, surname, mail, avatar })
    );
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                sm={6}
                onChange={handleMail}
                variant="outlined"
                required
                label="Почта"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                onChange={handleAvatar}
                variant="outlined"
                required
                label="Фото"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                onChange={handleName}
                variant="outlined"
                required
                label="Имя"
                autoComplete="имя"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                onChange={handleSurname}
                variant="outlined"
                required
                label="Фамилия"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                onChange={handleLogin}
                autoComplete
                variant="outlined"
                required
                label="Логин"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                onChange={handlePassword}
                variant="outlined"
                required
                label="Пароль"
                autoComplete
                type="password"
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={handleSubmit}
          >
            Зарегистрироваться
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link href="/sign-in" variant="body2">
                У вас уже есть аккаунт? Войти
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
};
