import { Injectable } from '@angular/core';
import { HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ApiService } from './api.service';
import { People } from '../models';
import { map } from 'rxjs/operators';

@Injectable()
export class PeoplesBDService {
  constructor(
    private apiService: ApiService
  ) { }

  get(): Observable<People[]> {
    return this.apiService.get('/Peoples')
      .pipe(map(data => data));
  }

  destroy(slug) {
    return this.apiService.delete('/Peoples/' + slug);
  }

  save(People:People): Observable<People> {
    return this.apiService.post('/Peoples', People)
      .pipe(map(data => data));

  }

}