const initialState = {
  loadTeam: [],
  image: [],
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
        loadTeam: action.payload.data,
      };
    case "team/image/fulfilled":
      return {
        ...state,
        image: action.payload.image,
      };
    default:
      return state;
  }
}

export const loadingTeams = () => {
  return async (dispatch) => {
    await fetch("http://localhost:3013/team")
      .then((res) => res.json())
      .then((data) => {
        dispatch({ type: "load/team/fulfilled", payload: data });
      });
  };
};

export const addTeam = (
  text,
) => {
  return async (dispatch, getState) => {
    dispatch({ type: "add/team/pending" });

    const state = getState();

    const response = await fetch(`http://localhost:3013/team`, {
      method: "POST",

      body: JSON.stringify({
        name: text,
      }),
      headers: {
        "Content-type": "application/json",
      },
    });
    const json = await response.json();

    dispatch({
      type: "add/team/fulfilled",
      payload: json,
    });
    window.location.reload();
  };
};

export const addImage = (e) => {
  return async (dispatch) => {
    dispatch({ type: "product/image/pending" });

    const { files } = e.target;
    const data = new FormData();
    data.append("image", files[0]);

    const response = await fetch("http://localhost:3013/team/image", {
      method: "POST",
      body: data,
    });

    const json = await response.json();

    dispatch({
      type: "product/image/fulfilled",
      payload: json,
    });
  };
};
