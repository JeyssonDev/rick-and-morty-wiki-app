import '../styles/Loading.css';
import React from 'react';
import loading from '../assets/gif/loading-two.gif';

const Loading = () => {
   return (
      <div className='LoadingComponent'>
         <figure className='loading-gif-container'>
            <img src={loading} alt='Loading' className='loading-gif' />
         </figure>
      </div>
   );
};

export default Loading;
