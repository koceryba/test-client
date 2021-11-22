import * as Styled from "./styled";

function Suggestions({suggestionList}) {
  return (
    <Styled.SuggestionWrap>
      {
        suggestionList.map(suggestion => (
          <Styled.Suggestion key={suggestion.id}>{suggestion.text}</Styled.Suggestion>
        ))
      }
    </Styled.SuggestionWrap>
  );
}

export default Suggestions;
