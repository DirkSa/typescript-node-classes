export interface LineDetail {
  Actuals: ActualLines
}

export interface ActualLines {
  [key: string]: Actual
}

export interface Actual {
  TransportType: string,
  longitude: number,
  latitude: number,
  TargetArrivalTime: Date,
  TimingPointName: string
}
