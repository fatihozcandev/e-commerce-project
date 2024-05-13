import * as clientActions from '../actions/clientActions'

const initialState = {
    user: {}, //all about user
    addressList: {}, //Object Array,address list of the user
    creditCards: {}, //Object Array,credit card list of the user
    roles: {}, //Object Array,
    theme: "",
    language: "",

}

export default function clientReducer (state = initialState, action) => {
    switch (action.type) {

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
