import { put, call, takeLeading } from 'redux-saga/effects';
import axios from 'axios';
import config from 'react-global-configuration';

import { setSearchResult } from '../action/search';
import { GET_SEARCH_RESULT } from '../const/search';

const API_HOST = config.get('apiHost');

const apiSearchList = async (data) => {
  const text = data.search;
  return await axios.get(`${API_HOST}/search?text=${text}`)
    .then(res => res.data.data);
};

export function* getSearchResult(text) {
  const result = yield call(apiSearchList, text);
  yield put(setSearchResult(result));
}

const leades =[
  takeLeading(GET_SEARCH_RESULT, getSearchResult)
];
export default leades;
