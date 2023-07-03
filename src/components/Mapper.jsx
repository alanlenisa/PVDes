import React, { useState } from 'react';
import ImageMapper from 'react-img-mapper';
import mapImg from '../map.png';

const Mapper = () => {
   // const URL = 'https://raw.githubusercontent.com/img-mapper/react-docs/master/src/assets/example.jpg';
    const URL = '../sun_logo.png';
    const MAP = {
        name: 'my-map',
        // GET JSON FROM BELOW URL AS AN EXAMPLE
        areas: 'https://raw.githubusercontent.com/img-mapper/react-docs/master/src/assets/example.json',
 
    };
    const [map, setMap] = useState(
        {
            name: "my-map",
            areas: [
                {
                    name: "1",
                    shape: "poly",
                    coords: [25, 33, 27, 300, 128, 240, 128, 94],
                    preFillColor: "#5da0d02e",
                    lineWidth: 5,
                    lineColor: "red",
                    lol:"aaa"
                },
                {
                    name: "2",
                    shape: "poly",
                    coords: [219, 118, 220, 210, 283, 210, 284, 119],
                    lineWidth: 2,
                    strokeColor: "rgb(255, 99, 71)",
                    preFillColor: "#d05db74d",
                    fillColor: "yellow"
                },
                {
                    name: "3",
                    shape: "poly",
                    coords: [381, 241, 383, 94, 462, 53, 457, 282],
                    fillColor: "yellow"
                },
                {
                    name: "4",
                    shape: "poly",
                    coords: [245, 285, 290, 285, 274, 239, 249, 238],
                    preFillColor: "red"
                },
                { name: "5", shape: "circle", coords: [170, 100, 25] }
            ]
        }
    );

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
        <ImageMapper
            src={mapImg}
            map={map}
            onClick={(area) => clicked(area)}
            onMouseEnter={(area) => enterArea(area)}
            onMouseLeave={(area) => leaveArea(area)}
            onMouseMove={(area, _, evt) => moveOnArea(area, evt)}
            responsive={true}
            parentWidth={600}
        />
        <span>{msg}</span>
    </>
}

export default Mapper;