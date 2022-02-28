import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadMyTeam, loadOneTeam } from "../../redux/features/team";
import { Button, Box, Typography, useMediaQuery } from "@material-ui/core";
import { NavLink } from "react-router-dom";
import { HeaderBlack } from "../../components/header-black";
import CreateTeam from "../../components/my-team/CreateTeam";
import useStyles from "../../components/my-team/StyleMyTeam";
import { CardMyTeam } from "../../components/card-my-team";
import classNames from "classnames";
import "./myTeam.css";

export const MyTeam = () => {
  const dispatch = useDispatch();
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);

  const token = useSelector((state) => state.captain.token);

  const isActive = useMediaQuery("(max-width: 640px)");

  const btn = classNames(!isActive ? classes.btn : "my-team-btn");
  const teamBox = classNames(!isActive ? classes.teamBox : "my-team-teamBox");
  const auth = classNames(!isActive ? classes.auth : "my-team-createTeam");
  const text = classNames(!isActive ? classes.text : "my-team-text");
  const createTeam = classNames(
    !isActive ? classes.createTeam : "my-team-createTeam"
  );
  const link = classNames(!isActive ? classes.link : "my-team-link");
  const content = classNames(!isActive ? classes.content : "my-team-content");

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
        <Box className={btn}>
          <Box className={teamBox}>
            <Box className={content}>
              <p className={text}>
                - Создай свою команду, добавляй игроков и играйте против команд
                поблизости. <br />
                - Регистрируй своих друзей и играйте вместе в одной команде,
                побеждайте других! <br />- Создавайте события, выбирайте место,
                где будете играть, назначайте время и приглашайте других команд,
                играйте друг против друга. Ты можешь создать несколько команд, и
                участвовать в играх с разными командами.
              </p>
              <Box>
                {token ? (
                  <button className={createTeam} onClick={handleClickOpen}>
                    <p>Создать команду</p>
                  </button>
                ) : (
                  <button className={auth}>
                    <NavLink to="/sign-in" className={link}>
                      Авторизоваться
                    </NavLink>
                  </button>
                )}
              </Box>
            </Box>
          </Box>
        </Box>
        <CreateTeam state={open} onClose={handleClickOpen} />
      </Box>
      <CardMyTeam />
    </>
  );
};
