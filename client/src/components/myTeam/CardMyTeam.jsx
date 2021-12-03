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
} from "@material-ui/core";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteTeam, loadMyTeam } from "../../redux/features/team";
import useStyles from "./StyleMyTeam";

function CardMyTeam() {
  const dispatch = useDispatch();
  const classes = useStyles();

  const { myTeam } = useSelector((state) => state.team);
  const token = useSelector((state) => state.captain.token);

  useEffect(() => {
    dispatch(loadMyTeam());
  }, []);

  const handleDeleteTeam = (id) => {
    dispatch(deleteTeam(id));
  };

  return (
    <Box sx={{ mx: 18 }}>
      {token ? (
        <Box overflow={"auto"} className={classes.btn1}>
          {myTeam?.map((item) => {
            return (
              <Card className={classes.root}>
                <CardActionArea>
                  <NavLink
                    to={`/my-teams/${item?._id}`}
                    className={classes.link}
                  >
                    <CardMedia
                      className={classes.logo}
                      component="img"
                      alt="Contemplative Reptile"
                      image={item?.image}
                      height="180"
                      title="Contemplative Reptile"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        {item.name}
                      </Typography>
                    </CardContent>
                  </NavLink>
                </CardActionArea>
                <CardActions>
                  <Button
                    size="small"
                    color="primary"
                    onClick={() => handleDeleteTeam(item._id)}
                  >
                    Удалить
                  </Button>
                </CardActions>
              </Card>
            );
          })}
        </Box>
      ) : (
        ""
      )}
    </Box>
  );
}

export default CardMyTeam;
