import { useState } from 'react';

const useInputField = (inputInitialState) => {
   const [inputData, setInputData] = useState(inputInitialState);

   const handleChange = (e) =>
      setInputData((previousInputData) => ({
         ...previousInputData,
         [e.target.name]: e.target.value,
      }));

   const handleChecked = (e) =>
      setInputData((previousInputData) => ({
         ...previousInputData,
         [e.target.name]: e.target.checked,
      }));

   const handleResetOnSelect = (e) =>
      setInputData((previousInputData) => {
         if (previousInputData[e.target.name] !== e.target.value)
            return { ...inputInitialState, [e.target.name]: e.target.value };
      });

   const handleOnFocus = (e) =>
      setInputData((previousInputData) => {
         if (previousInputData[e.target.name])
            return { ...previousInputData, [e.target.name]: '' };
         return previousInputData;
      });

   const handleOnSelectResult = (e, property) => {
      setInputData((previousInputData) => {
         return { ...previousInputData, [property]: e.target.textContent };
      });
   };

   return {
      inputData,
      handleChange,
      handleChecked,
      handleResetOnSelect,
      handleOnFocus,
      handleOnSelectResult,
   };
};

export default useInputField;
