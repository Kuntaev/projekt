import React, { useState } from 'react';
import { Button, Container, TextField } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { addImage, addTeam } from '../../redux/features/Team';

const Teams = () => {
  const dispatch = useDispatch();

  const [text, setText] = useState("");

  const handleAddName = (e) => {
    setText(e.target.value);
  };

  const handleAddImage = async (e) => {
    await dispatch(addImage(e));
  };

  const handleAddTeam = () => {
    dispatch(addTeam(text))
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
        {/*<Button onChange={handleAddImage} variant="contained">*/}
        {/*  <input*/}
        {/*    accept="image/*"*/}
        {/*    id="contained-button-file"*/}
        {/*    multiple*/}
        {/*    type="file"*/}
        {/*    onChange={handleAddImage}*/}
        {/*  />*/}
        {/*</Button>*/}
      </div>
    </Container>
  );
};

export default Teams;