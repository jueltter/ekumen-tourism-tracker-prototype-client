import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { EnvironmentService } from '@common-services/environment.service';
import { RequestResponse } from '@tourism-tracker-interfaces/request-response.interface';
import { TourismExperience } from '@tourism-tracker-interfaces/tourism-experience.interface';
import { map, Observable } from 'rxjs';

type TourismExperienceArrayResponse = RequestResponse<TourismExperience[]>;
type TourismExperienceResponse = RequestResponse<TourismExperience>;


@Injectable({
  providedIn: 'root',
})
export class TourismExperienceService {
  private environmentService = inject(EnvironmentService);
  private url = this.environmentService.backendUrl + '/api/tourism-experiences';

  private http = inject(HttpClient);

  findAll(): Observable<TourismExperience[]> {
    let params = new HttpParams();

    return this.http.get<TourismExperienceArrayResponse>(this.url, {params}).pipe(map(x => x.data));
  }

  findById(id: number): Observable<TourismExperience> {
    let params = new HttpParams();

    return this.http.get<TourismExperienceResponse>(`${this.url}/${id}`, {params}).pipe(map(x => x.data));
  }


}
