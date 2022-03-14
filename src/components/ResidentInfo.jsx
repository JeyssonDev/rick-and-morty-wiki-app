import '../styles/ResidentInfo.css';
import React from 'react';
import useFetch from '../hooks/useFetch';
import { getColor } from '../helpers/getColor';

const ResidentInfo = ({ resident }) => {
   const { state } = useFetch(resident);

   return (
      <div className='ResidentInfoComponent card'>
         <figure className='image-container'>
            <img
               src={state.data?.image}
               alt={`${state.data?.name} profile`}
               className='image'
            />
         </figure>
         <div className='resident-info-container'>
            <h3 className='resident-name'>{state.data?.name}</h3>
            <p className='resident-info-text status-species'>
               <span
                  className='status-icon'
                  style={{ background: getColor(state.data?.status) }}
               ></span>
               {state.data?.status} | {state.data?.species}
            </p>
            <h4 className='subtitle-second origin'>Origin</h4>
            <p className='resident-info-text'>{state.data?.origin.name}</p>
            <h4 className='subtitle-second episodes'>Episodes where appear</h4>
            <p className='resident-info-text'>{state.data?.episode.length}</p>
         </div>
      </div>
   );
};

export default ResidentInfo;
