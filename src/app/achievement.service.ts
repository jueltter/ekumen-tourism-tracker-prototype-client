import { Injectable } from '@angular/core';
import {environment} from '../environments/environment';
import {HttpClient, HttpParams} from '@angular/common/http';
import {map, Observable} from 'rxjs';

interface Achievement {
  id: number;
  title: string;
  description: string;
  points: number;
  pointType: string;
  administrativeDivision: number;
}


@Injectable({
  providedIn: 'root',
})
export class AchievementService {
  private url = environment.backendUrl + '/api/achievements';

  constructor(private http: HttpClient) { }

  search(): Observable<Achievement[]> {
    let params = new HttpParams();

    return this.http.get<any>(this.url, {params}).pipe(map(x => x.data));
  }

}
