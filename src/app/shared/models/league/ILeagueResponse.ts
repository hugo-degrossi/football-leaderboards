import { IPaging } from "../shared/IPaging"
import { IParameters } from "../shared/IParameters"

export interface ILeagueResponse {
  get: string
  parameters: IParameters
  errors: string[]
  results: number
  paging: IPaging
  response: Response[]
}


interface Response {
  league: League
  country: Country
  seasons: Season[]
}

interface League {
  id: number
  name: string
  type: string
  logo: string
}

interface Country {
  name: string
  code: string
  flag: string
}

interface Season {
  year: number
  start: string
  end: string
  current: boolean
  coverage: Coverage
}

interface Coverage {
  fixtures: Fixtures
  standings: boolean
  players: boolean
  top_scorers: boolean
  top_assists: boolean
  top_cards: boolean
  injuries: boolean
  predictions: boolean
  odds: boolean
}

interface Fixtures {
  events: boolean
  lineups: boolean
  statistics_fixtures: boolean
  statistics_players: boolean
}
