const initialState = {
    loading: false,
    message: null,
    registrationError: null,
    authorizationError: null,
    captain: null
}


export  default  function captainReducer(state = initialState, action) {
    switch (action.type) {
        case "caption/sign-up/pending":
            return {
                ...state,
                loading: true,
                registrationError: null
            }
        case "captain/sign-up/rejected":
            return {
                ...state,
                loading: false,
                registrationError: action.payload.registrationError,
            }
        case "captain/sign-up/fulfilled":
            return {
                ...state,
                loading: false,
                registrationError: null,
                message: action.payload.message
            }
        default:
            return state
    }
}




export  const  registrationCaptain = ({name, login, password}) => {
  return async (dispatch) => {
      dispatch({type: "caption/sign-up/pending"})
      const  response = await  fetch("http://localhost/registration", {
          method: "POST",
          body: JSON.stringify({login, password, name}),
          headers: { "Content-type": "application/json"}

      })
      const  json = await response.json()

      if (json.registrationError) {
          dispatch({ type: "captain/sign-up/rejected", registrationError: json.registrationError });
      } else {
          dispatch({ type: "captain/sign-up/fulfilled", payload: json });
      }

    }
}
