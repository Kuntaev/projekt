import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadMyTeam, loadOneTeam } from "../../redux/features/team";
import { Button, Box, Typography } from "@material-ui/core";
import { NavLink } from "react-router-dom";
import HeaderBlack from "../header/HeaderBlack";
import CreateTeam from "./CreateTeam";
import useStyles from "./StyleMyTeam";
import CardMyTeam from "./CardMyTeam";

const MyTeam = () => {
  const dispatch = useDispatch();
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);

  const token = useSelector((state) => state.captain.token);

  useEffect(() => {
    dispatch(loadMyTeam());
  }, []);

  const handleClickOpen = (id) => {
    setOpen(!open);
    dispatch(loadOneTeam(id));
  };

  return (
    <>
      <HeaderBlack />
      <Box>
        <Box className={classes.btn}>
          <Box className={classes.teamBox}></Box>
          <Box>
            <Typography className={classes.text}>
              Создай свою команду, добавляй игроков и играйте против команд
              поблизости. <br />
              Регистрируй своих друзей и играйте вместе в одной команде,
              побеждайте других! <br />
              Создавайте события, выбирайте место, где будете играть, назначайте
              время и приглашайте <br />
              других команд, играйте друг против друга. Ты можешь создать
              несколько команд, и участвовать в <br />
              играх с разными командами.
            </Typography>
            <Box>
              {token ? (
                <Button
                  className={classes.createTeam}
                  variant="outlined"
                  onClick={handleClickOpen}
                >
                  Создать команду
                </Button>
              ) : (
                <Button className={classes.createTeam} variant="outlined">
                  <NavLink to="/sign-in" className={classes.link}>
                    Авторизоваться
                  </NavLink>
                </Button>
              )}
            </Box>
          </Box>
        </Box>
        <CreateTeam state={open} onClose={handleClickOpen} />
      </Box>
      <CardMyTeam />
    </>
  );
};

export default MyTeam;
