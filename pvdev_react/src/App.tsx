import React, { createRef, useEffect, useLayoutEffect, useRef, useState } from 'react';
import logo from './sun_logo.png';
import './App.css';
import { useCurrentLanguage } from "./hooks/useLanguage";
import Mapper from './components/Mapper';
import Settings from './components/Settings';
import { useAppStore } from './hooks/useAppStore';

function App() {
    const T = useCurrentLanguage();



    //needed to pass parent width to mapper
    const refDiv=useRef<HTMLDivElement>(null); 
    const [w, setW] = useState(0);


    //extract div width
    useLayoutEffect(() => {
        function updateSize() { 
            if (refDiv.current) {
                const div = refDiv.current as Element;
                setW(div.getBoundingClientRect().width);
            }
        }
        updateSize();

        //if window resize, need to recalc
        window.addEventListener('resize', updateSize);
        return () => window.removeEventListener('resize', updateSize);
    }, []);

    //function getParentWidth() :number{
    //    if (refDiv.current)
    //        return refDiv.current.getBoundingClientRect().widt;
    //    else return 500;
    //}


    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p className="title" >{T("ui_welcome")}</p>
        
       
            </header>
            <div className="row">
                <div className="d-none d-sm-block col-1 "></div>
                <div className="col-sm-6 col-12 " ref={ refDiv} style={{ backgroundColor: "rgba(250,10,4,0.1)" }}>          
                    <Mapper parentW={w } />
                </div>
                <div className="col-sm-4 col-12" style={{ backgroundColor: "rgba(10,4,200,0.1)" }}>
                    <Settings />
                </div>
                <div className="d-sm-none col-1"></div>

            </div>
        </div>
  );
}

export default App;
