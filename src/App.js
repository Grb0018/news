import './App.css';
import Home from '../src/Pages/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Technology from './Pages/Technology';
import No_page from './Pages/404';
import Business from './Pages/Business';
import Health from './Pages/Health';
import Sports from './Pages/Sports';
import Search_page from './Pages/Search_page';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      <Route index element={<Home />}/>
      <Route path='/technology' element={<Technology />}/>
      <Route path='/business' element={<Business />}/>
      <Route path='/health' element={<Health />}/>
      <Route path='/sports' element={<Sports />}/>
      <Route path='/search/:q' element={<Search_page />}/>
      <Route path='*' element={<No_page />}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
