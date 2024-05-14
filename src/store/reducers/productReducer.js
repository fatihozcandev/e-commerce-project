import * as productActions from "../actions/productActions";

const initialState = {
  categories: {}, //{Object Array}
  productList: {}, //{Object Array}
  total: 0, //{Number} number of total products
  limit: 25, //{Number} | 25 by default product count on the page
  offset: 0, //{Number} | 0 by default for pagination
  filter: "", //{String}
  fetchState: "NOT_FETCHED", //{String} | "NOT_FETCHED" by default | one of "NOT_FETCHED" , "FETCHING", "FETCHED", "FAILED"
};

export default function productReducer(state = initialState, action) {
  switch (action.type) {
    case productActions.SET_CATEGORIES:
      return { ...state, categories: action.payload };
    case productActions.SET_PRODUCT_LIST:
      return { ...state, productList: action.payload };
    case productActions.SET_TOTAL:
      return { ...state, total: action.payload };
    case productActions.SET_FETCH_STATE:
      return { ...state, fetchState: action.payload };
    case productActions.SET_LIMIT:
      return { ...state, limit: action.payload };
    case productActions.SET_OFFSET:
      return { ...state, offset: action.payload };
    case productActions.SET_FILTER:
      return { ...state, filter: action.payload };
    default:
      return state;
  }
}
