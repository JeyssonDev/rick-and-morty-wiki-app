import React from 'react';
import { handleVisibility } from '../helpers/handleEvents';

const TextInput = ({
   name,
   placeholder,
   value,
   visibility,
   handleOnFocus,
   handleChange,
}) => {
   return (
      <>
         <input
            className={`text-input ${name}`}
            type='text'
            name={name}
            value={value}
            placeholder={placeholder}
            autoComplete='off'
            onFocus={handleOnFocus}
            onChange={(e) => {
               handleChange(e);
               handleVisibility(
                  e,
                  visibility.inputData,
                  visibility.setIsVisible
               );
            }}
            /* onBlur={(e) => {
               e.preventDefault();
               visibility.setIsVisible(false);
            }} */
         />
      </>
   );
};

export default TextInput;
