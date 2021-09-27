import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Box,
  Button,
  Grid,
  Link,
  Paper,
  TextField,
  Typography,
} from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { registrationCaptain } from "../../redux/features/captain";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles({
  name: {
    margin: "15px",
    textAlign: "center",
  },
  paper: {
    margin: "200px 330px",
    width: "800px",
    height: "400px",
  },
  img: {
    backgroundImage:
      "URL(https://images.pexels.com/photos/3571065/pexels-photo-3571065.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940)",
    //  width: "1000px",
    height: "900px",
  },

  gridMain: {
    textAlign: "center",
    width: "650px",
  },
  submit: {
    fontSize: "18px",
  },
  login: {
    marginLeft: "180px",
  },
  link: {
    margin: "20px 10px",
  },
  data: {
    margin: "10px 170px 10px",
  },
});

const SignUpPage = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();

  const [name, setName] = useState("");
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [surname, setSurname] = useState("");
  const [mail, setMail] = useState("");
  const [avatar, setAvatar] = useState("")

  const loading = useSelector((state) => state.captain.loading);
  const message = useSelector((state) => state.captain.message);
  const registrationError = useSelector((state) => state.captain.registrationError);


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
    setAvatar(e.target.value)
  }
  const handleSubmit = () => {
    dispatch(registrationCaptain({ name, login, password, surname, mail, avatar }));
  };

  return (
    <Grid container className={classes.img}>
      <Grid className={classes.gridMain}>
        <Paper className={classes.paper} elevation={5}>
          <Box className={classes.main}>
            <Box>
              <Typography component="p" variant="h5">
                Регистрация
              </Typography>
              <Typography
                component="h1"
                variant="body2"
                color={message ? "primary" : "error"}
              >
                {message ? (
                  <Box className={classes.registr}>
                    {history.push("/sign-in")}
                  </Box>
                ) : (
                  ""
                )}
                {
                  <Typography component="p" variant="h6">
                    {registrationError}
                  </Typography>
                }
              </Typography>
            </Box>
            <form noValidate className={classes.form}>
              <Grid className={classes.data} container spacing={2}>
                <Grid item={4}>
                  <Box>
                    <TextField
                      onChange={handleMail}
                      variant="outlined"
                      required
                      label="Почта"
                    />
                  </Box>
                </Grid>
                <Grid item={4}>
                  <Box>
                    <TextField
                      onChange={handleAvatar}
                      variant="outlined"
                      required
                      label="Фото"
                    />
                  </Box>
                </Grid>
              </Grid>


              <Grid className={classes.data} container spacing={2}>
                <Grid item={4}>
                  <Box>
                    <TextField
                      onChange={handleName}
                      variant="outlined"
                      required
                      label="Имя"
                      autoComplete="имя"
                    />
                  </Box>
                </Grid>
                <Grid item={4}>
                  <Box>
                    <TextField
                      onChange={handleSurname}
                      variant="outlined"
                      required
                      label="Фамилия"
                    />
                  </Box>
                </Grid>
              </Grid>

              <Grid container spacing={2}>
                <Grid className={classes.login} item={6}>
                  <TextField
                    onChange={handleLogin}
                    autoComplete
                    variant="outlined"
                    required
                    fullWidth
                    label="Логин"
                    autoFocus
                  />
                </Grid>
                <Grid item={6}>
                  <TextField
                    onChange={handlePassword}
                    variant="outlined"
                    required
                    fullWidth
                    label="Пароль"
                    autoComplete
                    type="password"
                  />
                </Grid>
              </Grid>
              <Box className={classes.link}>
                <Link href="/sign-in" variant="body2">
                  У вас уже есть аккаунт? Войти
                </Link>
              </Box>
              <Box>
                <Button
                  onClick={handleSubmit}
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                >
                  Зарегистрироваться
                </Button>
              </Box>
            </form>
          </Box>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default SignUpPage;
