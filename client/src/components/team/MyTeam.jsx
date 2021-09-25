import React, { useState } from 'react';
import { Container, TextField } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { addTeam, loadOneTeam } from '../../redux/features/team';
import { Button,
  Dialog,
  DialogActions,
} from '@material-ui/core';

const MyTeam = () => {

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = (id) => {
    setOpen(true);
    dispatch(loadOneTeam(id))
  };

  const handleClose = () => {
    setOpen(false);
    dispatch(addTeam(text, image));
    setText("")
    setImage("")
  };
  const dispatch = useDispatch();

  const [text, setText] = useState("");
  const [image, setImage] = useState("")

  const {token} = useSelector(state => state.captain);

  console.log(token)

  const avt = () => {

  }

  const handleAddName = (e) => {
    setText(e.target.value);
  };

  const handleAddImage = (e) => {
    setImage(e.target.value)
  }

  return (
    <>
      <Button variant="outlined" onClick={handleClickOpen}>
        Создать команду
      </Button>
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
      >
        <DialogActions>
          <Container>
            {token?
              <div >
                <TextField
                  id="outlined-multiline-static"
                  label="Введите название команды"
                  multiline
                  rows={1}
                  value={text}
                  onChange={handleAddName}
                  variant="outlined"
                />
                <Button onClick={handleClose} variant="contained" color="primary" >
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
              :
              <h3>Вам необходимо <a href="/sign-in">авторизоваться...</a></h3>
            }
          </Container>
          <Button onClick={handleClose} autoFocus>
            Закрыть
          </Button>
        </DialogActions>
      </Dialog>
    </div>
    </>
   );
};

export default MyTeam;