import React, { useEffect, useState } from "react";
import { addTeam, loadingTeams } from "../../redux/features/Team";
import { useDispatch, useSelector } from "react-redux";

const MyTeam = () => {
  const [text, setText] = useState("")
  const [img, setImg] = useState("")
  const { loadTeam } = useSelector((state) => state.team);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadingTeams());
  }, []);

  const handleAddTeam = () => {
    dispatch(addTeam({text, img}))
  }
  

  return(
    <>
      <div>
        Название команды:
        <input type="text" value={text} onChange={(e) => setText(e.target.value)}/>
        <button onClick={handleAddTeam}>Добавить</button>
      </div>
      <br/>
      <div>
        <b>Команды</b>
        {loadTeam.map((item)=> {
          return(
            <>
            <div>
              <img src={item.image}/>
              {item.name}
            </div>
            </>
          )
        })}
      </div></>
  )
};

export default MyTeam;
