import './styles/App.css';
import { useRef } from 'react';
import useFetch from './hooks/useFetch';
import { DEFAULT_APP_CONFIG } from './sample/config';
import { randomNumberGenerator } from './helpers/generators';
import ResidentsList from './components/ResidentsList';
import LocationInfo from './components/LocationInfo';
import Banner from './components/Banner';

const randomId = randomNumberGenerator(DEFAULT_APP_CONFIG.locationsCount);
const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop);

function App() {
   const listRef = useRef(null);
   const executeScroll = () => scrollToRef(listRef);
   const { state, dispatch } = useFetch(
      `${DEFAULT_APP_CONFIG.baseLocationURL}/${randomId}`
   );

   return (
      <div className='App' ref={listRef}>
         <Banner dispatch={dispatch} />
         <LocationInfo location={state.data} error={state.err} />
         <ResidentsList
            residents={state.data?.residents}
            error={state.err}
            executeScroll={executeScroll}
         />
      </div>
   );
}

export default App;
