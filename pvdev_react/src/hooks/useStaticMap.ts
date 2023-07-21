const staticMap = {
    name: "my-map",
    areas: [
        {
            name: "2",
            shape: "poly",
            coords: [219, 118, 220, 210, 283, 210, 284, 119],
            lineWidth: 2,
            strokeColor: "rgb(255, 99, 71)",
            preFillColor: "#d05db74d",
            fillColor: "yellow"
        }, {
            name: "1",
            shape: "poly",
            coords: [10, 10, 376, 10, 376, 340, 0, 340],
            preFillColor: "#5da0d02e",
            lineWidth: 1,
            lineColor: "blue",
            lol: "aaa"
        },

        {
            name: "3",
            shape: "poly",
            coords: [381, 241, 383, 94, 462, 53, 457, 282],
            fillColor: "blue"
        },
        {
            name: "4",
            shape: "poly",
            coords: [245, 285, 290, 285, 274, 239, 249, 238],
            preFillColor: "yellow"
        },
        { name: "5", shape: "circle", coords: [170, 100, 25] },
        {
            name: "Inverter",
            shape: "poly",
            coords: [800, 600, 900, 600, 900, 700, 800, 700],
            preFillColor: "yellow",
            text:"YYY"
        },
    ]
};

export default function useStaticMap() { return staticMap; };
