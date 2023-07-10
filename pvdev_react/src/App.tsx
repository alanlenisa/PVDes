import React from 'react';
import logo from './sun_logo.png';
import './App.css';
import { useCurrentLanguage } from "./hooks/useLanguage";
import Mapper from './components/Mapper';
import Settings from './components/Settings';
import { useAppStore } from './hooks/useAppStore';

function App() {
    const T = useCurrentLanguage();


    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p className="title" >{T("ui_welcome")}</p>
        
       
            </header>
            <div className="row">
                <div className="LOL-d-sm-none col-1 "></div>
                <div className="col-6 " style={{ backgroundColor: "rgba(250,10,4,0.1)" }}>          
                    <Mapper />
                </div>
                <div className="col-4" style={{ backgroundColor: "rgba(10,4,200,0.1)" }}>
                    <Settings />
                </div>
                <div className="col-1"></div>

            </div>
        </div>
  );
}

export default App;
