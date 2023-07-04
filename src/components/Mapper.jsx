import React, { useState } from 'react';
import ImageMapper from 'react-img-mapper';
import useStaticMap from '../hooks/useStaticMap';
import mapImg from '../map.png';


const Mapper = () => {
   // const URL = 'https://raw.githubusercontent.com/img-mapper/react-docs/master/src/assets/example.jpg';
  
    //const MAP = {
    //    name: 'my-map',
    //    // GET JSON FROM BELOW URL AS AN EXAMPLE
    //    areas: 'https://raw.githubusercontent.com/img-mapper/react-docs/master/src/assets/example.json',
 
    //};
    const map= useStaticMap();

    const [msg, setMsg] = useState("");

    function clicked(area) {
        alert(area.name);
        setMsg(`Clicked ${area.shape}`);
    }

    function enterArea(area) {
       setMsg(`You entered ${area.shape} ${area.name} at coords ${JSON.stringify(
                area.coords)}
            `
        );
    }
    function leaveArea(area) {
      setMsg(`You leaved ${area.shape} ${area.name} at coords ${JSON.stringify(
                area.coords
            )} !`
        );
    }
    function moveOnArea(area, evt) {
        const coords = { x: evt.nativeEvent.layerX, y: evt.nativeEvent.layerY };
        //console.log(`coords ${ JSON.stringify(coords) }!`);
        setMsg(`You moved on ${area.shape} ${area.name
                } at coords ${JSON.stringify(coords)} !`
        );
    }

    return <>
        <div className="row">
            <div className="col-1"></div>
            <div className="col-6" style={{ backgroundColor:"rgb(250,10,4)" }}>
        <ImageMapper
            src={mapImg}
            map={map}
            onClick={(area) => clicked(area)}
            onMouseEnter={(area) => enterArea(area)}
            onMouseLeave={(area) => leaveArea(area)}
            onMouseMove={(area, _, evt) => moveOnArea(area, evt)}
            responsive={true}
            parentWidth={'100%'}
            />
            </div>
            <div className="col-4" style={{ backgroundColor: "rgb(10,4,200)" }}>
            </div>
            <div className="col-1"></div>

        </div>
            <span>{msg}</span>

    </>
}

export default Mapper;