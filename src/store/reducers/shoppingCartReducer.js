import * as shoppingCartActions from "../actions/shoppingCartActions";

const initialState = {
  cart: [], //{ count: 1, product: { id: "1235", name: "Product 1", price: 10.00 } },
  payment: {},
  address: {},
};

function shoppingCartReducer(state = initialState, action) {
  switch (action.type) {
    case shoppingCartActions.SET_CART:
      return { ...state, cart: action.payload };
    case shoppingCartActions.SET_PAYMENT:
      return { ...state, payment: action.payload };
    case shoppingCartActions.SET_ADDRESS:
      return { ...state, address: action.payload };
    default:
      return state;
  }
}

export default shoppingCartReducer;
