import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { paths, requestOptions } from "../constants/api";
import { IFixtureData, IFixturesResponse } from "src/app/shared/models/fixture/IFixturesResponse";
import { Observable, map, shareReplay } from "rxjs";
import { environment } from "src/environments/environment";


@Injectable({
    providedIn: 'root'
})
export class TeamService {

    private cacheMap: Map<string, Observable<IFixtureData[]>> = new Map<string, Observable<IFixtureData[]>>();
    private baseUrl: string = environment.BASE_URL;
    private http = inject(HttpClient);

    getFixture(leagueId: string, teamId: string): Observable<IFixtureData[]> {
      const response = this.http.get<IFixturesResponse>(this.baseUrl + paths.FIXTURES + `?league=${leagueId}&team=${teamId}&last=10`, requestOptions);
      return response.pipe(map(_fixture => _fixture.response));
    }

    getByIds(leagueId: string, teamId: string): Observable<IFixtureData[]> {

      const key: string = leagueId + '-' + teamId;

      if(!this.cacheMap.has(key)) {
            this.cacheMap.set(
                key,
                this.getFixture(leagueId, teamId)
                .pipe(
                    shareReplay(1)
                )
            )
        }

        return this.cacheMap.get(key)!;
    }

}
