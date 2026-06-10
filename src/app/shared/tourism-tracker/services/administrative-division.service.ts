import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { EnvironmentService } from '@common-services/environment.service';
import { AdministrativeDivision } from '@tourism-tracker-interfaces/administrative-division.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AdministrativeDivisionService {
  private environmentService = inject(EnvironmentService);
  private url = this.environmentService.backendUrl + '/api/administrative-divisions';

  private http = inject(HttpClient);

  findAll(): Observable<AdministrativeDivision[]> {
    let params = new HttpParams();

    return this.http.get<AdministrativeDivision[]>(this.url, {params});
  }

  findById(id: number): Observable<AdministrativeDivision> {
    let params = new HttpParams();

    return this.http.get<AdministrativeDivision>(`${this.url}/${id}`, {params});
  }


}
