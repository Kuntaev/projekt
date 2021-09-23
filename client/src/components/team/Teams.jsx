import React, { useState } from 'react';
import { Button, Container, TextField } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { addTeam } from '../../redux/features/Team';

const Teams = () => {
  const dispatch = useDispatch();

  const [text, setText] = useState("");
  const [image, setImage] = useState("")

  const handleAddName = (e) => {
    setText(e.target.value);
  };

  const handleAddImage = (e) => {
    setImage(e.target.value)
  }

  const handleAddTeam = () => {
    dispatch(addTeam(text, image))
  }

  return (
    <Container>
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
        Добавить
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
    </Container>
  );
};

export default Teams;