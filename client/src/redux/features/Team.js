const initialState = {
  loadTeam: [],
};

export function team(state = initialState, action) {
  switch (action.type) {
    case "load/team/fulfilled":
      return {
        ...state,
        loadTeam: action.payload
      }

    case "add/team/fulfilled":
      return {
        ...state,
        loadTeam: action.payload.data
      }
    default:
      return state;
  }
}

export const loadingTeams = () => {
  return async (dispatch) => {
   await fetch("http://localhost:3013/team")
      .then((res) => res.json())
      .then((data) => {
        dispatch({ type: "load/team/fulfilled", payload:  data });
      });
  };
};

export const addTeam = ({text}) => {
  return async (dispatch) => {
    await fetch("http://localhost:3013/team", {
      method: "POST",
      headers:{
        "Content-type":"application/json"
      },
      body:JSON.stringify({
        name:text
      })
    })
    .then((res) => res.json())
    .then((data) => {
      dispatch({type: "add/team/fulfilled", payload: { data, text }})
    })
  }
}
