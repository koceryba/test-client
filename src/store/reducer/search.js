import {
  SET_SEARCH_RESULT,
} from '../const/search'

const initialState = {
  searchList: []
};

export default function search(state = initialState, action) {
  switch (action.type) {
    case SET_SEARCH_RESULT:
      return {
        ...state,
        searchList: action.data,
      };
    default:
      return state
  }
}