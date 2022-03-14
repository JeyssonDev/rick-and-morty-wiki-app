import '../styles/LocationInfo.css';
import React from 'react';
import Loading from './Loading';

const LocationInfo = ({ location, error }) => {
   return (
      <div className='LocationInfoComponent'>
         {location ? (
            <>
               <div className='location-info-container'>
                  <h2 className='location-name'>{location?.name}</h2>
                  <div className='location-info'>
                     <p className='location-text-info type'>
                        <span className='subtitle'>
                           <b>Type: </b>
                           <br />
                        </span>
                        {location?.type}
                     </p>
                     <p className='location-text-info dimension'>
                        <span className='subtitle'>
                           <b>Dimension: </b>
                           <br />
                        </span>
                        {location?.dimension}
                     </p>
                     <p className='location-text-info population'>
                        <span className='subtitle'>
                           <b>Population: </b>
                           <br />
                        </span>
                        {location?.residents?.length}
                     </p>
                  </div>
               </div>
            </>
         ) : error?.error ? (
            'Something went wrong...'
         ) : (
            <Loading />
         )}
      </div>
   );
};

export default LocationInfo;
