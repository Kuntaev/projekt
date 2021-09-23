import React, { useState } from 'react';
import { Button, Container, TextField } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { addTeam } from '../../redux/features/Team';
import { Link, NavLink } from 'react-router-dom';

const MyTeam = () => {
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

  const handleAddTeam = () => {
    dispatch(addTeam(text, image));
    setText("")
    setImage("")
  }

  return (
    <Container>
      {token?
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
        <Button onClick={handleAddTeam} variant="contained" color="primary">
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
   );
};

export default MyTeam;