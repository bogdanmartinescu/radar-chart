const D3Node = require('d3-node');
const d3n = new D3Node();
const d3 = d3n.d3;

const RadarChart = require('../');
const express = require('express');
const app = express();

app.get('/', (req, res) => {
    var data = [
        [
            { "axis": "Data science", "value": 0 },
            { "axis": "Analysis", "value": 2 },
            { "axis": "Architecture", "value": 2 },
            { "axis": "Operations", "value": 3 },
            { "axis": "Back-end", "value": 4 },
            { "axis": "Front-end", "value": 5 },
            { "axis": "UI/UX", "value": 1 },
            { "axis": "Testing", "value": 2 },
            { "axis": "Code review", "value": 1 },
            { "axis": "Documentation", "value": 3 }
        ]
    ];

    var options = {
        w: 600,
        h: 600,
        margin: { top: 100, right: 100, bottom: 100, left: 100 },
        maxValue: 5,
        levels: 5,
        roundStrokes: false,
        color: d3.scaleOrdinal().range(["#e05f32", "#CC333F", "#00A0B0"])
    };

    res.send(RadarChart(data, options));
});

app.listen(3000, () => console.log('server running'))