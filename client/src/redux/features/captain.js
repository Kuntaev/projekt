const initialState = {
  loading: false,
  message: null,
  registrationError: null,
  authorizationError: null,
  captain: [],
  candidate: null,
  token: localStorage.getItem("token"),
};

export default function captainReducer(state = initialState, action) {
  switch (action.type) {
    case "caption/sign-up/pending":
      return {
        ...state,
        loading: true,
        registrationError: null,
      };
    case "captain/sign-up/rejected":
      return {
        ...state,
        loading: false,
        registrationError: action.registrationError,
      };
    case "captain/sign-up/fulfilled":
      return {
        ...state,
        loading: false,
        registrationError: null,
        message: action.payload.message,
      };

    case "captain/sign-in/pending":
      return {
        ...state,
        loading: true,
        authorizationError: null,
      };
    case "captain/sign-in/rejected":
      return {
        ...state,
        loading: false,
        authorizationError: action.authorizationError,
      };
    case "captain/sign-in/fulfilled":
      return {
        ...state,
        loading: false,
        authorizationError: null,
        token: action.payload.token,
        candidate: action.payload.candidate,
      };

    case "captain/load/pending":
      return {
        ...state,
        loading: true,
        error: null,
      };
    case "captain/load/rejected":
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    case "captain/load/fulfilled":
      console.log(action.payload);
      return {
        ...state,
        loading: false,
        captain: action.payload,
      };

    case "captain/output/fulfilled":
      return {
        ...state,
        token: null,
      };

    case "captain/delete/pending":
      return {
        ...state,
        loading: true,
      };
    case "captain/delete/rejected":
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    case "captain/delete/fulfilled":
      return {
        ...state,
        loading: false,
        token: null,
      };
    case "avatar/create/fulfilled":
      return {
        ...state,
        loading: false,
        captain: {
          ...state.captain,
          avatar: action.payload,
        },
      };

    case "captain/edit/pending":
      return {
        ...state,
        loading: true,
      };
    case "captain/edit/fulfilled":
      return {
        ...state,
        captain: action.payload,
        loading: false,
      };

    default:
      return state;
  }
}

export const registrationCaptain = (data) => {
  return async (dispatch) => {
    dispatch({ type: "caption/sign-up/pending" });

    const response = await fetch("http://localhost:3013/registration", {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-type": "application/json" },
    });
    const json = await response.json();

    if (json.registrationError) {
      dispatch({
        type: "captain/sign-up/rejected",
        registrationError: json.registrationError,
      });
    } else {
      dispatch({ type: "captain/sign-up/fulfilled", payload: json });
    }
  };
};

export const authorizationCaptain = (data) => {
  return async (dispatch) => {
    dispatch({ type: "captain/sign-in/pending" });
    const response = await fetch("http://localhost:3013/authorization", {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-type": "application/json" },
    });
    const json = await response.json();
    if (json.authorizationError) {
      dispatch({
        type: "captain/sign-in/rejected",
        authorizationError: json.authorizationError,
      });
      throw new Error(json.authorizationError);
    } else {
      dispatch({ type: "captain/sign-in/fulfilled", payload: json });

      localStorage.setItem("token", json.token);
    }
  };
};

export const getAuthorizationCaptain = () => {
  return async (dispatch, getState) => {
    dispatch({ type: "captain/load/pending" });
    const state = getState();
    const response = await fetch("http://localhost:3013/captain/personal", {
      headers: {
        Authorization: `Bearer ${state.captain.token}`,
      },
    });
    const json = await response.json();
    if (json.error) {
      dispatch({ type: "captain/load/rejected", error: json.error });
    } else {
      dispatch({ type: "captain/load/fulfilled", payload: json });
    }
  };
};

export const outputCaptain = () => {
  return async (dispatch) => {
    dispatch({ type: "captain/output/fulfilled" });
    localStorage.clear();
  };
};

export const uploadAvatar = (file) => {
  return async (dispatch, getState) => {
    const state = getState();
    try {
      const formData = new FormData();
      formData.append("file", file);
      const response = await fetch(
        "http://localhost:3013/captain/personal/avatar",
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${state.captain.token}`,
          },
          body: formData,
        }
      );
      const json = await response.json();
      dispatch({ type: "avatar/create/fulfilled", payload: json.avatar });
    } catch (e) {
      console.log(e.message);
    }
  };
};

export const deleteAccount = () => {
  return async (dispatch, getState) => {
    dispatch({ type: "captain/delete/pending" });
    const state = getState();
    const response = await fetch("http://localhost:3013/captain/delete", {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${state.captain.token}`,
      },
    });
    const json = response.json();
    if (json.error) {
      dispatch({ type: "captain/delete/rejected", payload: json.error });
    } else {
      dispatch({ type: "captain/delete/fulfilled", payload: json });
      localStorage.clear();
    }
  };
};

export const editCaptainById = (data) => {
  return async (dispatch, getState) => {
    const state = getState();
    dispatch({ type: "captain/edit/pending" });
    const response = await fetch("http://localhost:3013/captain/profile/edit", {
      method: "PATCH",
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${state.captain.token}`,
      },
      body: JSON.stringify(data),
    });
    const json = await response.json();
    dispatch({ type: "captain/edit/fulfilled", payload: json });
  };
};
