import axios from 'axios';
import { useReducer, useEffect } from 'react';
import { TYPES } from '../actions/fetchActions';
import { fetchInitialState, fetchReducer } from '../reducers/fetchReducer';

const useFetch = (url) => {
   const [state, dispatch] = useReducer(fetchReducer, fetchInitialState);

   if (!url && state.data)
      dispatch({
         type: TYPES.ONCHANGESTATE,
         payload: { ...fetchInitialState, isLoading: false },
      });

   useEffect(() => {
      if (!url) return;

      let isMounted = true;

      axios
         .get(url)
         .then((res) => {
            if (isMounted)
               dispatch({ type: TYPES.ONSUCCESSFETCH, payload: res.data });
         })
         .catch((err) => {
            if (isMounted)
               dispatch({
                  type: TYPES.ONERRORFETCH,
                  payload: {
                     error: true,
                     errorName: err.name,
                     errorMessage: err.message,
                  },
               });
         });

      return () => (isMounted = false);
   }, [url]);

   return { state, dispatch };
};

export default useFetch;
