import axios from "axios";

export const SET_USER = "SET_USER";
export const SET_ROLES = "SET_ROLES";
export const SET_THEME = "SET_THEME";
export const SET_LANGUAGE = "SET_LANGUAGE";
export const FETCH_ROLES_REQUEST = "FETCH_ROLES_REQUEST";
export const FETCH_ROLES_SUCCESS = "FETCH_ROLES_SUCCESS";
export const FETCH_ROLES_FAILURE = "FETCH_ROLES_FAILURE";

export const setUser = (user) => ({
  type: SET_USER,
  payload: user,
});

export const setRoles = (roles) => ({
  type: SET_ROLES,
  payload: roles,
});

export const setTheme = (theme) => ({
  type: SET_THEME,
  payload: theme,
});

export const setLanguage = (language) => ({
  type: SET_LANGUAGE,
  payload: language,
});

export const fetchRoles = () => {
  return (dispatch) => {
    dispatch({ type: FETCH_ROLES_REQUEST });

    axios
      .get("https://workintech-fe-ecommerce.onrender.com/roles")
      .then((response) => {
        dispatch({
          type: FETCH_ROLES_SUCCESS,
          payload: response.data.reverse(),
        });
      })
      .catch((error) => {
        dispatch({
          type: FETCH_ROLES_FAILURE,
          payload: error.message,
        });
      });
  };
};
