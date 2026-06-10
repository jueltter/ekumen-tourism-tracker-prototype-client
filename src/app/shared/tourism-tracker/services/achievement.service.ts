import { inject, Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {map, Observable, tap} from 'rxjs';
import { EnvironmentService } from 'src/app/shared/services/environment.service';
import { Achievement } from '@tourism-tracker-interfaces/achievement.interface';
import { RequestResponse } from '@tourism-tracker-interfaces/request-response.interface';
import { LoggerWrapperService } from '@common-services/logger-wrapper.service';

type AchievementArrayResponse = RequestResponse<Achievement[]>;

@Injectable({
  providedIn: 'root',
})
export class AchievementService {
  private logger = inject(LoggerWrapperService);
  private environmentService = inject(EnvironmentService);
  private url = this.environmentService.backendUrl + '/api/achievements';

  private http = inject(HttpClient);

  search(): Observable<Achievement[]> {
    let params = new HttpParams();

    return this.http.get<AchievementArrayResponse>(this.url, {params}).pipe(
      tap(x => this.logger.info('response:', x)),
      map(x => x.data),
      tap(x => this.logger.info('Fetched achievements:', x.length))
    );
  }

}
