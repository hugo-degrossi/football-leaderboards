import { IStanding } from "./IStanding"

export interface ILeaderboard {
  id: number
  name: string
  country: string
  logo: string
  flag: string
  season: number
  standings: IStanding[][]
}
