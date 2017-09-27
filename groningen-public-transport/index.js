"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const request = require("request-promise-native");
const normalizers_1 = require("./normalizers");
request.get('http://v0.ovapi.nl/line')
    .then((data) => JSON.parse(data))
    .then(data => normalizers_1.normalizeLines(data))
    .then(lines => {
    return lines.filter((line) => line.LineName.indexOf('Groningen') >= 0);
})
    .then(groningenLines => groningenLines.slice(0, 4))
    .then(groningenLines => fetchLineDetail(groningenLines))
    .then(linesDetails => {
    linesDetails.forEach(lineDetail => {
        for (let lineName in lineDetail.Actuals) {
            let line = lineDetail.Actuals[lineName];
            console.log(`${lineName} is around ${line.TimingPointName} (lat: ${line.latitude}, long: ${line.longitude})`);
        }
    });
});
function fetchLineDetail(lines) {
    let query = lines
        .map(line => `${line.DataOwnerCode}_${line.LinePlanningNumber}_${line.LineDirection}`)
        .reduce((prev, curr) => `${prev},${curr}`);
    return request.get(`http://v0.ovapi.nl/line/${query}`)
        .then((data) => JSON.parse(data))
        .then((data) => normalizers_1.normalizeLineDetails(data));
}
