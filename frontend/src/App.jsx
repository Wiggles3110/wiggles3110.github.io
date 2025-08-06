import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './css/App.css';
import {Routes, Route} from 'react-router-dom';
import Content from "./components/content";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Contacts from "./pages/Contacts";

function App() {
  return (
    <div>
      <Navbar />
      <div className="background">
      <main className="main-content"> 
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/contacts" element={<Contacts />}/>
        </Routes>
      </main>
      </div>
    </div>
  );
}

export default App;
