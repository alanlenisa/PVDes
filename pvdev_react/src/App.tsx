import React from 'react';
import logo from './sun_logo.png';
import './App.css';
import { useCurrentLanguage } from "./hooks/useLanguage";
import Mapper from './components/Mapper';

function App() {
    const T = useCurrentLanguage();



    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p className="title" >{T("ui_welcome")}</p>
        
       
            </header>
        <Mapper/>
        </div>
  );
}

export default App;
