import React, { useEffect, useState } from 'react';
import {Box, Button, Dialog, DialogActions, Paper, TextField} from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { editTeam, loadOneMyTeam } from '../../redux/features/team';
import { makeStyles } from '@material-ui/core/styles';
import HeaderBlack from '../header/HeaderBlack';
import Players from '../player/Players';


const useStyles = makeStyles({
  main: {
    display: 'flex'
  },
  image: {
    marginTop: 10,
    marginLeft: 150,
    width: 400,
  },
  teamName: {
    fontSize: 40,
    marginLeft: 250
  },
  captain: {
    display: 'flex',
    color: 'red',
    marginLeft: 300
  },
  name: {
    marginLeft: 350,
    fontSize: 40,
    justifyContent: 'space-between',
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
  },
  buttons: {
    marginLeft: 220,
    marginTop: 60
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
    <>
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
      <Box className={classes.main}>
        <Box>
          <img className={classes.image} src={loadOneMyT?.image}/>
          <Typography className={classes.teamName}>
            {loadOneMyT?.name}
          </Typography>
        </Box>
        <Box className={classes.name}>
          <Players/>
        </Box>
      </Box>
      <Box className={classes.buttons}>
        <Button onClick={handleClickEdit}>
          Изменить
        </Button>
        <Button onClick={handleClickAdd}>
          Добавить игрока
        </Button>
      </Box>
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
    </div>
    </>
  );
};

export default MyTeamOne;