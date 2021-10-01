import React, { useEffect, useState } from 'react';
import {Box, Button, Dialog, DialogActions, Paper, TextField} from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { editTeam, loadOneMyTeam } from '../../redux/features/team';
import { makeStyles } from '@material-ui/core/styles';
import HeaderBlack from '../header/HeaderBlack';


const useStyles = makeStyles({
  image: {
    width: 200,
  },
  button: {
    display: 'flex'
  },
  backgroudPaper: {
    margin: "100px 400px 100px",
    width: "400px",
    height: "300px",
  },
  btn: {
    margin: "30px 0",
  },
  paperPlayer: {
    textAlign: "center",
    backgroundColor: "rgba(101,101,105,0.28)",
    width: "300px",
    height: "160px"
  }
})

const MyTeamOne = () => {

  const classes = useStyles()

  const [open, setOpen] = React.useState(false);

  const [openAdd, setOpenAdd] = React.useState(false);
  const [players, setPlayers] = useState([]);
  const [player, setPlayer] = useState({name: "", lastname: ""})

  const [text, setText] = useState("");
  const [image, setImage] = useState("");

  const dispatch = useDispatch()
  const { loadOneMyT } = useSelector((state) => state.team )
  const {id} = useParams()

  useEffect(() => {
    dispatch(loadOneMyTeam(id));
  }, [id, dispatch, open]);

  useEffect(() => {
    dispatch(editTeam(id));
  }, []);


  const handleClickSave = () => {
    dispatch(editTeam(id, text, image));
  };

  const handleEditName = (e) => {
    setText(e.target.value);
  };

  const handleEditImage = (e) => {
    setImage(e.target.value);
  };

  const handleClose = () => {
    setOpen(false);

  };

  const handleClickEdit = (id) => {
    setOpen(true);
  }


  /////Addd

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClickAdd = () => {
    setOpenAdd(true);
  };
  const handlePlayerClose = () => {
    setOpenAdd(false)
  }
  const handleAddPlayer = (e) => {
    if(player.name === "" || player.lastname === "") {
      return null
    }   else {
      e.preventDefault();
      setPlayers([...players, {...player, id: Date.now()}]);
      setPlayer({name: "", lastname: ""})
    }
  }
  const handleAddClose = () => {
    setOpenAdd(false);
  }
const handlePlayerRemove = (id) => {
  setPlayers(players.filter( item => item.id !== id))
}

  return (
    <div>
      <HeaderBlack/>
      <Dialog open={open} onClose={handleClose}>
        <DialogActions>
          <div>
            <TextField
              id="outlined-multiline-static"
              label="Введите название команды"
              multiline
              rows={1}
              value={text}
              onChange={handleEditName}
              variant="outlined"
            />
            <div>
              <TextField
                id="outlined-multiline-static"
                label="Вставте ссылку аватарки"
                multiline
                rows={1}
                value={image}
                onChange={handleEditImage}
                variant="outlined"
              />
            </div>

          </div>
          <Box>
            <Button
              onClick={handleClickSave}
              variant="contained"
              color="primary"
            >
              Сохранить
            </Button>
            <Button
              onClick={handleClose}
              variant="contained"
              color="primary">
              Закрыть
            </Button>
          </Box>
        </DialogActions>
      </Dialog>
      <Box>
        <img className={classes.image} src={loadOneMyT?.image}/>
      </Box>
      <Typography>
        {loadOneMyT?.name}
      </Typography>
      <Button onClick={handleClickEdit}>
        Изменить
      </Button>
      <Button onClick={handleClickAdd}>
        Добавить игрока
      </Button>
      <Dialog
          className={classes.backgroudPaper}
          open={openAdd}
          onClose={handleAddClose}
      >
        <DialogActions>
          <div>
            <TextField
                value={player.name}
                onChange={(e) => setPlayer({...player, name: e.target.value})}
                id="outlined-multiline-static"
                label="Введите имя игрока"
                multiline
                rows={1}
                variant="outlined"
            />
            <Box className={classes.btn}>
              <TextField
                  value={player.lastname}
                  onChange={(e) => setPlayer({...player, lastname: e.target.value})}
                  id="outlined-multiline-static"
                  label="Введите имя игрока"
                  multiline
                  rows={1}
                  variant="outlined"
              />
            </Box>
            <div>
              <Button
                  label="Введите имя игрока"
                  onClick={handleAddPlayer}
                  variant="contained"
              >
                Добавить
              </Button>
              <Button
                  label="Введите имя игрока"
                  onClick={handlePlayerClose}
                  variant="contained"
              >
                Закрыть
              </Button>
            </div>
          </div>
        </DialogActions>
      </Dialog>
      <Box>
        <Typography component="h1">Список игроков команды</Typography>
        {players.map((item,) => {
          return (
              <>
                <Paper className={classes.paperPlayer} elevation={5}>
                  <Box>
                    <Typography component="div" variant="h6"><b>Имя игрока</b>: {item.name}</Typography>
                    <Typography component="div" variant="h6"><b>Фамилия игрока</b>: {item.lastname}</Typography>
                    <Button
                        onClick={ () => handlePlayerRemove(item.id)}
                        variant="contained"
                        style={{backgroundColor: "red"}}
                    >
                      Удалить
                    </Button>
                  </Box>
                </Paper>
              </>
          )
        })}
      </Box>
    </div>
  );
};

export default MyTeamOne;