import debounce from 'lodash/debounce';
import { useDispatch, useSelector } from "react-redux";
import { selectSearchList } from "../store/selector/search";
import Suggestions from '../suggestions';
import { getSearchResult } from "../store/action/search";

import * as Styled from './styled';

function Search() {
  const dispatch = useDispatch();

  const searchList = useSelector(selectSearchList);

  const handleSearchTerm = debounce((search) => {
    dispatch(getSearchResult(search));
  }, 500)

  return (
    <Styled.SearchWrap>
      <Styled.Search placeholder="Enter text..." onChange={e => handleSearchTerm(e.target.value)}/>
      <Suggestions suggestionList={searchList} />
    </Styled.SearchWrap>
  );
}

export default Search;