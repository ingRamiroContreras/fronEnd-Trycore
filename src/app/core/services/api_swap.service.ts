import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';
import { Observable ,  throwError } from 'rxjs';

import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable()
export class ApiSwapService {
  constructor(
    private http: HttpClient
  ) {}

  private formatErrors(error: any) {
    return  throwError(error.error);
  }

  get(path: string, params: HttpParams = new HttpParams()): Observable<any> {
    return this.http.get(`${environment.api_swapi}${path}`, { params })
      .pipe(catchError(this.formatErrors));
  }

}
