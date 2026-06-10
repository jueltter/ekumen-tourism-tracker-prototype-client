import { inject, Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {map, Observable} from 'rxjs';
import { EnvironmentService } from 'src/app/shared/services/environment.service';
import { Achievement } from '@tourism-tracker-interfaces/achievement.interface';


@Injectable({
  providedIn: 'root',
})
export class AchievementService {
  private environmentService = inject(EnvironmentService);
  private url = this.environmentService.backendUrl + '/api/achievements';

  private http = inject(HttpClient);

  search(): Observable<Achievement[]> {
    let params = new HttpParams();

    return this.http.get<Achievement[]>(this.url, {params});
  }

}
