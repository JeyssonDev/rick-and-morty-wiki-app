import React from 'react';
import { handleOnSubmitName } from '../helpers/handleEvents';

const Suggestion = ({
   dispatch,
   setIsVisible,
   suggestion,
   handleOnSelectResult,
}) => {
   return (
      <>
         <li
            className='suggestion'
            onClick={(e) => {
               handleOnSubmitName(suggestion, dispatch);
               handleOnSelectResult(e, 'searchBar');
               setIsVisible(false);
            }}
         >
            {suggestion.name}
         </li>
      </>
   );
};

export default Suggestion;
