import React, { useEffect, useState } from "react";
import { Box, Container, Grid, TextField } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import {
  addTeam,
  deleteTeam,
  loadingTeams,
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
  },
  inner: {
    border: "solid",
    padding: 20,
    "&:hover": {
      backgroundColor: "black",
      cursor: "pointer",
    },
  },
  image: {
    textAlign: "center",
    height: 180,
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
    width: 350,
    height: 250,
    backgroundSize: "cover",
    textAlign: "center",
    borderRadius: 10,
    margin: "auto",
    backgroundColor: "grey",
  },
});

const MyTeam = () => {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = (id) => {
    setOpen(true);
    dispatch(loadOneTeam(id));
  };

  const handleClose = () => {
    setOpen(false);
    dispatch(addTeam(text, image));
    setText("");
    setImage("");
  };
  const dispatch = useDispatch();

  const [text, setText] = useState("");
  const [image, setImage] = useState("");

  useEffect(() => {
    dispatch(loadMyTeam());
  }, []);

  const { loadTeam } = useSelector((state) => state.team);

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
        <Box className={classes.createTeam}>
          <Button variant="outlined" onClick={handleClickOpen}>
            Создать команду
          </Button>
        </Box>
        <div>
          <Dialog open={open} onClose={handleClose}>
            <DialogActions>
              <Container>
                {token ? (
                  <div>
                    <TextField
                      id="outlined-multiline-static"
                      label="Введите название команды"
                      multiline
                      rows={1}
                      value={text}
                      onChange={handleAddName}
                      variant="outlined"
                    />
                    <Button
                      onClick={handleClose}
                      variant="contained"
                      color="primary"
                    >
                      Создать команду
                    </Button>
                    <div>
                      <TextField
                        id="outlined-multiline-static"
                        label="Вставте ссылку аватарки"
                        multiline
                        rows={1}
                        value={image}
                        onChange={handleAddImage}
                        variant="outlined"
                      />
                    </div>
                  </div>
                ) : (
                  <h3>
                    Вам необходимо <a href="/sign-in">авторизоваться...</a>
                  </h3>
                )}
              </Container>
              <Button onClick={handleClose} autoFocus>
                Закрыть
              </Button>
            </DialogActions>
          </Dialog>
        </div>
      </Box>
      <Box>
        {token ? (
          <Grid container className={classes.main} spacing={5}>
            {loadTeam?.map((item) => {
              return (
                <Grid item xs={3}>
                  <NavLink to={`/my-teams/${item?._id}`}>
                    <Box variant="outlined" className={classes.inner}>
                      <Box className={classes.image}>
                        <img className={classes.image} src={item?.image} />
                      </Box>
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
