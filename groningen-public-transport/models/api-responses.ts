import { Line } from './line';
import { LineDetail } from './line-detail';

export interface LinesResponse {
  [key: string]: Line
}

export interface LineDetailsResponse {
  [key: string]: LineDetail
}
