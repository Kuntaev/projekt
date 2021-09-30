const initialState = {
  events:[],
  loading:false
}

export const eventsReducer =(state=initialState,action)=> {
  switch (action.type){
    case "load/events/fulfilled":
      return {
        ...state,
        events: action.payload
      }
    case "add/team/fulfilled":
      console.log(action.payload)
      return {
        ...state,
        events: [action.payload, ...state.events]
      }
    case "events/delete/pending":
      return {
        ...state,
        loading: true
      }

    case "events/delete/fulfilled":
      return {
        ...state,
        events: state.events.filter((e) =>{
          return e._id !== action.payload})
      };
    default:
      return state
  }
}

export const loadEvents = () => {
  return async dispatch => {
    const response = await fetch("/events");
    const json = await response.json();

    dispatch({type:"load/events/fulfilled",payload:json})
  }
}

export const addEvents = (name, width, time, date, longs) => {
  return async (dispatch) => {
    dispatch({type: "add/event/pending"});

    const response = await fetch(`/events`, {
      method: "POST",
      body: JSON.stringify({
        name: name,
        width:width,
        time:time,
        date:date,
        longs:longs
      }),
      headers: {
        "Content-type": "application/json",
      },
    });
    const json = await response.json();
    dispatch({ type: "add/team/fulfilled", payload: json })
  }
}

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