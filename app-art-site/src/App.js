import './Styles/App.css';
import { Route, Routes, Links } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Artists from './components/Artists';
import Collections from './components/Collections';
import Store from './components/Store';
import Auctions from './components/Auctions';
import Events from './components/Events';

function App() {
  return (
    <div className="App">
      <Header/>
        <Routes>
            <Route path='/Store' element={<Store/>} />
            <Route path='/artists' element={<Artists/>} />
            <Route path='/collections' element={<Collections/>} />
            <Route path='/auctions' element={<Auctions/>} />
            <Route path='/events' element={<Events/>} />
        </Routes>
      <Footer/>
    </div>
  );
}

export default App;
