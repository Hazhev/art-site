import './Styles/App.css';
import { Route, Routes, Links, BrowserRouter } from 'react-router-dom';
import Header from './components/Main page/Header';
import Footer from './components/Main page/Footer';
import Artists from './components/Artists';
import Themes from './components/Themes';
import Collectioners from './components/Collectioners/Collectioners';
import Store from './components/Store/Store';
import Auctions from './components/Auctions/Auctions';
import Events from './components/Events page/Events';
import { useState } from 'react';
import Main from './components/Main page/Main';
import ScrollToTop from './ScrollToTop';
import StoreCardPage from './components/Store/StoreCardPage';

function App() {

    return (
        <div className="App">
            <ScrollToTop>
                <Header />
                <Routes>
                    <Route path='/' element={<Main />} />
                    <Route path='/store' element={<Store />} />
                    <Route path='/store/card' element={<StoreCardPage />} />
                    <Route path='/artists' element={<Artists />} />
                    <Route path='/themes' element={<Themes />} />
                    <Route path='/auctions' element={<Auctions />} />
                    <Route path='/events' element={<Events />} />
                    <Route path='/collectioners' element={<Collectioners />} />
                </Routes>
                <Footer />
            </ScrollToTop>
        </div>
    );
}

export default App;
