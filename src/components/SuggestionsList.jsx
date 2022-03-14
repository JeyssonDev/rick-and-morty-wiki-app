import '../styles/SuggestionsList.css';
import React from 'react';
import Suggestion from './Suggestion';
import Loading from './Loading';

const SuggestionsList = ({
   dispatch,
   setIsVisible,
   suggestions,
   loading,
   error,
   handleOnSelectResult,
}) => {
   return (
      <div className='SuggestionsListComponent'>
         {loading && <Loading />}
         {suggestions && (
            <>
               <ul className='suggestions-list-container'>
                  {suggestions.map((suggestion) => (
                     <Suggestion
                        key={suggestion.id}
                        dispatch={dispatch}
                        setIsVisible={setIsVisible}
                        suggestion={suggestion}
                        handleOnSelectResult={handleOnSelectResult}
                     />
                  ))}
               </ul>
            </>
         )}
         {error?.error && 'There are no matches with this search'}
         {/* {suggestions ? (
            
         ) : (
            <Loading />
         )} */}
      </div>
   );
};

export default SuggestionsList;
