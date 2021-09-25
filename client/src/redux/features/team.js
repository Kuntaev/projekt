const initialState = {
  loadTeam: [],
  token:localStorage.getItem("token"),
  loading:null
};

export function team(state = initialState, action) {
  switch (action.type) {
    case "load/team/fulfilled":
      return {
        ...state,
        loadTeam: action.payload,
      };

    case "add/team/fulfilled":
      return {
        ...state,
        loadTeam: [...state.loadTeam, action.payload],
      };
    case 'add/team/rejected':
      return {
        ...state,
        error:action.payload.error
      }
    case "one/team/fulfilled":
      return {
        ...state,
        loadOneT: action.payload
      }
    default:
      return state;
  }
}

export const loadingTeams = () => {
  return async (dispatch) => {
    await fetch("/team")
      .then((res) => res.json())
      .then((data) => {
        dispatch({ type: "load/team/fulfilled", payload: data });
      });
  };
};

export const loadOneTeam = (id) => {
  console.log(id)
  return async (dispatch) => {
    await fetch(`/team/${id}`)
    .then((res) => res.json())
    .then((data) => {
      dispatch({type: "one/team/fulfilled", payload: data})
    })
  }
}

export const addTeam = (text, image) => {
  return async (dispatch, getState) => {
    dispatch({ type: "add/team/pending" });

    const state = getState()
    const response = await fetch(`/team`, {
      method: "POST",

      body: JSON.stringify({
        name: text,
        image: image,
      }),
      headers: {
        // Authorization:`Bearer ${state.team.token}`
        "Content-type": "application/json"
        },
    });
    const json = await response.json();

    if (json.error) {
      dispatch({type:'add/team/rejected', payload:json})
    }else {
      dispatch({
        type: "add/team/fulfilled",
        payload: json,
      });
    }
  };
};
