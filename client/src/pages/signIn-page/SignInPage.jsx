import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Avatar,
  Box,
  Button,
  Container,
  CssBaseline,
  Link,
  TextField,
  Typography,
  useMediaQuery,
} from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useHistory } from "react-router-dom";
import { authorizationCaptain } from "../../redux/features/captain";

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
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  main: {
    padding: "15px 150px",
  },
  adaptMain: {
    padding: "5px 10px",
  },
  link: {
    textDecoration: "none",
    color: "3f51b5",
    fontFamily: "Roboto",
  },
}));

export const SignInPage = () => {
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();

  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const loading = useSelector((state) => state.captain.loading);
  const authorizationError = useSelector(
    (state) => state.captain.authorizationError
  );

  const isActive = useMediaQuery("(max-width: 640px)");

  let main = !isActive ? classes.main : classes.adaptMain;

  const handleLogin = (e) => {
    setLogin(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleSubmit = () => {
    dispatch(authorizationCaptain({ password, login }))
      .then(() => {
        if (!authorizationError) {
          history.push("/");
        }
      })
      .catch((e) => {});
  };
  return (
    <div className={main}>
      <NavLink to="/" className={classes.link}>
        Назад
      </NavLink>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Вход
          </Typography>
          <form noValidate>
            <TextField
              onChange={handleLogin}
              autoComplete="email"
              variant="outlined"
              margin="normal"
              required
              fullWidth
              label="Логин"
              autoFocus
            />
            <TextField
              onChange={handlePassword}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              label="Пароль"
              autoComplete="current-password"
              type="password"
            />
            <Box className={classes.link}>
              <Link href="/sign-up" variant="body2">
                У вас нет аккаунта? Зарегистрироваться
              </Link>
            </Box>
            <Box>
              <Button
                fullWidth
                onClick={handleSubmit}
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                Авторизоваться
              </Button>
            </Box>
          </form>
        </div>
      </Container>
    </div>
  );
};
