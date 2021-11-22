import {
  GET_SEARCH_RESULT,
  SET_SEARCH_RESULT
} from '../const/search';

export function getSearchResult(search) {
  return { type: GET_SEARCH_RESULT, search }
}
export function setSearchResult(data) {
  return { type: SET_SEARCH_RESULT, data }
}