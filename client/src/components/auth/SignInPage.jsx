import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Box,
  Button,
  Container,
  Grid,
  Link,
  Paper,
  TextField,
  Typography,
} from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from 'react-router-dom';
import { authorizationCaptain } from '../../redux/features/captain';

const useStyles = makeStyles({
    submit: {
        fontSize: "19px",
        margin: "10px 100px"
    },
    link: {
            margin: "20px 10px"
        },
  authError: {
      margin: "20px 80px 20px",

  },
    paper: {
        margin: "200px 360px",
        width: "700px",
        height: "300px",

    },
    img: {
        backgroundImage: "URL(https://images.pexels.com/photos/3571065/pexels-photo-3571065.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940)",
        //  width: "1000px",
        height: "900px"
    },
    gridMain: {
        textAlign: "center",
        width: "650px"
    },
  login: {
        marginLeft: "150px"
  }
});



const SignInPage = () => {
  const classes = useStyles();
  const history =  useHistory();
  const dispatch = useDispatch();

  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");


  const loading = useSelector((state) => state.captain.loading);
  const authorizationError = useSelector((state) => state.captain.authorizationError);


  const handleLogin = (e) => {
    setLogin(e.target.value)

  };
  const handlePassword = (e) => {
    setPassword(e.target.value)
  };
  const handleSubmit = () => {
    dispatch(authorizationCaptain({ password, login }))
    .then(() => {
      if (!authorizationError) {
        history.push("/");
      }
    })
    .catch((e) => {});

  }
  return (

    <Grid container className={classes.img}>
        <Grid className={classes.gridMain}>
            <Paper className={classes.paper} elevation={5}>
                <Box className={classes.main}>
                    <Box className={classes.nname}>
                        <Typography component="p" variant="h5">
                            Авторизация
                        </Typography>
                    </Box>
                    <Box className={classes.authError}>
                        {<Typography component="p" variant="h6" color="secondary">{authorizationError}</Typography>}
                    </Box>
                    <form noValidate>
                        <Grid container spacing={4}>
                            <Grid  className={classes.login} item={6}>
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
                            <Link href="/sign-up" variant="body2">
                                У вас нет аккаунта? Зарегистрироваться
                            </Link>
                        </Box>
                        <Box>
                            <Button
                                onClick={handleSubmit}
                                variant="contained"
                                color="primary"
                                className={classes.submit}
                            >
                                Авторизоваться
                            </Button>
                        </Box>
                    </form>
                </Box>
            </Paper>
        </Grid>

    </Grid>
  );
};

export default SignInPage;
