import '../styles/Banner.css';
import React from 'react';
import SearchBar from './SearchBar';

const Banner = ({ dispatch }) => {
   return (
      <div className='BannerComponent'>
         <h1 className='wiki-title'>R&M Wiki</h1>
         <SearchBar dispatch={dispatch} />
      </div>
   );
};

export default Banner;
