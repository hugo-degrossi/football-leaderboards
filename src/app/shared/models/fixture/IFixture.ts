export interface IFixture {
    id: number
    referee: string
    timezone: string
    date: string
    timestamp: number
    periods: Periods
    venue: Venue
    status: Status
  }
  
  export interface Periods {
    first: number
    second: number
  }
  
  export interface Venue {
    id: number
    name: string
    city: string
  }
  
  export interface Status {
    long: string
    short: string
    elapsed: number
  }
  