import { disconnect } from 'mongoose';

const initialState = {
  messagePlayer: null,
  errorPlayer: null,
  player: [],
  loadTeam: [],
  myTeam: [],
  token: localStorage.getItem("token"),
  loading: null,
};

export function team(state = initialState, action) {
  switch (action.type) {
    case "load/team/fulfilled":
      return {
        ...state,
        loadTeam: action.payload,
      };

    // case "add/team/pending":
    //   return {
    //     ...state,
    //     loading: true,
    //   };
    // case "add/team/rejected":
    //   return {
    //     ...state,
    //     loading: false,
    //     error: action.payload.error,
    //   };
    // case "add/team/fulfilled":
    //   return {
    //     ...state,
    //     loading: false,
    //     loadTeam: [...state.loadTeam, action.payload],
    //     myTeam: [...state.myTeam, action.payload],
    //   };

    case "add/team/fulfilled":
      return {
        ...state,
        loadTeam: [...state.loadTeam, action.payload],
        myTeam: [...state.myTeam, action.payload],
      };
    case "add/team/rejected":
      return {
        ...state,
        error: action.payload.error,
      };
    case "one/team/fulfilled":
      return {
        ...state,
        loadOneT: action.payload,
      };
    case "one/my-teams/fulfilled":
      return {
        ...state,
        loadOneMyT: action.payload,
      };
    case "load/my-teams/fulfilled":
      return {
        ...state,
        myTeam: action.payload,
      };
    case "delete/team/fulfilled":
      return {
        ...state,
        myTeam: state.myTeam.filter((item) => item._id !== action.payload),
      };
    case "add/image/fulfilled":
      return {
        ...state,
        loadTeam: [...state.loadTeam, action.payload],
        myTeam: [...state.myTeam, action.payload],
      }
    case "edit/team/fulfilled":
      return {
        ...state,
        myTeam: [...state.myTeam, action.payload],
      };

    case "player/receive/pending":
      return {
        ...state,
        loading: true,
      };
    case "player/receive/rejected":
      return {
        ...state,
        loading: false,
        errorPlayer: action.errorPlayer,
      };
    case "player/receive/fulfilled":
      return {
        ...state,
        loading: false,
        player: { ...state.player, ...action.payload },
      };

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
  return async (dispatch) => {
    await fetch(`/team/${id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        dispatch({ type: "one/team/fulfilled", payload: data });
      });
  };
};

export const loadOneMyTeam = (id) => {
  return async (dispatch) => {
    await fetch(`/my-teams/${id}`)
      .then((res) => res.json())
      .then((data) => {
        dispatch({ type: "one/my-teams/fulfilled", payload: data });
      });
  };
};

export const addTeam = (name, image) => {
  console.log(name)
  return async (dispatch, getState) => {
    dispatch({ type: "add/team/pending" });

    const state = getState();
    const response = await fetch(`/team`, {
      method: "POST",

      body: JSON.stringify({
        name: name,
        image: image,
      }),
      headers: {
        Authorization: `Bearer ${state.captain.token}`,
        "Content-type": "application/json",
      },
    });
    const json = await response.json();

    if (json.error) {
      dispatch({ type: "add/team/rejected", payload: json });
    } else {
      dispatch({
        type: "add/team/fulfilled",
        payload: json,
      });
    }
  };
};

export const addImage = (id) => {
  return async (dispatch) => {
    await fetch(`team/image/${id}`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      }
    })
    .then((res) => res.json())
    .then((data) => {
      dispatch({ type: "add/image/fulfilled", payload: data });
    });
  }
}

export const deleteTeam = (id) => {
  return async (dispatch, getState) => {
    const state = getState();
    await fetch(`team/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${state.captain.token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        dispatch({ type: "delete/team/fulfilled", payload: data });
      });
  };
};

export const editTeam = (id, text, image) => {
  return async (dispatch, getState) => {
    const state = getState();
    await fetch(`/my-teams/${id}`, {
      method: "PATCH",
      body: JSON.stringify({
        name: text,
        image: image,
      }),
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${state.captain.token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        dispatch({ type: "edit/team/fulfilled", payload: data });
      });
  };
};

export const loadMyTeam = () => {
  return async (dispatch, getState) => {
    const state = getState();
    await fetch("/my-teams", {
      headers: {
        Authorization: `Bearer ${state.captain.token}`,
        "Content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        dispatch({ type: "load/my-teams/fulfilled", payload: data });
      });
  };
};
