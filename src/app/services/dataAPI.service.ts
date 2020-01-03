import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { config } from 'src/app/config/settings';
import { map } from 'rxjs/operators';
import { TeamsAdapter } from 'src/app/models/teams.model';
import { HistoryAdapter } from '../models/history.model';
import { PlayerAdapter } from '../models/player.model';
import { AllPlayersAdapter } from '../models/allPlayers.model';
import { AppConfigService } from './AppConfig.service';
@Injectable({
    providedIn: 'root'
})
export class DataAPIService {
    api_url;

    constructor(
        private http: HttpClient,
        private teamsAdapter: TeamsAdapter,
        private historyAdapter:HistoryAdapter,
        private playerAdapter:PlayerAdapter,
        private allPlayersAdapter: AllPlayersAdapter,
        private appConfigService: AppConfigService
    ){
        this.api_url = this.getApiUrl();
    }

    getApiUrl() : string{
        return this.appConfigService.config['api_url'];
    }
    
    getPlayerSummary(id) {
        return this.http.get(`${this.api_url}/fpl/element-summary/${id}/`);
    }
    getAllTeams() {
        return this.http.get(`${this.api_url}/fpl/teams`)
            .pipe(
                map((data: any[]) => data.map((item: any) => this.teamsAdapter.adapt(item)))
                //map((data: any[]) => this.adapter.adapt(data))
            );
        ;
    }
    getAllPlayers() {
        return this.http.get(`${this.api_url}/fpl/elements`)
        .pipe(
           // map((data: any[]) => data.map((item: any) => this.playerAdapter.adapt(item)))
           map((data: any[]) => data.map((item: any) => this.allPlayersAdapter.adapt(item)))
        );
    }
    getPlayerInfo(id) {
        return this.http.get(`${this.api_url}/fpl/element/${id}/info`)
        .pipe(
           // map((data: any[]) => data.map((item: any) => this.playerAdapter.adapt(item)))
            map((data: any[]) => this.playerAdapter.adapt(data))
        );
    }
    getPlayerHistory(id) {
        return this.http.get(`${this.api_url}/fpl/element/${id}/history`)
        .pipe(
            map((data: any[]) => data.map((item: any) => this.historyAdapter.adapt(item)))
            //map((data: any[]) => this.adapter.adapt(data))
        );
    }
}
