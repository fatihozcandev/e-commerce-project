import * as clientActions from "../actions/clientActions";

const initialState = {
  user: {}, //all about user
  addressList: {}, //Object Array,address list of the user
  creditCards: {}, //Object Array,credit card list of the user
  theme: "",
  language: "",
  roles: {
    roles: [],
    loading: false,
    error: null,
  },
};

export default function clientReducer(state = initialState, action) {
  switch (action.type) {
    case clientActions.FETCH_ROLES_REQUEST:
      return {
        ...state,
        roles: {
          ...state.roles,
          loading: true,
          error: null,
        },
      };
    case clientActions.FETCH_ROLES_SUCCESS:
      return {
        ...state,
        roles: {
          ...state.roles,
          loading: false,
          roles: action.payload,
        },
      };
    case clientActions.FETCH_ROLES_FAILURE:
      return {
        ...state,
        roles: {
          ...state.roles,
          loading: false,
          error: action.payload,
        },
      };
    case clientActions.SET_USER:
      return state;
    case clientActions.SET_ROLES:
      return state;
    case clientActions.SET_THEME:
      return state;
    case clientActions.SET_LANGUAGE:
      return state;

    default:
      return state;
  }
}
