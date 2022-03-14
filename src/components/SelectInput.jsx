import React from 'react';

const SelectInput = ({ name, value, handleResetOnSelect }) => {
   return (
      <>
         <select
            className={`select-input ${name}`}
            name={name}
            value={value}
            id={name}
            onChange={handleResetOnSelect}
         >
            <option className='select-input-option' value='id'>
               Id
            </option>
            <option className='select-input-option' value='name'>
               Name
            </option>
         </select>
      </>
   );
};

export default SelectInput;
