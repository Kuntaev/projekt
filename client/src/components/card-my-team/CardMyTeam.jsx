import React, { useEffect } from "react";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
  useMediaQuery,
} from "@material-ui/core";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteTeam, loadMyTeam } from "../../redux/features/team";
import "./cardMyTeam.css";
import useStyles from "../my-team/StyleMyTeam";
import classNames from "classnames";

export const CardMyTeam = () => {
  const dispatch = useDispatch();
  const classes = useStyles();

  const { myTeam } = useSelector((state) => state.team);
  const token = useSelector((state) => state.captain.token);

  const isActive = useMediaQuery("(max-width: 640px)");

  const content = classNames(
    !isActive ? classes.cardContent : "card-team-main"
  );
  const btn1 = classNames(!isActive ? classes.btn1 : "card-team-btn1");
  const root = classNames(!isActive ? classes.root : "card-team-root");
  const link = classNames(!isActive ? classes.link : "card-team-link");
  const logo = classNames(!isActive ? classes.logo : "card-team-logo");
  const name = classNames(!isActive ? classes.nameTeam : "card-team-name");
  const deleted = classNames(!isActive ? classes.deleted : "card-team-delete");

  useEffect(() => {
    dispatch(loadMyTeam());
  }, []);

  const handleDeleteTeam = (id) => {
    dispatch(deleteTeam(id));
  };

  return (
    <Box className={content} overflow={"auto"}>
      {token ? (
        <Box className={btn1}>
          {myTeam.map((item) => {
            return (
              <Card className={root}>
                <CardActionArea>
                  <NavLink to={`/my-teams/${item?._id}`} className={link}>
                    <CardMedia
                      className={logo}
                      component="img"
                      alt="Contemplative Reptile"
                      image={item?.image}
                      height="180"
                      title="Contemplative Reptile"
                    />
                    <Box className={name}>
                      <Typography gutterBottom variant="h5" component="h2">
                        {item.name}
                      </Typography>
                    </Box>
                  </NavLink>
                </CardActionArea>
                <Box className={deleted}>
                  <Button
                    size="small"
                    color="primary"
                    onClick={() => handleDeleteTeam(item._id)}
                  >
                    Удалить
                  </Button>
                </Box>
              </Card>
            );
          })}
        </Box>
      ) : (
        ""
      )}
    </Box>
  );
};
