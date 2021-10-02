const initialState = {
  player: []
}

export function player(state = initialState, action) {
  switch (action.type) {
    case "load/player/fulfilled":
      return {
        ...state,
        player: action.payload,
      };

    default:
      return state;
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