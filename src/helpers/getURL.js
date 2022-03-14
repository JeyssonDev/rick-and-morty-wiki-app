import { DEFAULT_APP_CONFIG } from '../sample/config';

export const getURL = (searchData) => {
   if (!searchData.searchBar) return null;
   if (searchData.searchBy === 'id')
      return `${DEFAULT_APP_CONFIG.baseLocationURL}/${searchData.searchBar}`;
   if (searchData.searchBy === 'name')
      return `${DEFAULT_APP_CONFIG.baseLocationURL}?name=${searchData.searchBar}`;
};
