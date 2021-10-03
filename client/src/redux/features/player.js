const initialState = {
  player: [],
  error: null,
}

export function player(state = initialState, action) {
  switch (action.type) {
    case "load/player/fulfilled":
      return {
        ...state,
        player: action.payload,
      };
    case "player/add/rejected":
      return {
        ...state,
        error: action.errorPlayer
      }
    case "player/add/fulfilled":
      return {
        ...state,
        player:  [...state.player, action.payload]
      }
    case "player/delete/fulfilled":
      return {
        ...state,
        player: state.player.filter((item) =>  item._id !== action.payload)
      }
    default:
      return state;
  }
}

export const  captainPlayerAdd = (data) => {
   return async (dispatch) => {
     dispatch({type: "player/add/pending"})
     const  response =  await  fetch("/player/add", {
       method: "POST",
       headers: {
         "Content-type": "application/json"
       },
       body: JSON.stringify(data)
     })
     const  json = await response.json()
     if(json.errorPlayer) {
       dispatch({type: "player/add/rejected", error: json.errorPlayer})
     } else {
       dispatch({type: "player/add/fulfilled", payload: json})
     }
   }
}

export const  playerDelete = (id) => {
  return async (dispatch) => {
    dispatch({type: "player/remove/pending"})
    const response = await fetch(`/player/delete/${id}`, {
      method: "DELETE",
    })
    const json = await  response.json()
    dispatch({type: "player/delete/fulfilled", payload: id})
  }
}

export const loadPlayers = (id) => {
  console.log(id)
  return async (dispatch) => {
    await fetch(`/players/team/${id}`)
    .then((res) => res.json())
    .then((data) => {
      dispatch({ type: "load/player/fulfilled", payload: data });
    });
  };
};