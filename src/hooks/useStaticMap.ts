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
            coords: [0, 0, 376, 0, 376, 340, 0, 340],
            preFillColor: "#5da0d02e",
            lineWidth: 5,
            lineColor: "red",
            lol: "aaa"
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
};

export default function useStaticMap() { return staticMap; };
