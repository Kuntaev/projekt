const initialState = {
  events: [],
  loading: false,
};

export const eventsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "load/events/fulfilled":
      return {
        ...state,
        events: action.payload,
      };
    case "add/events/fulfilled":
      return {
        ...state,
        events: [action.payload, ...state.events],
      };
    case "add/events/rejected":
      return {
        ...state,
        error: [action.payload, ...state.events],
      };
    case "events/delete/pending":
      return {
        ...state,
        loading: true,
      };

    case "events/delete/fulfilled":
      return {
        ...state,
        events: state.events.filter((e) => {
          return e._id !== action.payload;
        }),
      };
    default:
      return state;
  }
};

export const loadEvents = () => {
  return async (dispatch) => {
    const response = await fetch("/events");
    const json = await response.json();

    dispatch({ type: "load/events/fulfilled", payload: json });
  };
};

export const addEvents = (name, width, time, date, longs) => {
  return async (dispatch, getState) => {
    dispatch({ type: "add/events/pending" });
    const state = getState();

    const response = await fetch(`/events`, {
      method: "POST",
      body: JSON.stringify({
        name: name,
        width: width,
        time: time,
        date: date,
        longs: longs,
      }),
      headers: {
        Authorization: `Bearer ${state.captain.token}`,
        "Content-type": "application/json",
      },
    });
    const json = await response.json();
    if (json.error) {
      dispatch({ type: "add/events/rejected", payload: json });
    } else {
      dispatch({
        type: "add/events/fulfilled",
        payload: json,
      });
    }
  };
};

export const deleteEvents = (id) => (dispatch) => {
  dispatch({ type: "events/delete/pending", payload: id });
  fetch(`/events/${id}`, {
    method: "DELETE",
  })
    .then((res) => res.json())
    .then((data) => {
      dispatch({ type: "events/delete/fulfilled", payload: id });
    });
};
