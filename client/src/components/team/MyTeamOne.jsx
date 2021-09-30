import React, { useEffect, useState } from 'react';
import { Box, Button, Dialog, DialogActions, TextField } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { addTeam, editTeam, loadOneMyTeam, loadOneTeam } from '../../redux/features/team';
import { makeStyles } from '@material-ui/core/styles';
import HeaderBlack from '../header/HeaderBlack';


const useStyles = makeStyles({
  image: {
    width: 200,
  },
  backgroudPaper:  {
    margin: "100px 400px 100px",
    width: "400px",
    height: "300px"
  },
  btn: {
    margin: "30px 0"
  }
})

const MyTeamOne = () => {

  const classes = useStyles()
  const [openAdd, setOpenAdd] = React.useState(false);
  const [open, setOpen] = React.useState(false);

  const [text, setText] = useState("");
  const [image, setImage] = useState("");

  const  [players, setPlayers] = useState({})

  const dispatch = useDispatch()
  const { loadOneMyT } = useSelector((state) => state.team )
  const {id} = useParams()

  useEffect(() => {
    dispatch(loadOneMyTeam(id));
  }, [id, dispatch]);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleAddClose = () => {
    setOpenAdd(false);

  };

  const handleEditName = (e) => {
    setText(e.target.value);
  };

  const handleEditImage = (e) => {
    setImage(e.target.value);
  };

  const handleClose = () => {
    setOpen(false);
    dispatch(editTeam(id, text, image));

  };

  const handleClickEdit = (id) => {
    setOpen(true);
    dispatch(editTeam(id, text, image))
  }
  const handleClickAdd = () => {
    setOpenAdd(true)
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
        <Button
          onClick={handleClose}
          variant="contained"
          color="primary"
        >
         Сохранить
        </Button>
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
        </DialogActions>
      </Dialog>
      <Box>
        <img className={classes.image} src={loadOneMyT?.image}/>
      </Box>
      <Typography>
        {loadOneMyT?.name}
      </Typography>
      <Button style={{backgroundColor: "primary"}} onClick={handleClickEdit}>
        Изменить
      </Button>


      <Dialog className={classes.backgroudPaper} open={openAdd} onClose={handleAddClose}>
        <DialogActions>
          <div>
            <TextField
              id="outlined-multiline-static"
              label="Введите имя игрока"
              multiline
              rows={1}

              variant="outlined"
            />
            <Box className={classes.btn}>
              <TextField
                id="outlined-multiline-static"
                label="Введите имя игрока"
                multiline
                rows={1}
                // value={image}
                // onChange={handleEditImage}
                variant="outlined"
              />
            </Box>
            <div>
              <Button
                label="Введите имя игрока"
                onClick={handleAddClose}
                variant="contained"
              >
                Добавить игрока
              </Button>
            </div>
          </div>
        </DialogActions>
      </Dialog>
      <Button onClick={handleClickAdd}>
        Добавить игрока
      </Button>
    </div>
  );
};

export default MyTeamOne;