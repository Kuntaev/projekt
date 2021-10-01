import React, { useEffect, useState } from 'react';
import { Box, Button, Dialog, DialogActions, TextField } from '@material-ui/core';
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
  }
})

const MyTeamOne = () => {

  const classes = useStyles()

  const [open, setOpen] = React.useState(false);

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
      <Button>
        Добавить игрока
      </Button>
    </div>
  );
};

export default MyTeamOne;