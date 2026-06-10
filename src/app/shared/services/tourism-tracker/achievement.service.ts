import { inject, Injectable, InjectionToken } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {map, Observable} from 'rxjs';
import { environment } from '../../../../environments/environment';

export const APP_CONFIG = new InjectionToken<typeof environment>('app.config');

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
  private config = inject(APP_CONFIG);
  private url = this.config.backendUrl + '/api/achievements';

  constructor(private http: HttpClient) { }

  search(): Observable<Achievement[]> {
    let params = new HttpParams();

    return this.http.get<any>(this.url, {params}).pipe(map(x => x.data));
  }

}
