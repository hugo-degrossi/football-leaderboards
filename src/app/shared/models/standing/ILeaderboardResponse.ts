import { IPaging } from "../shared/IPaging"
import { IParameters } from "../shared/IParameters"
import { ILeaderboard } from "./ILeaderboard"

export interface ILeaderboardResponse {
  get: string
  parameters: IParameters
  errors: any[]
  results: number
  paging: IPaging
  response: ILeaderboardData[]
}


interface ILeaderboardData {
  league: ILeaderboard
}
  