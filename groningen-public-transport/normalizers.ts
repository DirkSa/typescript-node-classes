import { Line } from "./models/line";
import { LinesResponse, LineDetailsResponse } from "./models/api-responses";
import { LineDetail } from "./models/line-detail";

export function normalizeLines(linesResponse: LinesResponse): Line[] {
  let result: Line[] = [];
  for (let lineName in linesResponse) {
    let line = linesResponse[lineName];
    result.push(line);
  }
  return result;
}

export function normalizeLineDetails(lineDetails: LineDetailsResponse): LineDetail[] {
  let result: LineDetail[] = [];
  for (let lineName in lineDetails) {
    let lineDetail = lineDetails[lineName];
    result.push(lineDetail);
  }
  return result;
}