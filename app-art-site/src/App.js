import './Styles/App.css';
import { Route, Routes, Links } from 'react-router-dom';
import Header from './components/Main page/Header';
import Footer from './components/Main page/Footer';
import Artists from './components/Artists';
import Collections from './components/Collections';
import Store from './components/Store/Store';
import Auctions from './components/Auctions/Auctions';
import Events from './components/Events';
import { useState } from 'react';
import Main from './components/Main page/Main';

function App() {
  
  return (
    <div className="App">
      <Header/>
        <Routes>
            <Route path='/' element={<Main/>} />
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
