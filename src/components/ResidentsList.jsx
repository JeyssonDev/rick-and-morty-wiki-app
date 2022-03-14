import '../styles/ResidentsList.css';
import React, { useEffect, useState } from 'react';
import ResidentInfo from './ResidentInfo';
import Pagination from './Pagination';
import Loading from './Loading';
import { DEFAULT_APP_CONFIG } from '../sample/config';

const initialPaginationInfo = {
   page: 1,
   offset: 0,
   elementsPerPage: DEFAULT_APP_CONFIG.elementsPerPage,
};

const ResidentsList = ({ residents, error, executeScroll }) => {
   const [pagination, setPagination] = useState(initialPaginationInfo);
   const pages = residents
      ? Math.ceil(residents.length / DEFAULT_APP_CONFIG.elementsPerPage)
      : 0;

   useEffect(() => {
      setPagination(initialPaginationInfo);
   }, [residents]);

   return (
      <div className='ResidentListComponent'>
         <h2 className='residents-title'>Residents</h2>
         <hr className='hr residents-hr' />
         {residents?.length === 0 && 'There are no residents to diplay!'}
         {residents ? (
            <>
               <div className='residents-container'>
                  {residents
                     .slice(
                        pagination.offset,
                        pagination.offset + pagination.elementsPerPage
                     )
                     .map((resident) => (
                        <ResidentInfo
                           key={resident.match(/(\d)+$/)[0]}
                           resident={resident}
                        />
                     ))}
               </div>
               <div className='pagination-section'>
                  {pages > 1
                     ? Array.from(Array(pages).keys(), (x) => x + 1).map(
                          (index) => (
                             <Pagination
                                key={index}
                                page={index}
                                elementsPerPage={pagination.elementsPerPage}
                                setPagination={setPagination}
                                executeScroll={executeScroll}
                             />
                          )
                       )
                     : null}
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

export default ResidentsList;
