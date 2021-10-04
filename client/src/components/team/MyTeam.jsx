import React, { useEffect, useState } from "react";
import { Box, Container, Grid, TextField, Typography } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import {
  addTeam,
  deleteTeam,
  loadMyTeam,
  loadOneTeam,
} from "../../redux/features/team";
import { Button, Dialog, DialogActions } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { NavLink } from "react-router-dom";
import HeaderBlack from '../header/HeaderBlack';

const useStyles = makeStyles({
  main: {
    flexGrow: 0,
    flexBasis: 33.3333,
    paddingLeft: 15,
    paddingRight: 15,
    paddingBottom: 15,
    marginLeft: 50
  },
  inner: {
    textAlign: 'center',
    border: "solid",
    padding: 20,
    "&:hover": {
      backgroundColor: "black",
      cursor: "pointer",
    },
  },
  image: {
    height: 180,
    width: 230,
  },
  name: {
    fontSize: 20,
    color: "red",
    textAlign: "center",
  },
  cont: {
    height: "100vh",
    backgroundSize: "cover",
    background: "fixed",
    backgroundRepeat: "no-repeat",
    backgroundImage:
      "URL(https://www.m24.ru/b/d/nBkSUhL2hFMlm8i2Lr6BosSyyJ2gp8TrlnTclb7P73OHezeOWXiSxTZt4slI-BHBsdWR_G-JLsV0=UOJ9qPQfj6-RO_mxeQnIHg.jpg)",
  },
  createTeam: {
    marginTop: 30,
    marginLeft: 76
  },
  btn: {
    display: 'flex'
  },
  box: {
    width: 210
  },
  btnClose: {
    marginLeft: 50,
    marginTop: 30
  },
  teamBox: {
    width: 330,
    height: 230,
    textAlign: 'left',
    backgroundImage: "url(https://www.m24.ru/b/d/nBkSUhL2hFMlm8i2Lr6BosSyyJ2gp8TrlnTclb7P73OHezeOWXiSxTZt4slI-BHBsdWR_G-JLsV0=UOJ9qPQfj6-RO_mxeQnIHg.jpg)",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    borderRadius: 20,
    marginLeft: 250,
    marginBottom: 40,
  },
  text: {
    marginTop: 20,
    marginLeft: 40
  }
});

const MyTeam = () => {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = (id) => {
    setOpen(true);
    dispatch(loadOneTeam(id));
  };

  const handleAddTeam = () => {
    setOpen(false);
    dispatch(addTeam(text, image));
    setText("");
    setImage("");
  }
  const handleClose = () => {
    setOpen(false);
  };
  const dispatch = useDispatch();

  const [text, setText] = useState("");
  const [image, setImage] = useState("");

  useEffect(() => {
    dispatch(loadMyTeam());
  }, []);

  const { myTeam } = useSelector((state) => state.team);

  const token = useSelector((state) => state.captain.token);

  const handleDeleteTeam = (id) => {
    dispatch(deleteTeam(id));
  };

  const handleAddName = (e) => {
    setText(e.target.value);
  };

  const handleAddImage = (e) => {
    setImage(e.target.value);
  };

  return (
    <>
      <HeaderBlack/>
      <Box>
        <Box className={classes.btn}>
          <Box className={classes.teamBox}>
          </Box>
          <Box>
            <Typography className={classes.text}>
              Создай свою команду, добавляй игроков и играйте против команд поблизости. <br/>
              Регистрируй своих друзей и играйте вместе в одной команде, побеждайте других! <br/>
              Создавайте события, выбирайте место, где будете играть, назначайте время и приглашайте <br/>
              других команд, играйте друг против друга. Ты можешь создать несколько команд, и участвовать в <br/>
              играх с разными командами.
            </Typography>
            <Box>
              <Button className={classes.createTeam} variant="outlined" onClick={handleClickOpen}>
                Создать команду
              </Button>
            </Box>
          </Box>
        </Box>
        <div>
          <Dialog open={open} onClose={handleClose}>
            <DialogActions>
              <Container>
                {token ? (
                  <Box className={classes.btn}>
                    <Box className={classes.box}>
                      <TextField
                        id="outlined-multiline-static"
                        label="Введите название команды"
                        multiline
                        rows={1}
                        value={text}
                        onChange={handleAddName}
                        variant="outlined"
                      />
                      <TextField
                        id="outlined-multiline-static"
                        label="Вставте ссылку аватарки"
                        multiline
                        rows={1}
                        value={image}
                        onChange={handleAddImage}
                        variant="outlined"
                      />
                    </Box>
                    <Box>
                      <Box>
                        <Button
                          onClick={handleAddTeam}
                          variant="contained"
                          color="primary"
                        >
                          Создать команду
                        </Button>
                      </Box>
                      <Button className={classes.btnClose} onClick={handleClose} autoFocus>
                        Закрыть
                      </Button>
                    </Box>
                  </Box>
                ) : (
                  <h3>
                    Вам необходимо <a href="/sign-in">авторизоваться...</a>
                  </h3>
                )}
              </Container>
            </DialogActions>
          </Dialog>
        </div>
      </Box>
      <Box>
        {token ? (
          <Grid container className={classes.main} spacing={5}>
            {myTeam?.map((item) => {
              return (
                <Grid item xs={3}>
                  <NavLink to={`/my-teams/${item?._id}`}>
                    <Box variant="outlined" className={classes.inner}>
                        <img className={classes.image} src={item?.image} />
                      <Box className={classes.name}>{item?.name}</Box>
                    </Box>
                  </NavLink>
                  <Box>
                    <Button
                      onClick={() => {
                        handleDeleteTeam(item._id);
                      }}
                    >
                      Удалить Команду
                    </Button>
                  </Box>
                </Grid>
              );
            })}
          </Grid>
        ) : (
          ""
        )}
      </Box>
    </>
  );
};

export default MyTeam;
