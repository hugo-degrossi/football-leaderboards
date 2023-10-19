import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { Observable, map, shareReplay, switchMap } from "rxjs";
import { paths, requestOptions } from "../constants/api";
import { ILeaderboardResponse } from "src/app/shared/models/standing/ILeaderboardResponse";
import { ILeaderboard } from "src/app/shared/models/standing/ILeaderboard";
import { environment } from "src/environments/environment";
import { ILeagueResponse } from "src/app/shared/models/league/ILeagueResponse";

@Injectable(
    {providedIn: 'root'}
)
export class LeaderboardService {

    private cacheMap: Map<string, Observable<ILeaderboard>> = new Map<string, Observable<ILeaderboard>>();
    private baseUrl: string = environment.BASE_URL;
    private http = inject(HttpClient);

    getCountryLeaderboard(leagueId: string): Observable<ILeaderboard> {
      let response: Observable<ILeaderboard>;
      let season: Observable<ILeagueResponse>;

      season =  this.http.get<ILeagueResponse>(this.baseUrl + paths.LEAGUES + `?current=true&id=${leagueId}`, requestOptions);

        response = season.pipe(
            map(_league => _league.response[0].seasons[0].year),
            switchMap(_season => this.http.get<ILeaderboardResponse>(this.baseUrl + paths.STANDINGS + `?league=${leagueId}&season=${_season}`, requestOptions)),
            map(_leaderboard => _leaderboard.response[0].league)
        );

        return response;
    }

    getById(id: string): Observable<ILeaderboard> {

        if(!this.cacheMap.has(id)) {
            this.cacheMap.set(
                id,
                this.getCountryLeaderboard(id)
                .pipe(
                    shareReplay(1)
                )
            )
        }

        return this.cacheMap.get(id)!;
    }

}
