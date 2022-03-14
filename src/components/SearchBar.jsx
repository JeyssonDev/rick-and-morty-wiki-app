import '../styles/SearchBar.css';
import React, { useState } from 'react';
import useFetch from '../hooks/useFetch';
import useInputField from '../hooks/useInputField';
import { getURL } from '../helpers/getURL';
import TextInput from './TextInput';
import SelectInput from './SelectInput';
import SuggestionsList from './SuggestionsList';
import { handleOnSubmitId } from '../helpers/handleEvents';

const initialInputData = {
   searchBy: 'id',
   searchBar: '',
};

const SearchBar = ({ dispatch }) => {
   const {
      inputData,
      handleChange,
      handleResetOnSelect,
      handleOnFocus,
      handleOnSelectResult,
   } = useInputField(initialInputData);
   const url = getURL(inputData);
   const { state } = useFetch(url);
   const [isVisible, setIsVisible] = useState(false);

   return (
      <div className='SearchBarComponent'>
         <form
            onSubmit={(e) => handleOnSubmitId(e, inputData, state, dispatch)}
            className='search-bar-container'
         >
            <div className='select-container'>
               <SelectInput
                  name='searchBy'
                  value={inputData.searchBy}
                  handleResetOnSelect={handleResetOnSelect}
               />
            </div>
            <TextInput
               name='searchBar'
               placeholder={
                  inputData.searchBy === 'id'
                     ? 'Type the location id (1-126)'
                     : 'Type the location name'
               }
               value={inputData.searchBar}
               visibility={{ inputData, setIsVisible }}
               handleOnFocus={handleOnFocus}
               handleChange={handleChange}
            />
            <button
               type='submit'
               onClick={(e) => handleOnSubmitId(e, inputData, state, dispatch)}
               className='button submit-buttton'
            >
               <i className='fa-solid fa-magnifying-glass'></i>
            </button>
         </form>

         {isVisible && (
            <SuggestionsList
               dispatch={dispatch}
               setIsVisible={setIsVisible}
               suggestions={state.data?.results}
               loading={state.isLoading}
               error={state.err}
               handleOnSelectResult={handleOnSelectResult}
            />
         )}

         {/* {state.data && inputData.searchBy === 'name' ? (
            <SuggestionsList
               dispatch={dispatch}
               suggestions={state.data.results}
               handleOnSelectResult={handleOnSelectResult}
            />
         ) : null} */}
      </div>
   );
};

export default SearchBar;
