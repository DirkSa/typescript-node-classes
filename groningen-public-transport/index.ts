import request = require('request-promise-native');

import {normalizeLines, normalizeLineDetails} from './normalizers';
import { LinesResponse, LineDetailsResponse } from './models/api-responses';
import { LineDetail } from './models/line-detail';
import { Line } from './models/line';

request.get('http://v0.ovapi.nl/line')
  .then((data):LinesResponse => JSON.parse(data))
  .then(data => normalizeLines(data))
  .then(lines => {
    // filter only Groningen lines
    return lines.filter((line) => line.LineName.indexOf('Groningen') >= 0)
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

function fetchLineDetail(lines: Line[]): Promise<LineDetail[]> {
  let query = lines
    .map(line => `${line.DataOwnerCode}_${line.LinePlanningNumber}_${line.LineDirection}`)
    .reduce((prev, curr) => `${prev},${curr}`);
  
  return request.get(`http://v0.ovapi.nl/line/${query}`)
    .then((data): LineDetailsResponse => JSON.parse(data))
    .then((data): LineDetail[] => normalizeLineDetails(data));
}
