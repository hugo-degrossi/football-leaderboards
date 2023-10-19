import { IPaging } from "../shared/IPaging"
import { IParameters } from "../shared/IParameters"
import { IFixture } from "./IFixture"

export interface IFixturesResponse {
  get: string
  parameters: IParameters
  errors: string[]
  results: number
  paging: IPaging
  response: IFixtureData[]
}


export interface IFixtureData {
  fixture: IFixture
  league: League
  teams: Teams
  goals: Goals
  score: Score
}


interface League {
  id: number
  name: string
  country: string
  logo: string
  flag: string
  season: number
  round: string
}

interface Teams {
  home: Home
  away: Away
}

interface Home {
  id: number
  name: string
  logo: string
  winner?: boolean
}

interface Away {
  id: number
  name: string
  logo: string
  winner?: boolean
}

interface Goals {
  home: number
  away: number
}

interface Score {
  halftime: Halftime
  fulltime: Fulltime
  extratime: Extratime
  penalty: Penalty
}

interface Halftime {
  home: number | null
  away: number | null
}

interface Fulltime {
  home: number | null
  away: number | null
}

interface Extratime {
  home: number | null
  away: number | null
}

interface Penalty {
  home: number | null
  away: number | null
}
