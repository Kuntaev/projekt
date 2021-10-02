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
     }
     dispatch({type: "player/add/fulfilled", payload: json})
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