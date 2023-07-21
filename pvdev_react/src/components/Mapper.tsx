import React, { useState } from 'react';
//import ImageMapper from 'react-img-mapper';
import ImageMapper, { AreaEvent, CustomArea } from '../react-img-mapper/ImageMapper';
import useStaticMap from '../hooks/useStaticMap';
import mapImg from '../map.png';

interface MapperProps {
    parentW:number
}

const Mapper = (props: MapperProps) => {

    const URL = 'https://raw.githubusercontent.com/img-mapper/react-docs/master/src/assets/example.jpg';
  
    //const MAP = {
    //    name: 'my-map',
    //    // GET JSON FROM BELOW URL AS AN EXAMPLE
    //    areas: 'https://raw.githubusercontent.com/img-mapper/react-docs/master/src/assets/example.json',
 
    //};
    const map= useStaticMap();
  //  alert(map.areas.length);
    const [msg, setMsg] = useState("");

    function clicked(area: any) {
        alert(area.name);
        setMsg(`Clicked ${area.shape}`);
    }

    function enterArea(area: CustomArea) {
       setMsg(`You entered ${area.shape} ${area.id} at coords ${JSON.stringify(
                area.coords)}
            `
        );
    }
    function leaveArea(area: CustomArea) {
      setMsg(`You leaved ${area.shape} ${area.id} at coords ${JSON.stringify(
                area.coords
            )} !`
        );
    }
    function moveOnArea(area: CustomArea, evt: any) {
        const coords = { x: evt.nativeEvent.layerX, y: evt.nativeEvent.layerY };
        //console.log(evt);
        setMsg(`You moved on ${area.shape} ${area.id
                } at coords ${JSON.stringify(coords)} !`
        );
    }
 //              responsive={true}
 //           parentWidth={500}parentWidth={'100%'}
    return <>
         <ImageMapper
            src={mapImg}
           
            map={map}
            onClick={(area) => clicked(area)}
            onMouseEnter={(area) => enterArea(area)}
            onMouseLeave={(area) => leaveArea(area)}
            onMouseMove={(area, _, evt) => moveOnArea(area, evt)}
            
            responsive={true}
            parentWidth={props.parentW}
            />

            <span>{msg}</span>

    </>
}

export default Mapper;