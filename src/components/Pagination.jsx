import '../styles/Pagination.css';
import React from 'react';
import { getOffset } from '../helpers/getOffset';

const Pagination = ({
   page,
   elementsPerPage,
   setPagination,
   executeScroll,
}) => {
   return (
      <button
         className='PaginationComponent'
         onClick={() => {
            executeScroll();
            setPagination({
               page,
               offset: getOffset(elementsPerPage, page),
               elementsPerPage,
            });
         }}
      >
         {page}
      </button>
   );
};

export default Pagination;
